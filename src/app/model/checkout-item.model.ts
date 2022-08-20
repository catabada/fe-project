import {Product, products} from "./product.model";

export class CheckoutItem {
  id: number
  checkoutId: number
  product: Product | undefined
  quantity: number
}

export let checkoutItems: CheckoutItem[] = [
  {
    id: 1,
    checkoutId: 1,
    product: products.find(product => product.id === 1),
    quantity: 1
  },
  {
    id: 2,
    checkoutId: 1,
    product: products.find(product => product.id === 2),
    quantity: 1
  },
]
