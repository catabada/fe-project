import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Province} from "../../../model/province..model";
import {District} from "../../../model/district.model";
import {Ward} from "../../../model/ward.model";
import {AddressService} from "../../../service/address.service";
import {CheckoutItem} from "../../../model/checkout-item.model";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../model/product.model";
import {AppUserService} from "../../../service/app-user.service";
import {UserInfoResponse} from "../../../dto/user-info-response.dto";
import {AuthenticationService} from "../../../service/authentication.service";
import {OrderService} from "../../../service/order.service";
import {OrderCreate} from "../../../dto/order-create.dto";
import {OrderItem, orders} from "../../../model/order.model";
import {Router} from "@angular/router";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  provinces!: Province[];
  provinceSelected!: number;

  districts!: District[];
  districtSelected!: number;

  wards!: Ward[];
  wardSelected!: number;

  checkout: CheckoutItem[]
  product!: Product

  userInfoResponse: UserInfoResponse
  checkoutFormGroup: FormGroup

  constructor(private httpClient: HttpClient,
              private addressService: AddressService,
              private formBuilder: FormBuilder,
              private appUserService: AppUserService,
              private authenticationService: AuthenticationService,
              private orderService: OrderService,
              private router: Router,
              private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.fetchProvinces()
    if (sessionStorage?.getItem('checkout')) {
      this.checkout = CheckoutComponent.getCheckoutFromSessionStorage()
    }
    this.userInfoResponse = this.authenticationService.getUserInfoFromLocalStorage();

    this.checkoutFormGroup = this.formBuilder.group({
      firstName: new FormControl(this.userInfoResponse.firstName, [
        Validators.required
      ]),
      lastName: new FormControl(this.userInfoResponse.lastName, [
        Validators.required
      ]),
      phone: new FormControl(this.userInfoResponse.phone, [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]),
      email: new FormControl(this.userInfoResponse.email, [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      province: new FormControl('Chọn tỉnh/thành phố', [
        Validators.required
      ]),
      district: new FormControl('Chọn quận/huyện', [
        Validators.required
      ]),
      ward: new FormControl('Chọn phường xã', [
        Validators.required
      ]),
      street: new FormControl('', [
        Validators.required
      ]),
      apartment: new FormControl('', [
        Validators.required
      ]),
    })
  }

  private static getCheckoutFromSessionStorage(): CheckoutItem[] {
    return JSON.parse(sessionStorage.getItem('checkout') ?? '{}')
  }

  public totalPrice(): number {
    return this.checkout.reduce((acc, cur) => {
      return acc + cur.productDetailDto.unitPrice * cur.quantity
    }, 0)
  }

  private fetchProvinces() {
    this.addressService.getProvinces().subscribe(
      response => {
        this.provinces = response;
      })
  }

  public onProvinceSelect($event: any) {
    this.addressService.getProvince(this.provinceSelected).subscribe(
      province => {
        this.districts = province.districts;
      });
  }

  public onDistrictSelect($event: any) {
    this.addressService.getDistrict(this.districtSelected).subscribe(
      district => {
        this.wards = district.wards;
      }
    );
  }

  onSubmit(checkoutForm: any) {
    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
    } else {
      let orderItems: OrderItem[]
      orderItems = this.checkout.map(item => {
        return {
          productDetail: item.productDetailDto,
          quantity: item.quantity
        }
      })
      let totalPrice = this.totalPrice();
      let userId: number = this.authenticationService.getUserInfoFromLocalStorage().id
      let orderCreate: OrderCreate = {
        fullName: checkoutForm.lastName + ' ' + checkoutForm.firstName,
        phone: checkoutForm.phone,
        address: {
          id: 0,
          street: checkoutForm.street,
          apartment: checkoutForm.apartment,
          districtCode: checkoutForm.district,
          wardCode: checkoutForm.ward,
        },
        userId: userId,
        orderItems: orderItems,
        totalPrice: totalPrice
      }
      this.orderService.createOrder(orderCreate).subscribe(
        response => {
          if (response.success) {
            sessionStorage.removeItem('checkout');
            this.cartService.removeCartFromLocalStorage()
            this.router.navigate(['/order-complete'])
          }
        }
      )
    }
  }

  get firstName(): AbstractControl {
    return this.checkoutFormGroup.get('firstName') as AbstractControl
  }
  get lastName(): AbstractControl {
    return this.checkoutFormGroup.get('lastName') as AbstractControl
  }
  get phone(): AbstractControl {
    return this.checkoutFormGroup.get('phone') as AbstractControl
  }
  get email(): AbstractControl {
    return this.checkoutFormGroup.get('email') as AbstractControl
  }
  get province(): AbstractControl {
    return this.checkoutFormGroup.get('province') as AbstractControl
  }
  get district(): AbstractControl {
    return this.checkoutFormGroup.get('district') as AbstractControl
  }
  get ward(): AbstractControl {
    return this.checkoutFormGroup.get('ward') as AbstractControl
  }
  get street(): AbstractControl {
    return this.checkoutFormGroup.get('street') as AbstractControl
  }
  get apartment(): AbstractControl {
    return this.checkoutFormGroup.get('apartment') as AbstractControl
  }

  formatVND(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'
  }
}
