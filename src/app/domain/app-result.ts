export class AppBaseResult {
  success: boolean;
  errorCode: number;
  message: string;

  constructor(success: boolean, errorCode: number, message: string) {
    this.success = success;
    this.errorCode = errorCode;
    this.message = message;
  }

  static generateIsSuccess() {
    return new AppBaseResult(true, 0, "Success")
  }

  static generateIsFailed(errorCode: number, message: string) {
    return new AppBaseResult(false, errorCode, message)
  }

}

export class AppServiceResult<T> extends AppBaseResult {
  data: T;

  constructor(success: boolean, errorCode: number, message: string, data: T) {
    super(success, errorCode, message);
    this.data = data;
  }
}
