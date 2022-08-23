import {Address} from "./address.model";
import {ProductDetailDto} from "../dto/product-detail.dto";

export class OrderStatus {
  id: number;
  name: string;
}

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

export class OrderItem {
  productDetail: ProductDetailDto;
  unitPrice: number
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
  cancelledAt: Date | null
  status: OrderStatus
}

export let orders: Order[] = [
  {
    id: 1,
    orderTrackingNumber: '123456789',
    fullName: 'Nguyen Van A',
    phone: '0987654321',
    address: {
      apartment: "131",
      districtCode: "248",
      id: 0,
      street: "TTN",
      wardCode: "8920"
    },
    userId: 1,
    orderItems: [
      {
        productDetail: {
            id: 253,
            image: [
              {
                imageUrl: "51.png",
                productDetailId: 253
              }
            ],
            name: "Giày Cơ Bản Nữ Nike Air Max 270 (Xanh Lá) Kích thước 37",
            productId: 51,
            size: 37,
            unitInStock: 15,
            unitPrice: 3520000
        },
        quantity: 2,
        unitPrice: 3520000
      }
    ],
    totalPrice: 7040000,
    createdAt: new Date('2022-08-13'),
    shippingDate: null,
    completedAt: null,
    cancelledAt: null,
    status: orderStatuses[0]
  },
  {
    id: 2,
    orderTrackingNumber: '123456780',
    fullName: 'Nguyen Van A',
    phone: '0987654321',
    address: {
      apartment: "131",
      districtCode: "248",
      id: 0,
      street: "TTN",
      wardCode: "8920"
    },
    userId: 1,
    orderItems: [
      {
        productDetail: {
          id: 254,
          image: [
            {
              imageUrl: "52.png",
              productDetailId: 253
            }
          ],
          name: "Giày Cơ Bản Nữ Nike Air Max 270 (Xanh Dương) Kích thước 38",
          productId: 52,
          size: 38,
          unitInStock: 15,
          unitPrice: 3520000
        },
        quantity: 2,
        unitPrice: 3520000
      }
    ],
    totalPrice: 7040000,
    createdAt: new Date('2022-08-13'),
    shippingDate: null,
    completedAt: null,
    cancelledAt: null,
    status: orderStatuses[3]
  }
]
