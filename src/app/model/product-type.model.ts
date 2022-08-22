export class ProductType {
  id: number
  name: string
  active: boolean

  constructor(id: number, name: string, active: boolean) {
    this.id = id
    this.name = name
    this.active = active
  }
}

export let productTypes: ProductType[] = [
  {
    id: 1,
    name: 'Giày thể thao',
    active: true
  },
  {
    id: 2,
    name: 'Giày bóng đá',
    active: true,
  },
  {
    id: 3,
    name: 'Sandal',
    active: true,
  },
  {
    id: 4,
    name: 'Giày da',
    active: true,
  },
  {
    id: 5,
    name: 'Giày cơ bản',
    active: true,
  },
  {
    id: 6,
    name: 'Giày búp bê',
    active: true,
  },
  {
    id: 7,
    name: 'Giày thời trang',
    active: true,
  },
  {
    id: 8,
    name: 'Boost',
    active: true,
  },
]
