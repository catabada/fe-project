export class ProductImage {
  productId: number
  imageUrl: string

  constructor(productId: number, imageUrl: string) {
    this.productId = productId
    this.imageUrl = imageUrl
  }
}

export let productImages: ProductImage[] = [
  { productId: 1, imageUrl: 'assets/images/products/product-1.jpg' },
  { productId: 1, imageUrl: 'assets/images/products/product-2.jpg' },
  { productId: 2, imageUrl: 'assets/images/products/product-3.jpg' },
  { productId: 2, imageUrl: 'assets/images/products/product-4.jpg' },
  { productId: 2, imageUrl: 'assets/images/products/product-5.jpg' },
];
