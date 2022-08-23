import {Ward} from "./ward.model";

export class District {
  code: Number;
  name: string;
  division_type: string;
  code_name: string;
  province_code: string;
  wards: Ward[];

  constructor(code: Number, name: string, division_type: string, code_name: string, province_code: string, wards: Ward[]) {
    this.code = code;
    this.name = name;
    this.division_type = division_type;
    this.code_name = code_name;
    this.province_code = province_code;
    this.wards = wards;
  }
}
