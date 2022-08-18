export class Product {
  id: number
  image: string
  name: string
  price: number
}

export let products: Product[] = [
  {
    id: 1,
    image: 'assets/images/products/product-1.jpg',
    name: 'Product 1',
    price: 100
  },
  {
    id: 2,
    image: 'assets/images/products/product-2.jpg',
    name: 'Product 2',
    price: 200
  }
];
