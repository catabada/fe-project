export class UserRegister {
  lastName: string;
  firstName: string;
  usernameRegister: string;
  emailRegister: string;
  passwordRegister: string;
  phone: string;
  dateOfBirth: Date;

  constructor(lastName: string, firstName: string, usernameRegister: string, emailRegister: string, passwordRegister: string, phone: string, dateOfBirth: Date) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.usernameRegister = usernameRegister;
    this.emailRegister = emailRegister;
    this.passwordRegister = passwordRegister;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
  }


}
