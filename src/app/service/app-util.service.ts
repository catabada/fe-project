import { Injectable } from '@angular/core';
import {AppConstant} from "../constant/app-constant";

@Injectable({
  providedIn: 'root'
})
export class AppUtilService {

  constructor() { }

  /**
   * @param name
   * @param value
   */
  addToLocalStorage(name: string, value: any) {
    localStorage.setItem(`${AppConstant.APP_PREFIX}_${name}`, JSON.stringify(value))
  }

  /**
   * @param name
   * @returns T
   */
  getFromLocalStorage(name: string): any {
    if (localStorage.getItem(`${AppConstant.APP_PREFIX}_${name}`)) {
      return JSON.parse(localStorage.getItem(`${AppConstant.APP_PREFIX}_${name}`)!)
    }
    return null
  }

  /**
   * @param name
   */
  removeFromLocalStorage(name: string) {
    localStorage.removeItem(`${AppConstant.APP_PREFIX}_${name}`)
  }

  /**
   * @param formData
   */
  convertFormDataToJSON(formData: FormData): any {
    let object: any = {};
    formData.forEach((value, key) => object[key] = value);
    return JSON.parse(JSON.stringify(object));
  }

  /**
   * @param str
   */
  convertStringToArray(str: string) {
    return JSON.parse('[' + str + ']')
  }

}
