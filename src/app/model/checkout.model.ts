import {CheckoutItem, checkoutItems} from "./checkout-item.model";

export class Checkout {
  id: number
  items: CheckoutItem[]
  total: number
  createdAt: Date

  constructor(id: number, items: CheckoutItem[], total: number, createdAt: Date) {
    this.id = id
    this.items = items
    this.total = total
    this.createdAt = createdAt
  }
}


export let checkouts: Checkout[] = [
  {
    id: 1,
    items: checkoutItems.filter(item => item.checkoutId === 1),
    total: 300000,
    createdAt: new Date('19/08/2022')
  },
  {
    id: 2,
    items: checkoutItems.filter(item => item.checkoutId === 2),
    total: 100000,
    createdAt: new Date('20/08/2022')
  },

]
