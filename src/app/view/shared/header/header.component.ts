import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    if (this.authenticationService.isLoggedIn()) {
      this.authenticationService.logout()
      this.router.navigate(['/home']).then(() => {})
    }
  }

}
