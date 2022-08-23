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

  constructor(private router: Router, public authenticationService: AuthenticationService, private cartService: CartService) { }

  ngOnInit(): void {
    let cart = this.cartService.getCartFromLocalStorage()
    this.quantityInCart = cart ? cart.length : 0;
  }

  logout() {
    this.authenticationService.logout()
    this.router.navigate(['/home']).then(() => {})
  }

}
