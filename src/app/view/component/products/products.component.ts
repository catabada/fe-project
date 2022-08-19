import {Component, OnInit} from '@angular/core';
import {Pagination} from "../../../model/pagination";
import {Brand} from "../../../model/brand";
import {Feature} from "../../../model/feature";
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pagination = new Pagination(100, 5);
  brands: Brand[] | undefined;
  features: Feature[] | undefined;
  products: Product[]

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.brands = [
      new Brand(1, 'Adidas', 'adidas.png'),
      new Brand(2, 'Nike', 'nike.png'),
      new Brand(3, 'Gucci', 'gucci.png'),
      new Brand(4, 'MerrellM', 'merrellm.png'),
      new Brand(5, 'Puma', 'puma.png'),
    ];
    this.features = [
      new Feature(1, "casuals.jpg", "Casuals"),
      new Feature(2, "dress.jpg", "Dress"),
      new Feature(3, "sports.jpg", "Sports"),
    ]

    this.productService.getActiveProducts().subscribe(products => {
      this.products = products;
      console.log(this.products);
    })
  }

}
