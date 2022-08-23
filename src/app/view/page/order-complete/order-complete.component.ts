import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent implements OnInit {
  title = "Đặt hàng thành công";

  constructor() {
  }

  ngOnInit(): void {
    document.title = 'AHA - ' + this.title;
  }

}
