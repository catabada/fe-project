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
    name: 'Male',
    active: true
  },
  {
    id: 2,
    name: 'Female',
    active: true,
  }
]
