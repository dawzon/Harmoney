import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  onSubmit(username : string, password : string, re_password : string) {

    if (password != re_password) {
      this.errorMessage = "passwords do not match.";
    }
    else {
      this.loginService.getUsers(username, password).subscribe((result: User[]) => {
        if(result.length >= 1) {
          //This shouldn't happen
          this.errorMessage = "User with this username already exists.";
        } else {
          //proceed to register
          this.loginService.registerAccount(username, password);
          this.loginService.login(username, password);
          this.router.navigate([this.returnURL]);
        }
      });
    }
  }

}
