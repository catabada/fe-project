import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Product, products} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  public getProducts(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      observer.next(products)
    })
  }

  public getProductsByGender(gender: string): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      observer.next(products.filter(product => product.gender.toLowerCase() === gender.toLowerCase()))
    })
  }

  public getProductsByTypes(types: number[]): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      if (types.length == 0) {
        this.getProducts().subscribe(products => {
          observer.next(products)
        })
        return
      }

      observer.next(products.filter(product => types.includes(product.type.id)))
    })
  }

  public getProductsByBrands(brands: number[]): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      if (brands.length == 0) {
        this.getProducts().subscribe(products => {
          observer.next(products)
        })
        return
      }
    observer.next(products.filter(product => brands.includes(product.brand.id)))
    })
  }

  public getProductsByFilter(gender: string, types: number[], brands: number[]): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      let productsByGender: Product[] = [], productsByTypes: Product[] = [], productsByBrands: Product[] = []
      this.getProductsByGender(gender).subscribe(products => {
        productsByGender = products
      })

      if (types.length == 0 && brands.length == 0) {
        observer.next(productsByGender);
        return
      }

      this.getProductsByTypes(types).subscribe(products => {
        productsByTypes = products
      })

      this.getProductsByBrands(brands).subscribe(products => {
        productsByBrands = products
      })

      let productFilters = []
      for (let product of productsByGender) {
        if (productsByTypes.includes(product) && productsByBrands.includes(product)) {
          productFilters.push(product)
        }
      }

      observer.next(productFilters)
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

  getLowestPrice(id: number): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(products.find(product => product.id === id)?.productDetails
        .reduce(
          (prev, curr) =>
            prev.unitPrice < curr.unitPrice ? prev : curr).unitPrice
      )
    })

  }
}
