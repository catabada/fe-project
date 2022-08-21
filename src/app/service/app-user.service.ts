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

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private imageService: ImageService) {
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
      let appUser = appUsers.find(appUser => appUser.username === createUser.username || appUser.email === createUser.email || appUser.phone === createUser.phone)
      if (appUser) {
        observer.next(new AppBaseResult(false, 0, "Tài khoản đã tồn tại"))
        return
      }

      let userInfoNew = new UserInfo()
      userInfoNew.id = userInfos.length + 1
      userInfoNew.lastName = createUser.lastName
      userInfoNew.firstName = createUser.firstName
      userInfoNew.image = AppConstant.APP_BASE_IMAGE_URL + createUser.username
      userInfoNew.dateOfBirth = createUser.dateOfBirth
      userInfos.push(userInfoNew)

      let userNew = new AppUser();
      userNew.id = appUsers.length + 1
      userNew.username = createUser.username
      userNew.password = createUser.password
      userNew.email = createUser.email
      userNew.phone = createUser.phone
      userNew.appRole = APP_ROLE_USER
      userNew.userInfo = userInfoNew

      appUsers.push(userNew)
      observer.next(AppBaseResult.generateIsSuccess())
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

  public uploadImage(id: number, fileName: string, file: File): Observable<AppServiceResult<UserInfoResponse>> {
    return new Observable<AppServiceResult<UserInfoResponse>>(observer => {
      this.imageService.saveUserImage(fileName, file).snapshotChanges()
        .pipe(finalize(() => {
          let user = appUsers.find(appUser => appUser.id === id)!
          observer.next(new AppServiceResult<UserInfoResponse>(true, 0, "Cập nhật thành công", UserInfoResponse.createFromEntity(user)))
        }))
        .subscribe(() => {
        })
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
