import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/product.model";
import {Pagination} from "../../../dto/pagination.dto";
import {ProductService} from "../../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {brands} from "../../../model/brand.model";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  currentPage: number = 1
  @Input() gender: string;
  products: Product[]
  pagination: Pagination

  @Input() currentTypes: number[] = [];
  @Input() currentBrands: number[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  getProducts(pageNum: number, types: number[], brands: number[]): Product[] {
    console.log(pageNum, types, brands);
    this.productService.getProductsByFilter(this.gender, types, brands).subscribe(products => {
      this.products = products
      this.pagination = new Pagination(this.products.length, 12)
    })
    const arr = [];
    for (let i = (pageNum - 1) * this.pagination.pageSize; i < this.pagination.pageSize * pageNum; i++) {
      if (this.products[i] != null) {
        arr.push((this.products)[i]);
      }
    }
    return arr;
  }

  getCurrentPage(value: number) {
    this.currentPage = value;
  }


}
