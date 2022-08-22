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
    name: 'Bitis',
    imageUrl: 'assets/images/brands/brand-1.png'
  },
  {
    id: 2,
    name: 'Nike',
    imageUrl: 'assets/images/brands/brand-2.png'
  },
  {
    id: 3,
    name: 'Balenciaga',
    imageUrl: 'assets/images/brands/brand-3.png'
  }
]
