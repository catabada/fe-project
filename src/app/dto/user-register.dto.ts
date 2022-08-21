export class UserRegister {
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: Date;

  constructor(lastName: string, firstName: string, username: string, email: string, password: string, phone: string, dateOfBirth: Date) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
  }
}
