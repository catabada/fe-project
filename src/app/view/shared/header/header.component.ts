import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../service/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantityInCart: number

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    if(this.cartService.getCartFromLocalStorage() == null) {
      this.quantityInCart = 0
    } else {
      this.quantityInCart = this.cartService.getCartFromLocalStorage().length;
    }
  }

  submitSearch($event: KeyboardEvent) {
    if($event.keyCode == 13) {
      this.router.navigate(['/product/search', jQuery('#search').val()!.toString().trim()])
    }
  }

}
