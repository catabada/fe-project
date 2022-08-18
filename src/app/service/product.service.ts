import {Injectable} from '@angular/core';
import {Product, products} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  public getProducts(): Product[] {
    return products
  }

  public getProduct(id: number): any {
    return products.find(product => product.id === id)
  }

  public createProduct(createproduct: Product): boolean {
    let product = products.find(product => product.name === createproduct.name)

    if (product) {
      return false
    }

    products.push(createproduct)
    return true
  }

  public updateProduct(product: Product): boolean {
    let updateProduct = products.find(p => p.id === product.id)

    if (!updateProduct) {
      return false
    }

    updateProduct.name = product.name
    updateProduct.image = product.image
    updateProduct.price = product.price

    products.splice(products.indexOf(updateProduct), 1, updateProduct)
    return true
  }

  public deleteProduct(id: number): boolean {
    let product = products.find(product => product.id === id)
    if (!product) {
      return false
    }

    products.splice(products.indexOf(product), 1)
    return true
  }
}
