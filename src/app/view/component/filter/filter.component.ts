import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductType, productTypes} from "../../../model/product-type.model";
import {ActivatedRoute} from "@angular/router";
import {Brand, brands} from "../../../model/brand.model";
import {Color, colorProducts} from "../../../model/color.model";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  gender: string
  productTypes: ProductType[]
  brands: Brand[];
  colors: Color[]

  brandNums: number[] = [];
  typeNums: number[] = [];
  colorNums: number[] = [];

  @Output() currentTypes = new EventEmitter;
  @Output() currentBrands = new EventEmitter;
  @Output() currentColors = new EventEmitter;
  @Output() currentSort = new EventEmitter;

  typeId: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gender = this.route.snapshot.params['gender']
    this.productTypes = productTypes;
    this.brands = brands
    this.colors = colorProducts
  }

  changeType() {
    this.typeNums = [];
    let checkboxs = jQuery('input[name="types"]:checked');
    for(let checkbox of checkboxs) {
      this.typeNums.push(Number(jQuery(checkbox).val()));
    }
    this.currentTypes.emit(this.typeNums);
  }
  changeBrand() {
    this.brandNums = [];
    let checkboxs = jQuery('input[name="brands"]:checked');
    for(let checkbox of checkboxs) {
      this.brandNums.push(Number(jQuery(checkbox).val()));
    }
    this.currentBrands.emit(this.brandNums);
  }
  changeColor() {
    this.colorNums = [];
    let checkboxs = jQuery('input[name="colors"]:checked');
    for(let checkbox of checkboxs) {
      this.colorNums.push(Number(jQuery(checkbox).val()));
    }
    this.currentColors.emit(this.colorNums);
  }

  sort(sort: number) {
    this.currentSort.emit(sort);
  }
}
