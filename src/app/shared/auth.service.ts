import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string | null = 'sado@sado.com';
  password: string | null = '1q!@2w3e4r';
  authData: any = {};

  constructor(
    private router: Router
  ) { }

  isLoggedIn() {

    this.authData = JSON.parse(localStorage.getItem('user-Data') || '');

    if (this.email === this.authData.email &&
      this.password === this.authData.password) {
      return true;
    } else {
      this.router.navigate(["/loginForm"]);
      return false;
    }
  }


}
