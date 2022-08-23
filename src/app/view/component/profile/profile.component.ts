import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MdbNotificationRef, MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../alert/alert.component";
import {finalize, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {AppUserService} from "../../../service/app-user.service";
import {UserInfoResponse} from "../../../dto/user-info-response.dto";
import {DatePipe} from "@angular/common";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  title = 'Thông tin cá nhân';
  saveProfileFormGroup: FormGroup
  uploadImageFormGroup: FormGroup;
  loading: boolean = false;
  imageLoading: boolean = false;
  // @ViewChild('btnUpload') btnUpload: any;
  notificationRef: MdbNotificationRef<AlertComponent> | null = null;

  user: UserInfoResponse
  @Output() imageUrl: string
  dateOfBirthFormat: string

  private subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, public authenticationService: AuthenticationService,
              private appUserService: AppUserService, private notificationService: MdbNotificationService, private imageService: ImageService) {
  }

  ngOnInit(): void {
    window.document.title = 'AHA - ' + this.title;

    // get user info from local storage
    this.user = this.authenticationService.getUserInfoFromLocalStorage()
    this.imageService.getUserImage(this.authenticationService.getLoggedInAvatar()).subscribe(url => this.imageUrl = url)
    this.dateOfBirthFormat = new DatePipe('en-US').transform(this.user.dateOfBirth, 'yyyy-MM-dd')!

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
      dateOfBirth: new FormControl(this.dateOfBirthFormat, []),
    })

    this.uploadImageFormGroup = this.formBuilder.group({
      id: new FormControl(this.user.id),
      image: new FormControl(null, [
        Validators.required
      ])
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

  uploadImage(id: number, event: any) {
    if (this.uploadImageFormGroup.valid) {
      this.imageLoading = true;
      // this.btnUpload.nativeElement.textContent = 'Đang tải lên...'
      this.subscriptions.push(this.appUserService.uploadImage(id, this.user.image, event.target.files[0]).subscribe(response => {
        if (response.success) {
          this.imageService.getUserImage(this.authenticationService.getLoggedInAvatar())
            .pipe(finalize(() => {
              this.imageLoading = false
              this.openAlert(response.success, response.message)
              this.router.navigate(['/']).then(() => {
                this.router.navigate(['/account/profile']).then(() => {})
              })
            }))
            .subscribe(url => this.imageUrl = url)
        } else this.openAlert(response.success, response.message)
      }));
    }
  }

  openAlert(success: boolean, message: string) {
    this.notificationRef = this.notificationService.open(AlertComponent, {
      data: {success: success, message: message},
      autohide: true,
      delay: 2000,
    })
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

  get image(): AbstractControl {
    return this.uploadImageFormGroup.get('image') as AbstractControl;
  }

}
