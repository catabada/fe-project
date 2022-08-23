import { Component, OnInit } from '@angular/core';
import {orders} from "../../../model/order.model";
import {OrderService} from "../../../service/order.service";

@Component({
  selector: 'order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    console.log(orders)
   this.orderService.getOrder(orders[0].orderTrackingNumber).subscribe(res => {
      console.log(res)
   })

  }

}
