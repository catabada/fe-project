import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ImageService} from "../../../service/image.service";
import {AppUtil} from "../../../util/app-util";
import {Product} from "../../../model/product.model";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() gender: string;
  @Input() product: Product;
  lowestPrice: string
  imageUrl: string

  constructor(private productService: ProductService, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.productService.getLowestPrice(this.product.id).subscribe(price => {
      this.lowestPrice = AppUtil.formatVND(price)
    })
    this.imageService.getProductImageUrl(this.product.id).subscribe((url: string) => {
      this.imageUrl = url
    })
  }

}
