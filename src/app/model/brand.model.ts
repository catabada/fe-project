export class Brand {
  id: number;
  name: string;
  imageUrl: string;

  constructor(id: number, name: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}

export let brands: Brand[] = [
  {
    id: 1,
    name: 'Brand 1',
    imageUrl: 'assets/images/brands/brand-1.png'
  },
  {
    id: 2,
    name: 'Brand 2',
    imageUrl: 'assets/images/brands/brand-2.png'
  }
]
