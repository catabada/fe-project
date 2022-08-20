import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ProductDetail, productDetails} from "../model/product-detail.model";
import {AppServiceResult} from "../domain/app-result";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor() { }

  getProductDetail(id: number): Observable<AppServiceResult<ProductDetail | null>> {
    return new Observable<AppServiceResult<ProductDetail | null>>(observer => {
      let productDetail = productDetails.find(productDetail => productDetail.id === id)!;
      if (!productDetail) {
        observer.next(new AppServiceResult<ProductDetail | null>(false, 101, 'Không tìm thấy sản phẩm', null));
      }

      observer.next(new AppServiceResult<ProductDetail>(false, 101, 'Không tìm thấy sản phẩm', productDetail));
    })
  }
}
