import { Injectable } from '@angular/core';
import {AppUser, appUsers} from "../model/user.model";
import {Observable} from "rxjs";
import {AppServiceResult} from "../domain/app-result";
import {AppUtilService} from "./app-util.service";
import * as shajs from 'sha.js';
import {UserInfoResponse} from "../dto/user-info-response.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInUsername: string;
  private loggedInAvatar: string;

  constructor(private appUtilService: AppUtilService) { }

  login(user: AppUser): Observable<AppServiceResult<AppUser>> {
    return new Observable<AppServiceResult<AppUser>>(observer => {
      let appUser = appUsers.find(appUser => appUser.username === user.username);
      if (!appUser) {
        observer.error('Tài khoản không tồn tại')
        return
      }

      if (appUser.password !== this.hashPassword(user.password)) {
        observer.error('Tài khoản hoặc mật khẩu không chính xác')
        return
      }

      observer.next(new AppServiceResult<AppUser>(true, 0, "Success", appUser))
    })
  }

  addUserInfoToLocalStorage(user: UserInfoResponse) {
    this.appUtilService.addToLocalStorage('user', user);
  }

  getUserInfoFromLocalStorage(): UserInfoResponse {
    return this.appUtilService.getFromLocalStorage('user');
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

  private hashPassword(password: string): string {
    return shajs('sha256').update(password).digest('hex')
  }

}
