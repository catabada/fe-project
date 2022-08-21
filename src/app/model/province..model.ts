import {DistrictModel} from "./district.model";

export class Province {
  code: Number;
  name: String;
  division_type: String;
  code_name: String;
  phone_code: String;
  districts: DistrictModel[];

  constructor(code: Number, name: String, division_type: String, code_name: String, phone_code: String, districts: DistrictModel[]) {
    this.code = code;
    this.name = name;
    this.division_type = division_type;
    this.code_name = code_name;
    this.phone_code = phone_code;
    this.districts = districts;
  }
}
