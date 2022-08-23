import {District} from "./district.model";
import {Ward} from "./ward.model";

export class Address {
  id: number
  districtCode: string;
  wardCode: string
  street: string
  apartment: string
}
