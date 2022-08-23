export class AppUtil {

  public static formatFullName(lastName: string, firstName: string): string {
    return lastName.trim() + ' ' + firstName.trim();
  }

  public static formatVND(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND"
  }

}
