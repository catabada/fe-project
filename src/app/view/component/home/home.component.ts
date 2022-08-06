import { Component, OnInit } from '@angular/core';
import {Brand} from "../../../model/brand";
import {ImageService} from "../../../service/image.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Trang chủ';
  brands: Brand[] = [];
  constructor(private imageService: ImageService) {
    this.brands = imageService.getBrandImage('/brand');
  }

  ngOnInit(): void {
    document.title = this.title;
  }

}
