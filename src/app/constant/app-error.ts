export class AppError {
  errorCode: number;
  message: string;

  constructor(errorCode: number, message: string) {
    this.errorCode = errorCode;
    this.message = message;
  }

  public static VALIDATION() {
    return new AppError(100, "Validation error")
  }

  public static NOT_FOUND() {
    return new AppError(101, "Not found")
  }

  public static FORBIDDEN() {
    return new AppError(102, "Forbidden")
  }

  public static INTERNAL_SERVER_ERROR() {
    return new AppError(103, "Internal server error")
  }

  public static UNAUTHORIZED() {
    return new AppError(104, "Unauthorized")
  }

  public static BAD_REQUEST() {
    return new AppError(105, "Bad request")
  }

}
