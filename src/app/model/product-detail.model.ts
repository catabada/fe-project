import {ProductSize, productSizes} from "./product-size.model"

export class ProductDetail {
  id: number
  productId: number
  sizes: ProductSize
  description: string
  unitPrice: number
  unitInStock: number

  constructor(id: number, productId: number, sizes: ProductSize, description: string, unitPrice: number, unitInStock: number) {
    this.id = id
    this.productId = productId
    this.sizes = sizes
    this.description = description
    this.unitPrice = unitPrice
    this.unitInStock = unitInStock
  }
}

export let productDetails: ProductDetail[] = [
  {
    id: 1,
    productId: 1,
    sizes: productSizes[0],
    description: 'Product 1 Description',
    unitPrice: 100,
    unitInStock: 10
  },
  {
    id: 2,
    productId: 1,
    sizes: productSizes[1],
    description: 'Product 2 Description',
    unitPrice: 200,
    unitInStock: 20
  },
  {
    id: 3,
    productId: 1,
    sizes: productSizes[2],
    description: 'Product 3 Description',
    unitPrice: 300,
    unitInStock: 30
  },
  {
    id: 4,
    productId: 2,
    sizes: productSizes[0],
    description: 'Product 4 Description',
    unitPrice: 400,
    unitInStock: 40
  },
  {
    id: 5,
    productId: 2,
    sizes: productSizes[2],
    description: 'Product 5 Description',
    unitPrice: 500,
    unitInStock: 50
  },
  {
    id: 6,
    productId: 2,
    sizes: productSizes[4],
    description: 'Product 6 Description',
    unitPrice: 600,
    unitInStock: 60
  }
];
