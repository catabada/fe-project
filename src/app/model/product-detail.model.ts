import {ProductImage, productImages} from "./product-image.model";

export class ProductDetail {
  id: number
  productId: number
  size: number
  description: string
  image: ProductImage
  unitPrice: number
  unitInStock: number

  constructor(id: number, productId: number, size: number, description: string, unitPrice: number, unitInStock: number) {
    this.id = id
    this.productId = productId
    this.size = size
    this.description = description
    this.unitPrice = unitPrice
    this.unitInStock = unitInStock
  }

}

export let productDetails: ProductDetail[] = [
  {
    id: 1,
    productId: 1,
    size: 39,
    description: 'Product 1 Description',
    image: productImages[0],
    unitPrice: 100,
    unitInStock: 10
  },
  {
    id: 2,
    productId: 1,
    size: 40,
    description: 'Product 2 Description',
    image: productImages[1],
    unitPrice: 200,
    unitInStock: 20
  },
  {
    id: 3,
    productId: 1,
    size: 41,
    description: 'Product 3 Description',
    image: productImages[2],
    unitPrice: 300,
    unitInStock: 30
  },
  {
    id: 4,
    productId: 2,
    size: 39,
    description: 'Product 4 Description',
    image: productImages[3],
    unitPrice: 400,
    unitInStock: 40
  },
  {
    id: 5,
    productId: 2,
    size: 40,
    description: 'Product 5 Description',
    image: productImages[4],
    unitPrice: 500,
    unitInStock: 50
  },
  {
    id: 6,
    productId: 2,
    size: 41,
    description: 'Product 6 Description',
    image: productImages[5],
    unitPrice: 600,
    unitInStock: 60
  }
];
