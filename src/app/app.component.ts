import { Component, ViewChild } from '@angular/core';
import { RaporlamaComponent } from './raporlama/raporlama.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(RaporlamaComponent)

  titleColor: number = 0;

  constructor(
    private raporlamaComponent: RaporlamaComponent
  ) { }

  myCallbackFunction() {
    console.log("Howdy Child!!");
    this.raporlamaComponent.topla1();
    this.raporlamaComponent.topla2();

  }

  toggleTitle() {

    if (this.titleColor) {
      this.titleColor = 333;
    }
    else if (this.titleColor) {
      this.titleColor = 444;
    }
    else if (this.titleColor) {
      this.titleColor = 555;
    }

  }
}
