import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  title: string = '';
  gender: string;
  product: Product
  last: string

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['gender'] != null) {
        this.gender = params['gender']
        this.title = params['gender'] === 'female' ? "Sản phẩm nữ" : "Sản phẩm nam"
      }
      if(params['id'] != null) {
        this.productService.getProduct(Number.parseInt(params['id'])).subscribe(
          (product: Product) => {
            this.product = product;
            this.last = product.name;
          }
        )
      }
      if(params['query'] != null) {
        this.gender = 'search'
        this.title = "Kết quả tìm kiếm"
        this.last = params['query']
      }
    })



  }

}
