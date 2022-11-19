import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  titleColor: boolean = true;

  constructor(
    
  ) {  }

  toggleTitle() {
    if (this.titleColor) {
      this.titleColor = false;
    } else {
      this.titleColor = true;
    }
    
  }

}
