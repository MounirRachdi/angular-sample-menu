import { Component } from '@angular/core';

@Component({
    selector: 'ct-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
 
}