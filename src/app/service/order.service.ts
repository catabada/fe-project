import { Injectable } from '@angular/core';
import {AppBaseResult} from "../domain/app-result";
import {Order, orders, orderStatuses} from "../model/order.model";
import * as uuid from 'uuid';
import {observable, Observable} from "rxjs";
import {OrderCreate} from "../dto/order-create.dto";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

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
        status: orderStatuses[0]
      };
      orders.push(order);
      observer.next(new AppBaseResult(true, 0, 'Tạo đơn hàng thành công'));
    });

  }
  getOrder(id: number) {

  }

  private createRandomTrackingNumber() {

  }
}
