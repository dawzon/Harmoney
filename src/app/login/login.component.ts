import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage : string;
  returnURL: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    //set up redirect
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || "/";

    // If the user gets to the login page while already logged in, then log the user out and redirect
    if (this.loginService.getIsLoggedIn()) {
      this.loginService.logout();
      this.router.navigate([this.returnURL]);
    }
  }

  
  onSubmit(username : string, password : string) {

    var isSuccess = this.loginService.login(username, password);
    
    if (isSuccess) {
      // Redirect user back to where they were before login
      this.router.navigate([this.returnURL]);
    }
    else {
      this.errorMessage = "No user with those credentials found!";
    }
  }

}
