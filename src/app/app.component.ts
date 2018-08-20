import { Component, OnInit, isDevMode } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public x = false;
  cssUrl: string;
  constructor(public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    // const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    //
    // const n = randomIntegerInRange(1, 100) % 2;
    // this.cssUrl = n % 2 === 0 ? '/assets/styles1.css' : '/assets/styles2.css';
  }
  add() {
    if (this.x) {
      this.cssUrl='/assets/css-files/style1.css';
    } else {
      this.cssUrl='/assets/css-files/style2.css';
    }
    this.x = !this.x;
  }

}
