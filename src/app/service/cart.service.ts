import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppBaseResult} from "../domain/app-result";
import {AppUtilService} from "./app-util.service";
import {CartItem} from "../model/cart-item.model";
import {ProductDetailDto} from "../dto/product-detail.dto";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private appUtilService: AppUtilService) { }

  addToCart(productDetailDto: ProductDetailDto, quantity: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let cart: CartItem[] = this.getCartFromLocalStorage()
      if (cart == null) {
        cart = [new CartItem(productDetailDto, quantity)];
        this.appUtilService.addToLocalStorage('cart', cart)
        observer.next(new AppBaseResult(true, 0, 'Thêm vào giỏ hàng thành công'))
        return
      }

      let cartItem = cart.find(x => x.productDetailDto.id == productDetailDto.id)
      if (cartItem == null) {
        cart.push(new CartItem(productDetailDto, quantity))
        this.appUtilService.addToLocalStorage('cart', cart)
        observer.next(new AppBaseResult(true, 0, 'Thêm vào giỏ hàng thành công'))
        return
      }

      cartItem.quantity += quantity
      this.appUtilService.addToLocalStorage('cart', cart)
      observer.next(new AppBaseResult(true, 0, 'Thêm vào giỏ hàng thành công'))
    });
  }

  updateQuantity(productDetailId: number, quantity: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let cart: CartItem[] = this.getCartFromLocalStorage()
      if (cart == null) {
        observer.next(new AppBaseResult(false, 1, 'Giỏ hàng không tồn tại'))
        return
      }

      let cartItem = cart.find(x => x.productDetailDto.id == productDetailId)
      if (cartItem == null) {
        observer.next(new AppBaseResult(false, 1, 'Sản phẩm không tồn tại'))
        return
      }

      cartItem.quantity = quantity
      this.appUtilService.addToLocalStorage('cart', cart)
      observer.next(new AppBaseResult(true, 0, 'Cập nhật thành công'));
    });
  }

  removeFromCart(productDetailId: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let cart: CartItem[] = this.getCartFromLocalStorage()
      if (cart == null) {
        observer.next(new AppBaseResult(false, 1, 'Giỏ hàng không tồn tại'))
        return
      }
      let cartItem = cart.find(x => x.productDetailDto.id == productDetailId)
      if (cartItem == null) {
        observer.next(new AppBaseResult(false, 1, 'Sản phẩm không tồn tại'))
        return
      }

      cart = cart.filter(x => x.productDetailDto.id != productDetailId)
      this.appUtilService.addToLocalStorage('cart', cart)
      observer.next(new AppBaseResult(true, 0, 'Xóa thành công'));
    });
  }

  getCartFromLocalStorage(): CartItem[] {
    return this.appUtilService.getFromLocalStorage('cart')
  }

  removeCartFromLocalStorage(): void {
    this.appUtilService.removeFromLocalStorage('cart')
  }

  totalPrice(): number {
    let cart: CartItem[] = this.getCartFromLocalStorage()
    if (cart == null) {
      return 0
    }
    let total = 0
    cart.forEach(x => {
      total += x.quantity * x.productDetailDto.unitPrice
    } )
    return total
  }

}
