import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../service/order.service";
import {OrderDto} from "../../../dto/order.dto";
import {finalize} from "rxjs";
import {ImageService} from "../../../service/image.service";
import {AddressService} from "../../../service/address.service";
import {AddressDto} from "../../../dto/address.dto";
import {AuthenticationService} from "../../../service/authentication.service";
import {PopConfirmComponent} from "../pop-confirm/pop-confirm.component";
import {MdbPopconfirmRef, MdbPopconfirmService} from "mdb-angular-ui-kit/popconfirm";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  title = "Lịch sử mua hàng";
  orders: OrderDto[] = []
  images: Map<number, string> = new Map<number, string>()

  popconfirmRef: MdbPopconfirmRef<PopConfirmComponent> | null = null;

  constructor(private orderService: OrderService, private imageService: ImageService,
              private addressService: AddressService,
              private authenticationService: AuthenticationService,
              private popconfirmService: MdbPopconfirmService,
              private router: Router) {
  }

  ngOnInit(): void {
    document.title = 'AHA - ' + this.title;
    this.orderService.getOrders()
      .subscribe((orders) => {
        orders.forEach(order => {
          this.addressService.getWardDepth1(order.address.wardCode)
            .pipe(finalize(() => {
            }))
            .subscribe(wardRes => {
              this.addressService.getDistrictDepth1(order.address.districtCode).subscribe(districtRes => {
                this.addressService.getProvinceDepth1(districtRes.province_code).subscribe(provinceRes => {
                  let addressDto: AddressDto = {
                    id: order.address.id,
                    province: provinceRes.name,
                    district: districtRes.name,
                    ward: wardRes.name,
                    street: order.address.street,
                    apartment: order.address.apartment,
                  };

                  for (let orderItem of order.orderItems) {
                    this.imageService.getProductImageUrlImage(orderItem.productDetail.image[0].imageUrl).subscribe(url => {
                      if (!this.images.has(orderItem.productDetail.id)) {
                        this.images.set(orderItem.productDetail.id, url)
                      }
                    })
                  }

                  this.orders.push(OrderDto.createFromEntity(order, this.authenticationService.getUserInfoFromLocalStorage(), addressDto));
                })
              })
            })
        });
      })
  }

  formatVND(price: number): string {
    return price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
  }

  cancelOrder(orderTrackingNumber: string) {
    this.orderService.cancelOrder(orderTrackingNumber)
      .subscribe(response => {
        if (response.success) {
          this.router.navigate(['/']).then(() => {
              this.router.navigate(['/account/order-history']).then();
            }
          )
        }
      })
  }

  openPopConfirm(event: Event, orderTrackingNumber: string) {
    const target = event.target as HTMLElement;
    this.popconfirmRef = this.popconfirmService.open(PopConfirmComponent, target, {
      popconfirmMode: 'modal', data: {
        title: 'Xác nhận hủy đơn hàng',
        message: 'Bạn có chắc chắn muốn hủy đơn hàng này không?',
        confirmText: 'Xác nhận',
        cancelText: 'Hủy',
        orderTrackingNumber: orderTrackingNumber
      }
    });
    this.popconfirmRef.onConfirm.subscribe(() => {
      this.cancelOrder(orderTrackingNumber);
    })
  }
}
