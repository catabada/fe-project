import {District} from "./district.model";

export class Province {
  code: Number;
  name: string;
  division_type: string;
  code_name: string;
  phone_code: string;
  districts: District[];

  constructor(code: Number, name: string, division_type: string, code_name: string, phone_code: string, districts: District[]) {
    this.code = code;
    this.name = name;
    this.division_type = division_type;
    this.code_name = code_name;
    this.phone_code = phone_code;
    this.districts = districts;
  }
}
