import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AppBaseResult, AppServiceResult} from "../domain/app-result";
import {AppUser, appUsers, UserInfo} from "../model/user.model";
import {ChangePassword} from "../dto/change-password.dto";
import {UserInfoResponse} from "../dto/user-info-response.dto";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor() { }

  public getUserInfo(id: number): Observable<AppServiceResult<UserInfoResponse>> {
    return new Observable<AppServiceResult<UserInfoResponse>>(observer => {
      let userInfo = appUsers.find(appUser => appUser.id === id)
      if (!userInfo) {
        observer.error('Tài khoản không tồn tại')
        return
      }

      observer.next(new AppServiceResult<UserInfoResponse>(true, 0, "Success", UserInfoResponse.createFromEntity(userInfo)))
    })
  }

  public register(createUser: AppUser): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let appUser = appUsers.find(appUser => appUser.username === createUser.username || appUser.email === createUser.email || appUser.phone === createUser.phone)
      if (appUser) {
        observer.error('Tài khoản đã tồn tại')
        return
      }

      appUsers.push(createUser)
      observer.next(AppBaseResult.generateIsSuccess())
    })
  }

  public saveProfile(user: AppUser): Observable<AppServiceResult<AppUser>> {
    return new Observable<AppServiceResult<AppUser>>(observer => {
      let appUser = appUsers.find(appUser => appUser.id === user.id)
      if (!appUser) {
        observer.error('Tài khoản không tồn tại')
        return
      }
      appUser.userInfo = user.userInfo
      observer.next(new AppServiceResult<AppUser>(true, 0, "Success", appUser))
    })
  }

  public uploadImage(formData: FormData): Observable<any> {
    return new Observable<AppBaseResult>(observer => {
      observer.next(new AppBaseResult(true, 0, "Success"))
    })
  }

  public changePassword(data: ChangePassword): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let appUser = appUsers.find(appUser => appUser.username === data.username);
      if (!appUser) {
        observer.error('Tài khoản không tồn tại')
        return
      }

      if (appUser.password !== data.oldPassword) {
        observer.error('Mật khẩu không chính xác')
        return
      }

      appUser.password = data.newPassword
      observer.next(AppBaseResult.generateIsSuccess())
    })
  }

  public createUserFormData(userId: number, loggedInUsername: string, user: UserInfo): FormData {
    const formData = new FormData()
    // formData.append('userId', userId.toString())
    // formData.append('username', loggedInUsername)
    // formData.append('email', user.email)
    // formData.append('phone', user.phone)
    // formData.append('firstName', user.firstName)
    // formData.append('lastName', user.lastName)
    // formData.append('image', user.image)
    return formData
  }

}
