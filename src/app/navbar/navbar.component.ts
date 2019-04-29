import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ LoginService ]
})
export class NavbarComponent implements OnInit {
  loginStatus: boolean;
  
  constructor(
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.loginStatus = this.loginService.getIsLoggedIn();
  }

  logout() {
    this.loginService.logout();
  }
}
