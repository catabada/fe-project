import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product";
import {Pagination} from "../../../model/pagination";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  currentPage: number = 1;
  products: Product[] = [
    new Product(1, "giay.png", "Women's Boots Shoes Maca", 139.00),
    new Product(2, "giay.png", "Women's Boots Shoes Maca", 139.00),
    new Product(3, "giay.png", "Women's Boots Shoes Maca", 139.00),
    new Product(4, "giay.png", "Women's Boots Shoes Maca", 139.00),
    new Product(5, "giay.png", "Women's Boots Shoes Maca", 139.00),
    new Product(6, "giaay.png", "Women's Boots Shoes Maca", 139.00),
    new Product(7, "giaay.png", "Women's Boots Shoes Maca", 139.00),
    new Product(8, "giaay.png", "Women's Boots Shoes Maca", 139.00),
  ];
  pagination: Pagination = new Pagination(this.products.length, 4);

  constructor() {
  }

  ngOnInit(): void {
  }

  getProducts(pageNum: number): Product[] {
    let length: number = this.pagination.pageSize;
    const arr = [];
    for (let i = (pageNum - 1) * this.pagination.pageSize; i < this.pagination.pageSize * pageNum; i++) {
      arr.push((this.products)[i]);
    }
    return arr;
  }

  getCurrentPage(value: number) {
    this.currentPage = value;
  }


}
