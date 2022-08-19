export class AppRole {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

export const APP_ROLE_ADMIN = new AppRole(1, 'ADMIN')
export const APP_ROLE_USER = new AppRole(2, 'USER')
