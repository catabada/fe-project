import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../../model/cart-item.model";
import {CartService} from "../../../service/cart.service";
import {CheckoutItem} from "../../../model/checkout-item.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] ;

  constructor(private cartService: CartService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartFromLocalStorage();
  }

  removeCartItem($event: any, id: number) {
    jQuery($event.target).parents('tr').remove();
    this.cartService.removeFromCart(id).subscribe(
      response => {
        let length = this.cartService.getCartFromLocalStorage().length;
        jQuery('#quantityInCart').text(`[${length}]`);
        jQuery('#totalPrice').text(this.formatVND(this.totalPriceInCart()));
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

  onCheckout() {
    let checkout: CheckoutItem[]
    this.cart = this.cartService.getCartFromLocalStorage();
    checkout = this.cart.map(cartItem => {
      return new CheckoutItem(cartItem.productDetailDto, cartItem.quantity)
    })
    sessionStorage.setItem('checkout', JSON.stringify(checkout))
      this.router.navigate(['/checkout'])
  }

  formatVND(price: number): string {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
  }

  totalPriceInCart(): number {
    return this.cartService.totalPrice();
  }
}
