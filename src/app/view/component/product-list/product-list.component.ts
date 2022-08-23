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
  @Input() currentColors: number[] = [];
  @Input() currentSort: number = 2;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getProducts(pageNum: number, types: number[], brands: number[], colors: number[], sort: number): Product[] {
    if (this.gender === undefined) {
      let query = this.route.snapshot.params['query']
      this.productService.getProductsByQueryAndFilter(query,types, brands, colors).subscribe((products: Product[]) => {
          this.products = products;
          this.products = this.sortProducts(this.products, sort);
          this.pagination = new Pagination(products.length, 12);
        }
      )
    } else {
      this.productService.getProductsByFilter(this.gender, types, brands, colors).subscribe(products => {
        this.products = products
        this.pagination = new Pagination(this.products.length, 12)
        this.products = this.sortProducts(this.products, sort)
      })
    }

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

  private sortProducts(products: Product[], sort: number): Product[] {
    if (sort == 0) {
      this.products.sort((a, b) => {
        let priceA: number = 0, priceB: number = 0;
        this.productService.getLowestPrice(a.id).subscribe((price: number) => {
          priceA = price;
        })
        this.productService.getLowestPrice(b.id).subscribe((price: number) => {
          priceB = price;
        })
        return priceA - priceB;
      })
    } else if (sort == 1) {
      this.products.sort((a, b) => {
        let priceA: number = 0, priceB: number = 0;
        this.productService.getLowestPrice(a.id).subscribe((price: number) => {
          priceA = price;
        })
        this.productService.getLowestPrice(b.id).subscribe((price: number) => {
          priceB = price;
        })
        return priceB - priceA
      })
    }
    return products;
  }


}
