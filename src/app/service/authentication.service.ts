import {Injectable} from '@angular/core'
import {AppUser, appUsers} from "../model/user.model"
import {Observable} from "rxjs"
import {AppServiceResult} from "../domain/app-result"
import {AppUtilService} from "./app-util.service"
import * as shajs from 'sha.js'
import {UserInfoResponse} from "../dto/user-info-response.dto"
import {AppError} from "../constant/app-error"
import {ImageService} from "./image.service"
import {AppRole} from "../model/app-role.model"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInUsername: string
  private loggedInAvatar: string

  constructor(private appUtilService: AppUtilService, private imageService: ImageService) {
  }

  login(user: AppUser): Observable<AppServiceResult<any>> {
    return new Observable<AppServiceResult<any>>(observer => {
      let appUser = appUsers.find(appUser => appUser.username === user.username)
      if (appUser == null) {
        observer.next(new AppServiceResult<any>(false, AppError.VALIDATION().errorCode, 'Tài khoản không tồn tại', null));
        return
      }

      if (appUser.password !== this.hashPassword(user.password)) {
        observer.next(new AppServiceResult<any>(false, AppError.VALIDATION().errorCode, 'Tài khoản hoặc mật khẩu không chính xác', null))
        return
      }

      observer.next(new AppServiceResult<any>(true, 0, "Đăng nhập thành công", appUser))
    })
  }

  isLoggedIn(): any {
    let userInfo = this.getUserInfoFromLocalStorage()
    if (userInfo) {
      this.loggedInUsername = userInfo.username
      this.loggedInAvatar = userInfo.image
      return true
    }

    this.logout()
    return false
  }

  logout(): void {
    this.appUtilService.removeFromLocalStorage('user')
    this.loggedInUsername = ''
    this.loggedInAvatar = ''
  }

  addUserInfoToLocalStorage(user: UserInfoResponse) {
    this.appUtilService.addToLocalStorage('user', user)
  }

  getUserInfoFromLocalStorage(): UserInfoResponse {
    return this.appUtilService.getFromLocalStorage('user')
  }

  roleMatch(role: AppRole): boolean {
    let isMatch = false
    const userInfo = this.getUserInfoFromLocalStorage()
    if (userInfo.appRole.name === role.name) {
      isMatch = true
    }
    return isMatch
  }
  getLoggedInUsername(): string {
    return this.loggedInUsername
  }

  public getLoggedInAvatar(): any {
    return this.loggedInAvatar
  }

  public setLoggedInAvatar(image: string) {
    this.loggedInAvatar = image
  }

  hashPassword(password: string): string {
    return shajs('sha256').update(password).digest('hex')
  }

}
