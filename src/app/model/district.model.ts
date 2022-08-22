import {Ward} from "./ward.model";

export class District {
  code: Number;
  name: String;
  division_type: String;
  code_name: String;
  province_code: String;
  wards: Ward[];

  constructor(code: Number, name: String, division_type: String, code_name: String, province_code: String, wards: Ward[]) {
    this.code = code;
    this.name = name;
    this.division_type = division_type;
    this.code_name = code_name;
    this.province_code = province_code;
    this.wards = wards;
  }
}
