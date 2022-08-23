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
  registerFormGroup: FormGroup;
  loading: boolean;
  notificationRef: MdbNotificationRef<AlertComponent> | null = null;

  private subscriptions: Subscription[] = [];
  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('passwordRegister')!.value;
    let confirmPass = group.get('confirmPasswordRegister')!.value
    return pass === confirmPass ? null : {notSame: true}
  }

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService,
              private appUserService: AppUserService, private notificationService: MdbNotificationService) {
  }

  ngOnInit(): void {
    window.document.title = 'AHA - ' + this.title;

    this.loginFormGroup = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
    this.registerFormGroup = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      usernameRegister: new FormControl('', [
        Validators.required
      ]),
      emailRegister: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      passwordRegister: new FormControl('', [
        Validators.required
      ]),
      confirmPasswordRegister: new FormControl('', [
        Validators.required
      ]),
    }, {validators: this.checkPasswords});

  }

  ngOnDestroy()
    :
    void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onSubmit(user: any
  ) {
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
                  this.router.navigate(['/home']).then(() => {
                  });
                } else this.openAlert(false, response.message);
              });
            } else this.openAlert(response.success, response.message);
          })
      )
    }
  }

  onRegister(user: any
  ) {
    if (this.registerFormGroup.invalid) {
      this.registerFormGroup.markAllAsTouched();
    } else {
      this.loading = true;
      this.subscriptions.push(
        this.appUserService.register(user)
          .pipe(finalize(() => this.loading = false))
          .subscribe((response: any) => {
            if (response.success) {
              this.openAlert(response.success, response.message);
              this.redirectTo('/login');

            } else this.openAlert(false, response.message);
          })
      )
    }
  }

  openAlert(success
              :
              boolean, message
              :
              string
  ) {
    this.notificationRef = this.notificationService.open(AlertComponent, {
      data: {success: success, message: message},
      autohide: true,
      delay: 2000,
    })
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }

//Login form
  get username(): AbstractControl {
    return this.loginFormGroup.get('username') as AbstractControl;
  }

  get password(): AbstractControl {
    return this.loginFormGroup.get('password') as AbstractControl;
  }

//Register form
  get firstName(): AbstractControl {
    return this.registerFormGroup.get('firstName') as AbstractControl;
  }

  get lastName(): AbstractControl {
    return this.registerFormGroup.get('lastName') as AbstractControl;
  }

  get usernameRegister(): AbstractControl {
    return this.registerFormGroup.get('usernameRegister') as AbstractControl;
  }

  get emailRegister(): AbstractControl {
    return this.registerFormGroup.get('emailRegister') as AbstractControl;
  }

  get phone(): AbstractControl {
    return this.registerFormGroup.get('phone') as AbstractControl;
  }

  get passwordRegister(): AbstractControl {
    return this.registerFormGroup.get('passwordRegister') as AbstractControl;
  }

  get confirmPasswordRegister(): AbstractControl {
    return this.registerFormGroup.get('confirmPasswordRegister') as AbstractControl;
  }
}
