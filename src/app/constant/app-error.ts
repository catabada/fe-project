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

  public static UNKNOWN() {
    return new AppError(99, "Unknown error")
  }

  public static NOT_FOUND() {
    return new AppError(404, "Trang mà bạn đang tìm kiếm không tồn tại")
  }

  public static FORBIDDEN() {
    return new AppError(403, "Bạn không có quyền truy cập")
  }

  public static INTERNAL_SERVER_ERROR() {
    return new AppError(500, "Không thể thực hiện yêu cầu")
  }

  public static UNAUTHORIZED() {
    return new AppError(401, "Unauthorized")
  }

  public static BAD_REQUEST() {
    return new AppError(400, "Yêu cầu không hợp lệ")
  }

}
