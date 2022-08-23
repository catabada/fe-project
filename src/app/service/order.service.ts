import { Injectable } from '@angular/core';
import {AppBaseResult, AppServiceResult} from "../domain/app-result";
import {Order, orders, orderStatuses} from "../model/order.model";
import * as uuid from 'uuid';
import {Observable} from "rxjs";
import {OrderCreate} from "../dto/order-create.dto";
import {AppError} from "../constant/app-error";
import {OrderDto} from "../dto/order.dto";
import {AddressService} from "./address.service";
import {AuthenticationService} from "./authentication.service";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private addressService: AddressService, private authenticationService: AuthenticationService) { }

  createOrder(orderCreate: OrderCreate) : Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let order: Order = {
        id: orders.length + 1,
        orderTrackingNumber: uuid.v4(),
        fullName: orderCreate.fullName,
        phone: orderCreate.phone,
        address: orderCreate.address,
        userId: orderCreate.userId,
        orderItems: orderCreate.orderItems,
        totalPrice: orderCreate.totalPrice,
        createdAt: new Date(),
        shippingDate: null,
        completedAt: null,
        canceledAt: null,
        status: orderStatuses[0]
      };
      orders.push(order);
      observer.next(new AppBaseResult(true, 0, 'Tạo đơn hàng thành công'));
    });

  }

  getOrder(orderTrackingNumber: string): Observable<AppServiceResult<OrderDto | null>> {
    return new Observable<AppServiceResult<OrderDto | null>>(observer => {
      let order = orders.find(o => o.orderTrackingNumber === orderTrackingNumber)!;
      if (order === null) {
        observer.next(new AppServiceResult<OrderDto | null>(false, AppError.VALIDATION().errorCode, 'Không tìm thấy đơn hàng', null));
      }

      let userInfoResponse = this.authenticationService.getUserInfoFromLocalStorage();
      let addressDto = this.addressService.getAddress(order.address);

      observer.next(new AppServiceResult<OrderDto | null>(true, 0, 'Success', OrderDto.createFromEntity(order, userInfoResponse, addressDto)));
    })
  }

  cancelOrder(orderTrackingNumber: string): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let order = orders.find(o => o.orderTrackingNumber === orderTrackingNumber)!;
      if (order === null) {
        observer.next(new AppBaseResult(false, AppError.VALIDATION().errorCode, 'Không tìm thấy đơn hàng'));
      }

      orders.find(o => o.orderTrackingNumber === orderTrackingNumber)!.status = orderStatuses[3];
      orders.find(o => o.orderTrackingNumber === orderTrackingNumber)!.canceledAt = new Date();
      observer.next(new AppBaseResult(true, 0, 'Hủy đơn hàng thành công'));
    }).pipe();
  }

}
