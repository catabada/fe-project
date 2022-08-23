import {Address} from "./address.model";
import {ProductDetailDto} from "../dto/product-detail.dto";

export class OrderStatus {
  id: number;
  name: string;
}

export class OrderItem {
  productDetail: ProductDetailDto;
  quantity: number;
}

export class Order {
  id: number
  orderTrackingNumber: string
  fullName: string
  phone: string
  address: Address
  userId: number
  orderItems: OrderItem[]
  totalPrice: number
  createdAt: Date
  shippingDate: Date | null
  completedAt: Date | null
  canceledAt: Date | null
  status: OrderStatus
}

export let orders: Order[] = [
]

export let orderStatuses: OrderStatus[] = [
  {
    id: 0,
    name: 'Đang chờ xác nhận'
  },
  {
    id: 1,
    name: 'Đang giao hàng'
  },
  {
    id: 2,
    name: 'Đã giao hàng'
  },
  {
    id: 3,
    name: 'Đã hủy'
  }
]


