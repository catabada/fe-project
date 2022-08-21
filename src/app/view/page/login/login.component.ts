import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {AppUserService} from "../../../service/app-user.service";
import {MdbNotificationRef, MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../../component/alert/alert.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  title = 'Đăng nhập';
  loginFormGroup: FormGroup;
  loading: boolean;
  notificationRef: MdbNotificationRef<AlertComponent> | null = null;

  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService,
              private appUserService: AppUserService, private notificationService: MdbNotificationService) {
  }

  ngOnInit(): void {
    window.document.title = this.title;

    this.loginFormGroup = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onSubmit(user: any) {
    if (this.loginFormGroup.invalid) {
      this.loginFormGroup.markAllAsTouched();
    } else {
      this.loading = true;
      this.subscriptions.push(
        this.authenticationService.login(user)
          .pipe(finalize(() => this.loading = false))
          .subscribe((response: any) => {
            if (response.success) {
              this.appUserService.getUserInfo(response.data.id).subscribe((response: any) => {
                if (response.success) {
                  this.authenticationService.addUserInfoToLocalStorage(response.data)
                  this.router.navigate(['/home']).then(() => {});
                } else this.openToast(false, response.message);
              });
            } else this.openToast(response.success, response.message);
          })
      )
    }
  }

  openToast(success: boolean, message: string) {
    this.notificationRef = this.notificationService.open(AlertComponent, {data: {text: message}});
  }

  get username(): AbstractControl {
    return this.loginFormGroup.get('username') as AbstractControl;
  }

  get password(): AbstractControl {
    return this.loginFormGroup.get('password') as AbstractControl;
  }

}
