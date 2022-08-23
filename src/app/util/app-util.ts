import {AddressDto} from "../dto/address.dto";

export class AppUtil {

  public static formatFullName(lastName: string, firstName: string): string {
    return lastName.trim() + ' ' + firstName.trim();
  }

  public static formatVND(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND"
  }

  public static formatAddress(address: AddressDto): string {
    return address.street + ', ' + address.apartment + ', ' + address.ward + ', ' + address.district + ', ' + address.province;
  }

}
