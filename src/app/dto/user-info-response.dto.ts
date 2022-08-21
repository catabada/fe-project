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

  public static createFromEntity(src: AppUser): UserInfoResponse {
    let dest = new UserInfoResponse()
    dest.id = src.id
    dest.username = src.username
    dest.email = src.email
    dest.phone = src.phone
    dest.appRoles = src.appRole
    dest.lastName = src.userInfo.lastName
    dest.firstName = src.userInfo.firstName
    dest.dateOfBirth = src.userInfo.dateOfBirth
    dest.image = src.userInfo.image
    return dest
  }
}
