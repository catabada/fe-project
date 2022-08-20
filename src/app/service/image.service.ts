import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Brand} from "../dto/brand.dto";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: AngularFireStorage) {
  }

  getBrandImage(path: string): Brand[] {
    let brands: Brand[] = [];
    let id = 1;
    this.storage.ref('/image' + path).listAll().subscribe(res => {
      res.items.forEach(item => {
        this.storage.ref(item.fullPath).getDownloadURL().subscribe(url => {
          brands.push(new Brand(id, item.name.split('.')[0], url));
          id++;
        });
      });
    });
    return brands;
  }
}
