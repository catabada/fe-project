import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {AppUtil} from "../../../util/app-util";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  fullName: string
  imageUrl: string

  constructor(private router: Router, public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      let user = this.authenticationService.getUserInfoFromLocalStorage()
      this.fullName = AppUtil.formatFullName(user.lastName, user.firstName)
      this.imageUrl = this.authenticationService.loggedInAvatar
    } else {
      this.router.navigate(['/login'], {replaceUrl: true}).then(() => {})
    }
  }

}
