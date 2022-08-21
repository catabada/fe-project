import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() gender: string;
  @Input() product: any;
  lowestPrice: number

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getLowestPrice(this.product.id).subscribe(price => {
      this.lowestPrice = price
    })
  }

}
