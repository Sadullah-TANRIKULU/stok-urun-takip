import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string = 'sado@sado.com';
  password: string = '1q!@2w3e4r';
  userData: any = {};

  constructor(
    private router: Router
  ) { }

  isLoggedIn() {

    this.userData = localStorage.getItem('user-Data');
    // console.log({ email: this.email, password: this.password } = this.userData);
    console.log(this.userData);

    if (this.email === this.userData.email &&
      this.password === this.userData.password) {
      return true;
    } else {
      this.router.navigate(["/loginForm"]);
      return false;
    }
  }

}
