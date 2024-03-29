import { Component, OnInit } from '@angular/core';
import {Brand} from "../../../model/brand.model";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Trang chủ';
  brands: Brand[] = [];
  constructor(public storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    document.title = 'AHA - ' + this.title;

    this.storage.ref('/image/brand').listAll().subscribe(res => {
      res.items.forEach(item => {
        let id = 1;
        this.storage.ref(item.fullPath).getDownloadURL().subscribe(url => {
          this.brands.push(new Brand(id, item.name.split('.')[0], url));
          id++;
        });
      });
    });
  }

}
