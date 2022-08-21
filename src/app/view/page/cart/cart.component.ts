import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../../model/cart-item.model";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] | null;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartFromLocalStorage();
  }

  removeCartItem($event: any, id: number) {
    jQuery($event.target).parents('tr').remove();
    this.cartService.removeFromCart(id).subscribe(
      response => {
        let length = this.cartService.getCartFromLocalStorage().length;
        jQuery('#quantityInCart').text(`[${length}]`);
      }
    );
  }

  onChangeQuantity($event: any, productDetailId: number) {
    let quantity = Number.parseInt(<string>jQuery('.quantity').find('input').val());
    this.cartService.updateQuantity(productDetailId, quantity).subscribe(
      response => {
        let cart = this.cartService.getCartFromLocalStorage();
        let cartItem = cart.find(cartItem => cartItem.productDetailDto.id === productDetailId);
        let price = cartItem!.productDetailDto.unitPrice;
        let total = price * quantity;
        jQuery($event.target).parents('.quantity').siblings('.total').text(total + 'đ');
      })
  }
}
