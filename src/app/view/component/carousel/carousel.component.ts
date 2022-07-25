import {Component, OnInit} from '@angular/core';
import {Slide} from "../../../dto/slide";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  slides: Array<Slide> = []

  constructor() {
  }

  ngOnInit(): void {
    this.slides.push(new Slide("MEN'S SHOES COLLECTION", 'New trending shoes', '/assets/image/img_bg_1.jpg', '#', 'SHOP COLLECTION'))
    this.slides.push(new Slide('SALE 50% OFF', 'Big sale sandals', '/assets/image/img_bg_2.jpg', '#', 'SHOP COLLECTION'))
  }

}
