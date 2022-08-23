import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../service/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderDto} from "../../../dto/order.dto";
import {AppUtil} from "../../../util/app-util";
import {AddressDto} from "../../../dto/address.dto";
import {ImageService} from "../../../service/image.service";
import {DatePipe} from "@angular/common";
import {PopConfirmComponent} from "../pop-confirm/pop-confirm.component";
import {MdbPopconfirmRef, MdbPopconfirmService} from "mdb-angular-ui-kit/popconfirm";

@Component({
  selector: 'app-orderDetail-history',
  templateUrl: './orderDetail-history.component.html',
  styleUrls: ['./orderDetail-history.component.scss']
})
export class OrderDetailHistoryComponent implements OnInit {
  title: string = "Chi tiết đơn hàng"
  order: OrderDto
  images: Map<number, string> = new Map<number, string>()

  popconfirmRef: MdbPopconfirmRef<PopConfirmComponent> | null = null;

  constructor(private orderService: OrderService, private route: ActivatedRoute, private imageService: ImageService,
              private popconfirmService: MdbPopconfirmService,
              private router: Router) {
  }

  ngOnInit(): void {
    document.title = 'AHA - ' + this.title;
    let orderTrackingNumber = this.route.snapshot.paramMap.get('orderTrackingNumber')
    this.orderService.getOrder(orderTrackingNumber as string).subscribe(response => {
      if (response.success) {
        this.order = response.data!
        for (let orderItem of this.order.orderItems) {
          this.imageService.getProductImageUrlImage(orderItem.productDetail.image[0].imageUrl).subscribe(url => {
              this.images.set(orderItem.productDetail.id, url)
            })
        }
      }
    })
  }

  formatVND(price: number): string {
    return price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
  }

  formatDate(date: Date): string {
    return new DatePipe('en-US').transform(date, 'HH:mm dd/MM/yyyy')!
  }

  formatAddress(address: AddressDto): string {
    return AppUtil.formatAddress(address)
  }

  cancelOrder(orderTrackingNumber: string) {
    this.orderService.cancelOrder(orderTrackingNumber)
      .subscribe(response => {
        if (response.success) {
          this.router.navigate(['/']).then(() => {
              this.router.navigate(['/account/orderdetail-history', this.route.snapshot.paramMap.get('orderTrackingNumber')]).then();
            }
          )
        }
      })
  }

  openPopConfirm(event: Event, orderTrackingNumber: string) {
    const target = event.target as HTMLElement;
    this.popconfirmRef = this.popconfirmService.open(PopConfirmComponent, target, {popconfirmMode: 'modal', data: {
        title: 'Xác nhận hủy đơn hàng',
        message: 'Bạn có chắc chắn muốn hủy đơn hàng này không?',
        confirmText: 'Xác nhận',
        cancelText: 'Hủy',
        orderTrackingNumber: orderTrackingNumber
      }});
    this.popconfirmRef.onConfirm.subscribe(() => {
      this.cancelOrder(orderTrackingNumber);
    })
  }

}
