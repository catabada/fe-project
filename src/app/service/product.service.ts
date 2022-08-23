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
  public getProductsByQuery(query: string): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      if(query === "") {
        this.getProducts().subscribe(products => {
          observer.next(products)
        })
        return
      }
      let productQuery: Product[] = []
      products.map((product) => {
        let nameProduct = product.name + ' '  + product.color.name
        if(nameProduct.toLowerCase().includes(query.toLowerCase())) {
          productQuery.push(product)
        }
      })
      observer.next(productQuery)
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
  public getProductsByColors(colors: number[]): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      if (colors.length == 0) {
        this.getProducts().subscribe(products => {
          observer.next(products)
        })
        return
      }
    observer.next(products.filter(product => colors.includes(product.color.id)))
    })
  }

  public getProductsByFilter(gender: string, types: number[], brands: number[], colors: number[]): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      let productsByGender: Product[] = [], productsByTypes: Product[] = [], productsByBrands: Product[] = [], productsByColors: Product[] = [];
      this.getProductsByGender(gender).subscribe(products => {
        productsByGender = products
      })

      if (types.length == 0 && brands.length == 0 && colors.length == 0) {
        observer.next(productsByGender);
        return
      }

      this.getProductsByTypes(types).subscribe(products => {
        productsByTypes = products
      })

      this.getProductsByBrands(brands).subscribe(products => {
        productsByBrands = products
      })

      this.getProductsByColors(colors).subscribe(products => {
        productsByColors = products
      })

      let productFilters = []
      for (let product of productsByGender) {
        if (productsByTypes.includes(product) && productsByBrands.includes(product) && productsByColors.includes(product)) {
          productFilters.push(product)
        }
      }

      observer.next(productFilters)
    })
  }
  public getProductsByQueryAndFilter(query: string, types: number[], brands: number[], colors: number[]): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      let productsByQuery: Product[] = [], productsByTypes: Product[] = [], productsByBrands: Product[] = [], productsByColors: Product[] = [];
      this.getProductsByQuery(query).subscribe(products => {
        productsByQuery = products
      })

      if (types.length == 0 && brands.length == 0 && colors.length == 0) {
        observer.next(productsByQuery);
        return
      }

      this.getProductsByTypes(types).subscribe(products => {
        productsByTypes = products
      })

      this.getProductsByBrands(brands).subscribe(products => {
        productsByBrands = products
      })

      this.getProductsByColors(colors).subscribe(products => {
        productsByColors = products
      })

      let productFilters = []
      for (let product of productsByQuery) {
        if (productsByTypes.includes(product) && productsByBrands.includes(product) && productsByColors.includes(product)) {
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
