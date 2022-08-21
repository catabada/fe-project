import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantityInCart: number

  constructor(private router: Router, private authenticationService: AuthenticationService, private cartService: CartService) { }

  ngOnInit(): void {
    this.quantityInCart = this.cartService.getCartFromLocalStorage().length ?? 0;
  }

  logout() {
    if (this.authenticationService.isLoggedIn()) {
      this.authenticationService.logout()
      this.router.navigate(['/home']).then(() => {})
    }
  }

}
