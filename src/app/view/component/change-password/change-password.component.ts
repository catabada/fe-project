import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MdbNotificationRef, MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../../component/alert/alert.component";
import {AppUserService} from "../../../service/app-user.service";
import {AuthenticationService} from 'src/app/service/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  title = 'Đổi mật khẩu';
  changePasswordFormGroup: FormGroup;
  loading: boolean;
  notificationRef: MdbNotificationRef<AlertComponent> | null = null;
  private subscriptions: Subscription[] = [];
  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('newPassword')!.value;
    let confirmPass = group.get('confirmPassword')!.value
    return pass === confirmPass ? null : {notSame: true}
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private appUserService: AppUserService, private notificationService: MdbNotificationService,
              private authenticationService: AuthenticationService) {
  }



ngOnInit()
:
void {
  window.document.title = this.title;
  this.changePasswordFormGroup = this.formBuilder.group({
    oldPassword: new FormControl('', [
      Validators.required
    ]),
    newPassword: new FormControl('', [
      Validators.required
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ]),
  }, {validators: this.checkPasswords});
}

ngOnDestroy()
:
void {
  this.subscriptions.forEach(subscription => subscription.unsubscribe());
}

onSubmit(user
:
any
)
{
  {
    if (this.changePasswordFormGroup.invalid) {
      this.changePasswordFormGroup.markAllAsTouched();
    } else {
      this.loading = true;
      this.subscriptions.push(this.appUserService.changePassword(user).pipe(finalize(() => this.loading = false))
        .subscribe((response: any) => {
            if (response.success) {
              this.openAlert(response.success, response.message);
              this.redirectTo('/');
            } else this.openAlert(false, response.message);
          }
        )
      );
    }

  }


}

openAlert(success
:
boolean, message
:
string
)
{
  this.notificationRef = this.notificationService.open(AlertComponent, {
    data: {success: success, message: message},
    autohide: true,
    delay: 2000,
  })
}

redirectTo(uri
:
string
)
{
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
}

//ChangePasswordForm
get
oldPassword()
:
AbstractControl
{
  return this.changePasswordFormGroup.get('oldPassword') as AbstractControl;
}

get
newPassword()
:
AbstractControl
{
  return this.changePasswordFormGroup.get('newPassword') as AbstractControl;
}

get
confirmPassword()
:
AbstractControl
{
  return this.changePasswordFormGroup.get('confirmPassword') as AbstractControl;
}
}
