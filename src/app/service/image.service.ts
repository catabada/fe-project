import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {Brand} from "../model/brand.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private storage: AngularFireStorage) {
  }

  getBrandImage(): Brand[] {
    let brands: Brand[] = [];
    let id = 1;
    this.storage.ref('/image/brand').listAll().subscribe(res => {
      res.items.forEach(item => {
        this.storage.ref(item.fullPath).getDownloadURL().subscribe(url => {
          brands.push(new Brand(id, item.name.split('.')[0], url));
          id++;
        });
      });
    });
    return brands;
  }

  getUserImage(image: string): Observable<string> {
    return this.storage.ref('/image/user/' + image).getDownloadURL()
  }

  getProductImageUrl(id: number): any {
    return this.storage.ref('/image/product/' + id + '.png').getDownloadURL()
  }

  saveUserImage(fileName: string, image: File): AngularFireUploadTask {
    return this.storage.upload('/image/user/' + fileName, image)

  }
}
