import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  titleColor: number = 4;

  constructor(
    private router: Router
  ) { }

  toggleTitle1() {
        this.titleColor = 3;
    }
  toggleTitle2() {
        this.titleColor = 4;
    }
  toggleTitle3() {
        this.titleColor = 5;
    }

    logOut() {
      localStorage.removeItem('user-Data');
      this.router.navigate(["/loginForm"]);
    }

}
