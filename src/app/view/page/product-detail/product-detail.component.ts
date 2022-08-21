import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {ProductDetail} from "../../../model/product-detail.model";
import {CheckoutItem} from "../../../model/checkout-item.model";

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

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.dragSlider();
    this.productId = Number.parseInt(this.route.snapshot.params['id']);
    this.productService.getProduct(this.productId).subscribe(
      (product: Product) => {
        this.product = product;
        this.productDetail = this.product.productDetails[0];
      }
    );
  }

  changeSlider(pos: number): void {
    jQuery.map(jQuery('.manual-btn'), function (labelBtn: any) {
      jQuery(labelBtn).removeClass('active');
    });
    let label = jQuery("label[for='radio" + pos + "']");
    label.addClass('active');
  }

  dragSlider(): void {
    let slides = jQuery(".slides");
    let currentPos = this.currentPos;
    let first = jQuery(".first");
    let point = {'xDown': 0, 'xUp': 0};
    slides.on("mousedown", function (e: any) {
      point['xDown'] = e.clientX;
    }).on("mouseup", function (e: any) {
      point['xUp'] = e.clientX;
      if (point['xDown'] > point['xUp']) {
        currentPos < 4 ? currentPos++ : currentPos = 1
        first.css("margin-left", -(currentPos - 1) * 50 + "%");
      } else if (point['xDown'] < point['xUp']) {
        currentPos > 1 ? currentPos-- : currentPos = 4
        first.css("margin-left", -(currentPos - 1) * 50 + "%");
      }

      //-- Start active label of slider--
      jQuery.map(jQuery('.manual-btn'), function (labelBtn: any) {
        jQuery(labelBtn).removeClass('active');
      });
      let label = jQuery("label[for='radio" + currentPos + "']");
      label.addClass('active');
      //  --End active label of slider--
    });
  }

  plusAmount(): void {
    let input = jQuery("#quantity");
    let quantity = <number> input.val();
    quantity++;
    input.val(quantity);
  }

  minusAmount(): void {
    let input = jQuery("#quantity");
    let quantity = <number> input.val();
    if(quantity > 1) {
      quantity--;
      input.val(quantity);
    }
  }

  addToCart(): void {

  }
  buyNow(): void {
    this.product.productDetails = [this.productDetail];
    let quantity = <number> jQuery("#quantity").val();
    let checkout: CheckoutItem[]
    checkout = [new CheckoutItem(this.product, quantity)];

    sessionStorage.setItem('checkout', JSON.stringify(checkout));
    this.router.navigate(['/checkout']);
  }

  onActive($event: any, i: number, productDetail: ProductDetail): void {
    jQuery($event.target).addClass('active');
    this.productDetail = productDetail;
    jQuery.map(jQuery('.btn-sizes'), function (btn: any, index) {
      if(i != index) {
        jQuery(btn).removeClass('active');
      }
    });
  }
}
