import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Province} from "../../../model/province..model";
import {DistrictModel} from "../../../model/district.model";
import {WardModel} from "../../../model/ward.model";
import {AddressService} from "../../../service/address.service";
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';
import {CheckoutItem} from "../../../model/checkout-item.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {max} from "rxjs";
import {ProductDetailService} from "../../../service/product-detail.service";
import {ProductDetail} from "../../../model/product-detail.model";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  provinces!: Province[];
  provinceSelected!: number;

  districts!: DistrictModel[];
  districtSelected!: number;

  wards!: WardModel[];
  wardSelected!: number;

  checkout: CheckoutItem[]
  product!: Product

  checkoutFormGroup: FormGroup

  constructor(private httpClient: HttpClient, private addressService: AddressService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.fetchProvinces()
    if(sessionStorage?.getItem('checkout')) {
      this.checkout = JSON.parse(sessionStorage?.getItem('checkout') ?? '{}')
    }
    this.checkoutFormGroup = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(10)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      province: new FormControl('', [
        Validators.required
      ]),
      district: new FormControl('', [
        Validators.required
      ]),
      ward: new FormControl('', [
        Validators.required
      ]),
      street: new FormControl('', [
        Validators.required
      ]),
      apartmentNumber: new FormControl('', [
        Validators.required
      ]),
    })
  }

  public totalPrice(): number {
    return this.checkout.reduce((acc, cur) => {
     return  acc + cur.productDetailDto.unitPrice * cur.quantity
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
}
