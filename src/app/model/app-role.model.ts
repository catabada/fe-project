export class AppRole {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

export const APP_ROLE_USER = new AppRole(1, 'ROLE_USER')
