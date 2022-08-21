export class AppUtil {

  public static formatFullName(lastName: string, firstName: string): string {
    return lastName.trim() + ' ' + firstName.trim();
  }

}
