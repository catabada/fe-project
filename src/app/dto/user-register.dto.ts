export class UserRegister {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  phone: string;

  constructor(firstname: string, lastname: string, username: string, email: string, password: string, phone: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }
}
