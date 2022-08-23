export class Ward {
  code: Number;
  name: string;
  division_type: string;
  code_name: string;
  district_code: string;

  constructor(code: Number, name: string, divisionType: string, code_name: string, district_code: string) {
    this.code = code;
    this.name = name;
    this.division_type = divisionType;
    this.code_name = code_name;
    this.district_code = district_code;
  }
}
