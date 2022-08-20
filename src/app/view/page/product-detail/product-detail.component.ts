import {Component, OnInit} from '@angular/core';
import {param} from "jquery";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {Product, products} from "../../../model/product.model";
import {ProductDetail, productDetails} from "../../../model/product-detail.model";
import {Checkout} from "../../../model/checkout.model";
import {CheckoutItem} from "../../../model/checkout-item.model";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  title: string = "Chi tiết sản phẩm"
  productId: number
  product!: Product;
  productDetail: any;

  currentPos: number = 1

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    window.document.title = this.title;
    this.dragSlider();

    this.productId = Number.parseInt(this.route.snapshot.params.id);
    this.productService.getProduct(this.productId).subscribe(product => {
      this.product = product;
      this.productDetail = product.productDetails[0];
    })
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
    if(quantity < this.productDetail.unitInStock) {
      quantity++;
      input.val(quantity);
    }
  }

  minusAmount(): void {
    let input = jQuery("#quantity");
    let quantity = <number> input.val();
    if(quantity > 1) {
      quantity--;
      input.val(quantity);
    }
  }

  onActive($event: any, i: number, productDetailId: number): void {
    jQuery($event.path[0]).addClass('active');
    jQuery.map(jQuery('.btn-sizes'), function (item: any, index) {
      if(i !== index) {
        jQuery(item).removeClass('active');
      }
    })
    this.productDetail = this.product.productDetails.find(productDetail => productDetail.id === productDetailId);
  }


  buyNow() {
    let checkout: Checkout = {
      id: 3,
      items: [],
      total: 0,
      createdAt: new Date()
    }
    this.product.productDetails = [this.productDetail];
    let checkoutItem: CheckoutItem = {
      id: 4,
      quantity: Number.parseInt(<string>jQuery('#quantity').val()),
      checkoutId: checkout.id,
      product: this.product,
    }
    checkout.items.push(checkoutItem);
    sessionStorage.setItem('checkoutId', checkout.id.toString());
    this.router.navigate(['/checkout'], { state: { checkoutId: checkout.id } });

  }

  addToCart() {

  }
}
