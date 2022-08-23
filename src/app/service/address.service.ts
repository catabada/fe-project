import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Province} from "../model/province..model";
import {District} from "../model/district.model";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

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
