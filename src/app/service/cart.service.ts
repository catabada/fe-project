import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppBaseResult} from "../domain/app-result";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(productId: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      observer.next(new AppBaseResult(true, 0, 'Product added to cart'));
    });
  }

  updateQuantity(productId: number, quantity: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      observer.next(new AppBaseResult(true, 0, 'Success'));
    });
  }

  removeFromCart(productId: number): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      observer.next(new AppBaseResult(true, 0, 'Success'));
    });
  }

}
