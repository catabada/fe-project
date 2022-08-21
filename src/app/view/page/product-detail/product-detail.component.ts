import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  currentPos: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.dragSlider();
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
}
