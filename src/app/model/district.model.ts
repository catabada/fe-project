import {WardModel} from "./ward.model";

export class DistrictModel {
  code: Number;
  name: String;
  division_type: String;
  code_name: String;
  province_code: String;
  wards: WardModel[];

  constructor(code: Number, name: String, division_type: String, code_name: String, province_code: String, wards: WardModel[]) {
    this.code = code;
    this.name = name;
    this.division_type = division_type;
    this.code_name = code_name;
    this.province_code = province_code;
    this.wards = wards;
  }
}
