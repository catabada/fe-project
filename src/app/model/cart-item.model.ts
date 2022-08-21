import {Product} from "./product.model";
import {ProductDetailDto} from "../dto/product-detail.dto";

export class CartItem {
  productDetailDto: ProductDetailDto
  quantity: number

  constructor(productDetailDto: ProductDetailDto, quantity: number) {
    this.productDetailDto = productDetailDto
    this.quantity = quantity
  }
}
