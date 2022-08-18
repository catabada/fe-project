import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Province} from "../../../model/Province";
import {District} from "../../../model/District";
import {Ward} from "../../../model/Ward";
import {AddressService} from "../../../service/address.service";

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  provinces!: Province[];
  provinceSelected!: number;

  districts!: District[];
  districtSelected!: number;

  wards!: Ward[];
  wardSelected!: number;

  constructor(private httpClient: HttpClient, private addressService: AddressService) {
    this.addressService.getProvinces();
  }

  ngOnInit(): void {
    this.fetchProvinces();
  }

  private fetchProvinces() {
    this.addressService.getProvinces().subscribe(
      response => {
        this.provinces = response;
      })
  }

  public onProvinceSelect($event: any) {
    this.addressService.getProvince(this.provinceSelected).subscribe(
      province => {
        this.districts = province.districts;
      });
  }
  public onDistrictSelect($event: any) {
    this.addressService.getDistrict(this.districtSelected).subscribe(
      district => {
        this.wards = district.wards;
      }
    );
  }
}
