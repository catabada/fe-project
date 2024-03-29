import {Component, OnInit} from '@angular/core';
import {CartItem} from "../../../model/cart-item.model";
import {CartService} from "../../../service/cart.service";
import {CheckoutItem} from "../../../model/checkout-item.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PopConfirmComponent} from "../../component/pop-confirm/pop-confirm.component";
import {MdbPopconfirmRef, MdbPopconfirmService} from "mdb-angular-ui-kit/popconfirm";
import {ImageService} from "../../../service/image.service";
import {finalize} from "rxjs";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  title = "Giỏ hàng";
  cart: CartItem[];

  popconfirmRef: MdbPopconfirmRef<PopConfirmComponent> | null = null;
  productImages: Map<number, string> = new Map<number, string>();

  constructor(private cartService: CartService,
              private router: Router, private route: ActivatedRoute,
              private popconfirmService: MdbPopconfirmService,
              private imageService: ImageService) {
  }

  ngOnInit(): void {
    document.title = 'AHA - ' + this.title;
    this.cart = this.cartService.getCartFromLocalStorage();
    if (this.cart && this.cart.length > 0) {
      this.getProductImage()
    }
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
    let quantity = Number.parseInt(<string>jQuery($event.target).val());
    this.cartService.updateQuantity(productDetailId, quantity).subscribe(
      response => {
        let cart = this.cartService.getCartFromLocalStorage();
        let cartItem = cart.find(cartItem => cartItem.productDetailDto.id === productDetailId);
        let price = cartItem!.productDetailDto.unitPrice;
        let total = price * quantity;
        jQuery($event.target).parents('.quantity').siblings('.total').text(this.formatVND(total));
        jQuery('#totalPrice').text(this.formatVND(this.totalPriceInCart()));
      })
  }

  onCheckout() {
    let checkout: CheckoutItem[]
    this.cart = this.cartService.getCartFromLocalStorage();
    checkout = this.cart.map(cartItem => {
      return new CheckoutItem(cartItem.productDetailDto, cartItem.quantity)
    })
    sessionStorage.setItem('checkout', JSON.stringify(checkout))
    this.router.navigate(['/checkout']).then()
  }

  formatVND(price: number): string {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
  }

  totalPriceInCart(): number {
    return this.cartService.totalPrice();
  }

  openPopConfirm(event: Event, id: number) {
    const target = event.target as HTMLElement;
    this.popconfirmRef = this.popconfirmService.open(PopConfirmComponent, target, {popconfirmMode: 'modal', data: id});
    this.popconfirmRef.onConfirm.subscribe(() => {
      this.removeCartItem(event, id);
    })
  }

  getProductImage() {
    for (let cartItem of this.cart) {
      this.imageService.getProductImageUrlImage(cartItem.productDetailDto.image[0].imageUrl)
        .subscribe(url => {
        this.productImages.set(cartItem.productDetailDto.id, url)
      })
    }
  }

}
