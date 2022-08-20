import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {Pagination} from "../../../dto/pagination.dto";
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  currentPage: number = 1
  products: Product[]
  pagination: Pagination

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
      this.pagination = new Pagination(this.products.length, 4)
    })
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
