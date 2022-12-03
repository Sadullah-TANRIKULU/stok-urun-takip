import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RaporlamaComponent } from './raporlama/raporlama.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @ViewChild(RaporlamaComponent)

  titleColor: number = 4;

  constructor(
    private router: Router
    // private raporlamaComponent: RaporlamaComponent
  ) { }

  // myCallbackFunction() {
  //   console.log("Howdy Child!!");
  //   this.raporlamaComponent.topla1();
  //   this.raporlamaComponent.topla2();

  // }

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
