import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  title = 'app';

  /*navToDash(callback) {
    this.router.navigate(['/dashboard']);
    callback();
  }
  cScroll(x, y) {
    window.scrollTo({left: x, top: y, behavior: 'smooth'});
  }*/

  navToLeaders() {
    this.router.navigate(['/dashboard']);
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }

  navToActivities() {
    this.router.navigate(['/dashboard']);
    window.scrollTo({left: 0, top: 772-50, behavior: 'smooth'});
  }
}
