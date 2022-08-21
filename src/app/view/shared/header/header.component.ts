import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantityInCart: number

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.quantityInCart = this.cartService.getCartFromLocalStorage().length ?? 0;
  }

}
