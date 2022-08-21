import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppBaseResult} from "../domain/app-result";
import {AppUtilService} from "./app-util.service";
import {CartItem} from "../model/cart-item.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private appUtilService: AppUtilService) { }

  addToCart(productId: number, quantity: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let cart: CartItem[] = this.getCartFromLocalStorage()
      if (!cart) {
        cart = [new CartItem(productId, quantity)];
        this.appUtilService.addToLocalStorage('cart', cart)
        observer.next(new AppBaseResult(true, 0, 'Thêm vào giỏ hàng thành công'))
        return
      }

      let cartItem = cart.find(x => x.productId == productId)
      if (!cartItem) {
        cart.push(new CartItem(productId, quantity))
        this.appUtilService.addToLocalStorage('cart', cart)
        observer.next(new AppBaseResult(true, 0, 'Thêm vào giỏ hàng thành công'))
        return
      }

      cartItem.quantity += quantity
      this.appUtilService.addToLocalStorage('cart', cart)
      observer.next(new AppBaseResult(true, 0, 'Thêm vào giỏ hàng thành công'))
    });
  }

  updateQuantity(productId: number, quantity: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let cart: CartItem[] = this.getCartFromLocalStorage()
      if (!cart) {
        observer.next(new AppBaseResult(false, 1, 'Giỏ hàng không tồn tại'))
        return
      }

      let cartItem = cart.find(x => x.productId == productId)
      if (!cartItem) {
        observer.next(new AppBaseResult(false, 1, 'Sản phẩm không tồn tại'))
        return
      }

      cartItem.quantity = quantity
      this.appUtilService.addToLocalStorage('cart', cart)
      observer.next(new AppBaseResult(true, 0, 'Cập nhật thành công'));
    });
  }

  removeFromCart(productId: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let cart: CartItem[] = this.getCartFromLocalStorage()
      if (!cart) {
        observer.next(new AppBaseResult(false, 1, 'Giỏ hàng không tồn tại'))
        return
      }

      let cartItem = cart.find(x => x.productId == productId)
      if (!cartItem) {
        observer.next(new AppBaseResult(false, 1, 'Sản phẩm không tồn tại'))
        return
      }

      cart = cart.filter(x => x.productId != productId)
      this.appUtilService.addToLocalStorage('cart', cart)
      observer.next(new AppBaseResult(true, 0, 'Xóa thành công'));
    });
  }

  getCartFromLocalStorage(): CartItem[] {
    return this.appUtilService.getFromLocalStorage('cart')
  }

}
