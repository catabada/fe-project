import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AppUtil} from "../../../util/app-util";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  fullName: string
  imageUrl: string

  constructor(private router: Router, private authenticationService: AuthenticationService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    if (!this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/login'], {replaceUrl: true}).then(() => {})
    } else {
      let user = this.authenticationService.getUserInfoFromLocalStorage()
      this.fullName = AppUtil.formatFullName(user.lastName, user.firstName)

      let image = this.authenticationService.getLoggedInAvatar()
      this.storage.ref('/image/user').listAll().subscribe(res => {
        res.items.forEach(item => {
          if (item.name == image) {
            this.storage.ref(item.fullPath).getDownloadURL().subscribe(url => {
              this.imageUrl = url
            });
          }
        });
      });
    }
  }

}
