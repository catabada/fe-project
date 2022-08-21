import { Injectable } from '@angular/core';
import {AppUser, appUsers} from "../model/user.model";
import {Observable} from "rxjs";
import {AppServiceResult} from "../domain/app-result";
import {AppUtilService} from "./app-util.service";
import * as shajs from 'sha.js';
import {UserInfoResponse} from "../dto/user-info-response.dto";
import {AppError} from "../constant/app-error";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInUsername: string;
  private loggedInAvatar: string;

  constructor(private appUtilService: AppUtilService) { }

  login(user: AppUser): Observable<AppServiceResult<any>> {
    return new Observable<AppServiceResult<any>>(observer => {
      let appUser = appUsers.find(appUser => appUser.username === user.username);
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

  isLoggedIn(): boolean {
    let userInfo = this.getUserInfoFromLocalStorage();
    if (userInfo) {
      this.loggedInUsername = userInfo.username;
      this.loggedInAvatar = userInfo.image;
      return true;
    }
    this.logout();
    return false;
  }

  logout(): void {
    this.appUtilService.removeFromLocalStorage('user');
  }

  addUserInfoToLocalStorage(user: UserInfoResponse) {
    this.appUtilService.addToLocalStorage('user', user);
  }

  getUserInfoFromLocalStorage(): UserInfoResponse {
    return this.appUtilService.getFromLocalStorage('user');
  }

  private hashPassword(password: string): string {
    return shajs('sha256').update(password).digest('hex')
  }

  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }

  getLoggedInAvatar(): string {
    return this.loggedInAvatar;
  }

}
