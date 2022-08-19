import {ProductImage, productImages} from "./product-image.model"
import {ProductDetail, productDetails} from "./product-detail.model";

export class Product {
  id: number
  name: string
  color: string
  images: ProductImage[]
  productDetails: ProductDetail[]
  active: boolean

  constructor(id: number, name: string, color: string, images: ProductImage[], productDetails: ProductDetail[], active: boolean) {
    this.id = id
    this.name = name
    this.color = color
    this.images = images
    this.productDetails = productDetails
    this.active = active
  }
}

export let products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    color: 'Red',
    images: productImages.filter(image => image.productId === 1),
    productDetails: productDetails.filter(detail => detail.productId === 1),
    active: true
  },
  {
    id: 2,
    name: 'Product 2',
    color: 'Blue',
    images: productImages.filter(image => image.productId === 2),
    productDetails: productDetails.filter(detail => detail.productId === 2),
    active: true
  }
];
