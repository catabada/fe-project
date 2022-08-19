import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Province} from "../model/Province";
import {District} from "../model/District";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'my-auth-token'
  //
  //   })
  // }

  getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>('https://provinces.open-api.vn/api/?depth=1');
  }
  getProvince(provinceCode: number): Observable<Province> {
    return this.http.get<Province>(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
  }
  getDistrict(districtCode: number): Observable<District> {
    return this.http.get<District>(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
  }
}
