import {AppRole} from "../model/app-role.model";
import {AppUser} from "../model/user.model";

export class UserInfoResponse {
  id: number // userId
  username: string
  email: string
  phone: string
  appRoles: AppRole
  lastName: string
  firstName: string
  dateOfBirth: Date
  image: string

  public static createFromEntity(entity: AppUser): UserInfoResponse {
    let dest = new UserInfoResponse()
    dest.id = entity.id
    dest.username = entity.username
    dest.email = entity.email
    dest.phone = entity.phone
    dest.appRoles = entity.appRole
    dest.lastName = entity.userInfo.lastName
    dest.firstName = entity.userInfo.firstName
    dest.dateOfBirth = entity.userInfo.dateOfBirth
    dest.image = entity.userInfo.image
    return dest
  }
}
