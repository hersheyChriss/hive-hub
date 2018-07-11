import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  title = 'Hive Hub';

  navToLeaders() {
    this.router.navigate(['/dashboard']);
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
  }

  navToActivities() {
    if (this.router.url === '/dashboard') {
      window.scrollTo({left: 0, top: 772 - 50, behavior: 'smooth'});
    } else {
      this.router.navigate(['/dashboard']);
      setTimeout(function() {
        window.scrollTo({left: 0, top: 772 - 50, behavior: 'smooth'});
      }, 250);
    }
  }

  navToInfo() {
    if (this.router.url === '/dashboard') {
      window.scrollTo({left: 0, top: 772 + 527 - 50, behavior: 'smooth'});
    } else {
      this.router.navigate(['/dashboard']);
      setTimeout(function() {
        window.scrollTo({left: 0, top: 772 + 527 - 50, behavior: 'smooth'});
      }, 250);
    }
  }

  navToLegends() {
    if (this.router.url === '/dashboard') {
      window.scrollTo({left: 0, top: 838 + 772 + 527 - 50, behavior: 'smooth'});
    } else {
      this.router.navigate(['/dashboard']);
      setTimeout(function() {
        window.scrollTo({left: 0, top: 838 + 772 + 527 - 50, behavior: 'smooth'});
      }, 250);
    }
  }
}
