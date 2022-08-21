import {ProductImage, productImages} from "./product-image.model";
import {ProductDetail, productDetails} from "./product-detail.model";
import {ProductType, productTypes} from "./product-type.model";
import {Brand, brands} from "./brand.model";


export class Product {
  id: number
  name: string
  color: string
  gender: string
  type: ProductType
  brand: Brand
  images: ProductImage[]
  productDetails: ProductDetail[]
  active: boolean

  constructor(id: number, name: string, color: string, gender: string, type: ProductType, brand: Brand, images: ProductImage[], productDetails: ProductDetail[], active: boolean) {
    this.id = id
    this.name = name
    this.color = color
    this.type = type
    this.brand = brand
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
    gender: 'Nam',
    type: productTypes[0],
    brand: brands[0],
    images: productImages.filter(image => image.productId === 1),
    productDetails: productDetails.filter(detail => detail.productId === 1),
    active: true
  },
  {
    id: 2,
    name: 'Product 2',
    color: 'Blue',
    gender: 'Nữ',
    type: productTypes[1],
    brand: brands[1],
    images: productImages.filter(image => image.productId === 2),
    productDetails: productDetails.filter(detail => detail.productId === 2),
    active: true
  }
];
