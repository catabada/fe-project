import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Product} from "../../../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {ProductDetail} from "../../../model/product-detail.model";
import {CheckoutItem} from "../../../model/checkout-item.model";
import {CartService} from "../../../service/cart.service";
import {MdbNotificationRef, MdbNotificationService} from "mdb-angular-ui-kit/notification";
import {AlertComponent} from "../../component/alert/alert.component";
import {ProductDetailDto} from "../../../dto/product-detail.dto";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  currentPos: number = 1;

  product: Product
  productId: number;
  productDetail: ProductDetail
  productImageUrls: string[] = []

  notificationRef: MdbNotificationRef<AlertComponent> | null;

  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductService,
              private cartService: CartService,
              private notificationService: MdbNotificationService,
              private imageService: ImageService
  ) {
  }

  ngOnInit(): void {
    this.dragSlider();
    this.productId = Number.parseInt(this.route.snapshot.params['id']);
    this.productService.getProduct(this.productId).subscribe(
      (product: Product) => {
        this.product = product;
        this.productDetail = this.product.productDetails[0];

        for (let productDetail of product.productDetails) {
          this.imageService.getProductImageUrl(product.id).subscribe((url: string) => {
            this.productImageUrls.push(url)
          })
        }
      }
    );
  }
  formatVND(price: number): string {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
  }

  changeSlider(pos: number): void {
    $.map($('.manual-btn'), function (labelBtn: any) {
      $(labelBtn).removeClass('active');
    });
    let label = $("label[for='radio" + pos + "']");
    label.addClass('active');
  }

  dragSlider(): void {
    let slides = $(".slides");
    let currentPos = this.currentPos;
    let first = $(".first");
    let point = {'xDown': 0, 'xUp': 0};
    slides.on("mousedown", function (e: any) {
      point['xDown'] = e.clientX;
    }).on("mouseup", function (e: any) {
      point['xUp'] = e.clientX;
      if (point['xDown'] > point['xUp']) {
        currentPos < 5 ? currentPos++ : currentPos = 1
        first.css("margin-left", -(currentPos - 1) * 40 + "%");
      } else if (point['xDown'] < point['xUp']) {
        currentPos > 1 ? currentPos-- : currentPos = 5
        first.css("margin-left", -(currentPos - 1) * 40 + "%");
      }

      //-- Start active label of slider--
      $.map($('.manual-btn'), function (labelBtn: any) {
        $(labelBtn).removeClass('active');
      });
      let label = $("label[for='radio" + currentPos + "']");
      label.addClass('active');
      //  --End active label of slider--
    });
  }

  plusAmount(): void {
    let input = $("#quantity");
    let quantity = <number>input.val();
    if(quantity < this.productDetail.unitInStock) {
      quantity++;
      input.val(quantity);
    }
  }

  minusAmount(): void {
    let input = $("#quantity");
    let quantity = <number>input.val();
    if (quantity > 1) {
      quantity--;
      input.val(quantity);
    }
  }

  addToCart(): void {
    let quantity = Number.parseInt(<string>jQuery("#quantity").val())
    let productDetailDto: ProductDetailDto = ProductDetailDto.createFromEntity(this.productDetail, this.productService);
    this.cartService.addToCart(productDetailDto, quantity).subscribe(
      response => {
        let length = this.cartService.getCartFromLocalStorage().length;
        jQuery('#quantityInCart').text(`[${length}]`);
        this.openToast(response.success, response.message);
      }
    );
  }

  openToast(success: boolean, message: string) {
    this.notificationRef = this.notificationService.open(AlertComponent, {
      data: {success: success, message: message},
      autohide: true,
      delay: 3000,
    });
  }

  buyNow(): void {
    let productDetailDto: ProductDetailDto = ProductDetailDto.createFromEntity(this.productDetail, this.productService);
    let quantity = <number>jQuery("#quantity").val();
    let checkout: CheckoutItem[]
    checkout = [new CheckoutItem(productDetailDto, quantity)];

    sessionStorage.setItem('checkout', JSON.stringify(checkout));
    this.router.navigate(['/checkout']);
  }

  onActive($event: any, i: number, productDetail: ProductDetail): void {
    jQuery($event.target).addClass('active');
    this.productDetail = productDetail;
    jQuery.map(jQuery('.btn-sizes'), function (btn: any, index) {
      if (i != index) {
        jQuery(btn).removeClass('active');
      }
    });
  }

}
