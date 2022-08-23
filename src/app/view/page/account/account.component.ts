import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {ImageService} from "../../../service/image.service";
import {AppUtil} from "../../../util/app-util";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnChanges {
  fullName: string
  imageUrl: string

  constructor(private authenticationService: AuthenticationService, private imageService: ImageService) { }

  ngOnInit(): void {
    let user = this.authenticationService.getUserInfoFromLocalStorage()
    this.fullName = AppUtil.formatFullName(user.lastName, user.firstName)
    this.imageService.getUserImage(this.authenticationService.getLoggedInAvatar()).subscribe(url => this.imageUrl = url)
  }

  ngOnChanges(changes: SimpleChanges): void {
    let user = this.authenticationService.getUserInfoFromLocalStorage()
    this.fullName = AppUtil.formatFullName(user.lastName, user.firstName)
    this.imageService.getUserImage(this.authenticationService.getLoggedInAvatar()).subscribe(url => this.imageUrl = url)
  }

}
