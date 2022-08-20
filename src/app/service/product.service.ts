import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product, products} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      observer.next(products)
    })
  }

  public getActiveProducts(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      observer.next(products.filter(product => product.active))
    })
  }

  public getProduct(id: number): Observable<Product> {
    return new Observable<Product>(observer => {
      observer.next(products.find(product => product.id === id))
    })
  }

}
