export class WardModel {
  code: Number;
  name: String;
  division_type: String;
  code_name: String;
  district_code: String;

  constructor(code: Number, name: String, divisionType: String, code_name: String, district_code: String) {
    this.code = code;
    this.name = name;
    this.division_type = divisionType;
    this.code_name = code_name;
    this.district_code = district_code;
  }
}
