import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string | null = 'sado123@sado.com';
  password: string | null = environment.PASSWORD;
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
