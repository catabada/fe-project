import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {AppUserService} from "../../../service/app-user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  title = 'Đăng nhập';
  loginFormGroup: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService, private appUserService: AppUserService) { }

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
      this.subscriptions.push(
        this.authenticationService.login(user)
          .pipe(finalize(() => {}))
          .subscribe({
            next: (response: any) => {
              this.appUserService.getUserInfo(response.data.userId).subscribe({
                  next: (response: any) => this.authenticationService.addUserInfoToLocalStorage(response.data),
                  error: (error: any) => console.log(error)
              });

              this.router.navigate(['/home']).then(r => console.log("Login success"));
            },
            error: (error: any) => {
              console.log(error);
            }
          })
      )
    }
  }

  get username(): AbstractControl {
    return this.loginFormGroup.get('username') as AbstractControl;
  }

  get password(): AbstractControl {
    return this.loginFormGroup.get('password') as AbstractControl;
  }

}
