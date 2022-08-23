import {Order, OrderItem, OrderStatus} from "../model/order.model";
import {UserInfoResponse} from "./user-info-response.dto";
import {AddressDto} from "./address.dto";

export class OrderDto {
  id: number
  orderTrackingNumber: string
  fullName: string
  phone: string
  address: AddressDto
  appUser: UserInfoResponse
  orderItems: OrderItem[]
  totalPrice: number
  createdAt: Date
  shippingDate: Date | null
  completedAt: Date | null
  canceledAt: Date | null
  status: OrderStatus

  public static createFromEntity(src: Order, userInfoResponse: UserInfoResponse, addressDto: AddressDto): OrderDto {
    let dest = new OrderDto();
    dest.id = src.id;
    dest.orderTrackingNumber = src.orderTrackingNumber;
    dest.fullName = src.fullName;
    dest.phone = src.phone;
    dest.address = addressDto;
    dest.appUser = userInfoResponse;
    dest.orderItems = src.orderItems;
    dest.totalPrice = src.totalPrice;
    dest.createdAt = src.createdAt;
    dest.shippingDate = src.shippingDate;
    dest.completedAt = src.completedAt;
    dest.canceledAt = src.canceledAt;
    dest.status = src.status;
    return dest;
  }
}
