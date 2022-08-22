import {Address} from "../model/address.model";
import {CheckoutItem} from "../model/checkout-item.model";
import {OrderItem} from "../model/order.model";

export class OrderCreate {
  fullName: string;
  phone: string;
  address: Address;
  userId: number;
  orderItems: OrderItem[];
  totalPrice: number;
}
