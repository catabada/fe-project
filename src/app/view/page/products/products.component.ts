import {Component, OnInit} from '@angular/core';
import {Pagination} from "../../../dto/pagination.dto";
import {Brand} from "../../../model/brand.model";
import {Feature} from "../../../dto/feature.dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pagination = new Pagination(100, 5);
  brands: Brand[] | undefined;
  features: Feature[] | undefined;
  gender: string

  currentTypes: number[] = [];
  currentBrands: number[] = [];
  currentColors: number[] = [];
  currentSort: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit(): void {
    this.gender = this.route.snapshot.params['gender']
    this.brands = [
      new Brand(1, 'Adidas', 'adidas.png'),
      new Brand(2, 'Nike', 'nike.png'),
      new Brand(3, 'Gucci', 'gucci.png'),
      new Brand(4, 'MerrellM', 'merrellm.png'),
      new Brand(5, 'Puma', 'puma.png'),
    ];
    this.features = [
      new Feature(1, "casuals.jpg", "Casuals"),
      new Feature(2, "dress.jpg", "Dress"),
      new Feature(3, "sports.jpg", "Sports"),
    ]
  }

  changeType($event: number[]) {
    this.currentTypes = $event;
  }

  changeBrand($event: number[]) {
    this.currentBrands = $event;
  }

  changeColor($event: number[]) {
    this.currentColors = $event;
  }

  sort($event: number) {
    this.currentSort = $event;
  }
}
