import {Injectable} from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AppBaseResult, AppServiceResult} from "../domain/app-result";
import {AppUser, appUsers, UserInfo, userInfos} from "../model/user.model";
import {ChangePassword} from "../dto/change-password.dto";
import {UserInfoResponse} from "../dto/user-info-response.dto";
import {UserRegister} from "../dto/user-register.dto";
import {AppConstant} from "../constant/app-constant";
import {APP_ROLE_USER} from "../model/app-role.model";
import {UserInfoRequest} from "../dto/user-info-request.dto";
import {ImageService} from "./image.service";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private imageService: ImageService, private authenticationService: AuthenticationService) {

  }

  public getUserInfo(id: number): Observable<AppServiceResult<any>> {
    return new Observable<AppServiceResult<any>>(observer => {
      let userInfo = appUsers.find(appUser => appUser.id === id)
      if (userInfo == null) {
        observer.next(new AppServiceResult<any>(false, 0, "Tài khoản không tồn tại", null));
        return
      }

      observer.next(new AppServiceResult<any>(true, 0, "Success", UserInfoResponse.createFromEntity(userInfo)))
    })
  }

  public register(createUser: UserRegister): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      let appUser = appUsers.find(appUser => appUser.username === createUser.usernameRegister || appUser.email === createUser.emailRegister)
      if (appUser) {
        observer.next(new AppBaseResult(false, 0, "Tài khoản đã tồn tại"))
        return
      }

      let userInfoNew = new UserInfo()
      userInfoNew.id = userInfos.length + 1
      userInfoNew.lastName = createUser.lastName
      userInfoNew.firstName = createUser.firstName
      userInfoNew.image = AppConstant.APP_BASE_IMAGE_URL + createUser.usernameRegister
      userInfos.push(userInfoNew)

      let userNew = new AppUser();
      userNew.id = appUsers.length + 1
      userNew.username = createUser.usernameRegister
      userNew.password = this.authenticationService.hashPassword(createUser.passwordRegister)
      userNew.email = createUser.emailRegister
      userNew.phone = createUser.phone
      userNew.appRole = APP_ROLE_USER
      userNew.userInfo = userInfoNew

      appUsers.push(userNew)
      observer.next(AppBaseResult.generateIsSuccess())
      observer.next(new AppBaseResult(true, 0, "Đăng ký thành công"))
    })
  }

  public saveProfile(user: UserInfoRequest): Observable<AppServiceResult<UserInfoResponse>> {
    return new Observable<AppServiceResult<UserInfoResponse>>(observer => {
      let appUser = appUsers.find(appUser => appUser.id === user.id)
      if (appUser == null) {
        observer.error('Tài khoản không tồn tại')
        return
      }

      appUser.phone = user.phone

      let userInfo = userInfos.find(userInfo => userInfo.id === appUser!.userInfo.id)!
      userInfo.firstName = user.firstName
      userInfo.lastName = user.lastName
      userInfo.dateOfBirth = user.dateOfBirth

      observer.next(new AppServiceResult<UserInfoResponse>(true, 0, "Success", UserInfoResponse.createFromEntity(appUser)))
    })
  }

  public uploadImage(id: number, fileName: string, file: File): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
      this.imageService.saveUserImage(fileName, file).snapshotChanges()
        .pipe(finalize(() => {
          let user = appUsers.find(appUser => appUser.id === id)!
          userInfos.find(userInfo => userInfo.id === user.userInfo.id)!.image = fileName
          this.authenticationService.addUserInfoToLocalStorage(UserInfoResponse.createFromEntity(user))
          this.authenticationService.setLoggedInAvatar(fileName)

          observer.next(new AppBaseResult(true, 0, "Cập nhật thành công"))
        }))
        .subscribe(() => {
        })
    })
  }

  public changePassword(data: ChangePassword): Observable<AppBaseResult> {
    return new Observable<AppBaseResult>(observer => {
        let appUser = appUsers.find(appUser => appUser.username === this.authenticationService.getLoggedInUsername());
        if (appUser == null) {
          observer.next(new AppBaseResult(false, 0, "Tài khoản không tồn tại"))
          return
        }

        if ((appUser.password) !== this.authenticationService.hashPassword(data.oldPassword)) {
          observer.next(new AppBaseResult(false, 0, "Mật khẩu cũ không đúng"))
        }

        appUsers.find(appUser => appUser.username === this.authenticationService.getLoggedInUsername())!.password = this.authenticationService.hashPassword(data.newPassword)

        observer.next(new AppBaseResult(true, 0, "Đổi mật khẩu thành công"))
      }
    )
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
