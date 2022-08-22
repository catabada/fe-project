import {Component, OnInit} from '@angular/core';
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

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    let user = this.authenticationService.getUserInfoFromLocalStorage()
    this.fullName = AppUtil.formatFullName(user.lastName, user.firstName)
    this.imageUrl = this.authenticationService.getLoggedInAvatar()
  }

}
