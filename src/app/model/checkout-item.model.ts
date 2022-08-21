import {Product, products} from "./product.model";
import {ProductDetail} from "./product-detail.model";

export class CheckoutItem {
  product: Product
  quantity: number

  constructor(product: Product, quantity: number) {
    this.product = product
    this.quantity = quantity
  }
}

