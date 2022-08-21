import {Product, products} from "./product.model";
import {ProductDetail} from "./product-detail.model";
import {ProductDetailDto} from "../dto/product-detail.dto";

export class CheckoutItem {
  productDetailDto: ProductDetailDto
  quantity: number

  constructor(productDetailDto: ProductDetailDto, quantity: number) {
    this.productDetailDto = productDetailDto
    this.quantity = quantity
  }
}

