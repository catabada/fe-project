import { Injectable } from '@angular/core';
import { AppUserService } from './app-user.service';
import { AppUtilService } from './app-util.service';
import {AppUser, appUsers, UserInfo} from "../model/user.model";
import {Observable} from "rxjs";
import {AppServiceResult} from "../domain/app-result";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInUsername: string;
  private loggedInAvatar: string;

  constructor(private appUtilService: AppUtilService) { }

  login(user: AppUser): Observable<AppServiceResult<AppUser>> {
    return new Observable<AppServiceResult<AppUser>>(observer => {
      let appUser = appUsers.find(appUser => appUser.username === user.username && appUser.password === user.password);
      if (!appUser) {
        observer.error('Tài khoản không tồn tại')
        return
      }
      observer.next(new AppServiceResult<AppUser>(true, 0, "Success", appUser))
    })
  }

  addUserInfoToLocalStorage(user: UserInfo) {
    this.appUtilService.addToLocalStorage('user', user);
  }

  getUserInfoFromLocalCache(): UserInfo {
    return this.appUtilService.getFromLocalStorage('user');
  }

  isLoggedIn(): boolean {
    let userInfo = this.getUserInfoFromLocalCache();
    if (userInfo) {
      this.loggedInUsername = userInfo.username;
      this.loggedInAvatar = userInfo.image;
      return true;
    }
    this.logout();
    return false;
  }

  logout(): void {

  }
}
