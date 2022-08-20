import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Checkout, checkouts} from "../model/checkout.model";
import {AppBaseResult, AppServiceResult} from "../domain/app-result";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  createCheckout(checkout: Checkout): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      checkouts.push(checkout)
      observer.next(new AppBaseResult(true, 200, "Success"))
    });
  }
}
