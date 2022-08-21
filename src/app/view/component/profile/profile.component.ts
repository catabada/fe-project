import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MdbNotificationRef, MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../alert/alert.component";
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {AppUserService} from "../../../service/app-user.service";
import {UserInfoResponse} from "../../../dto/user-info-response.dto";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  title = 'Thông tin cá nhân';
  saveProfileFormGroup: FormGroup
  loading: boolean;
  notificationRef: MdbNotificationRef<AlertComponent> | null = null;

  user: UserInfoResponse

  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, public authenticationService: AuthenticationService,
              private appUserService: AppUserService, private notificationService: MdbNotificationService) {
  }

  ngOnInit(): void {
    window.document.title = this.title;

    // get user info from local storage
    this.user = this.authenticationService.getUserInfoFromLocalStorage()

    this.saveProfileFormGroup = this.formBuilder.group({
      id: new FormControl(this.user.id),
      lastName: new FormControl(this.user.lastName, [
        Validators.required
      ]),
      firstName: new FormControl(this.user.firstName, [
        Validators.required
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]),
      dateOfBirth: new FormControl(this.user.dateOfBirth, []),
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onSubmit(user: any) {
    if (this.saveProfileFormGroup.invalid) {
      this.saveProfileFormGroup.markAllAsTouched();
    } else {
      this.subscriptions.push(this.appUserService.saveProfile(user)
        .pipe(finalize(() => {
        }))
        .subscribe((response: any) => {
          if (response.success) {
            this.authenticationService.addUserInfoToLocalStorage(response.data)
            this.openAlert(response.success, response.message)
            return
          } else this.openAlert(false, response.message);
        })
      );
    }
  }

  openAlert(success: boolean, message: string) {
    this.notificationRef = this.notificationService.open(AlertComponent, {
      data: { success: success, message: message },
      autohide: true,
      delay: 2000,
    })
  }

  hideAlert() {
    this.notificationRef!.close()
  }

  get id(): AbstractControl {
    return this.saveProfileFormGroup.get('id') as AbstractControl;
  }

  get lastName(): AbstractControl {
    return this.saveProfileFormGroup.get('lastName') as AbstractControl;
  }

  get firstName(): AbstractControl {
    return this.saveProfileFormGroup.get('firstName') as AbstractControl;
  }

  get email(): AbstractControl {
    return this.saveProfileFormGroup.get('email') as AbstractControl;
  }

  get phone(): AbstractControl {
    return this.saveProfileFormGroup.get('phone') as AbstractControl;
  }

  get dateOfBirth(): AbstractControl {
    return this.saveProfileFormGroup.get('dateOfBirth') as AbstractControl;
  }

}
