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
        if(result.length == 0) {
          //login fail, no matches
          this.errorMessage = "No user with those credentials found!";
        } else if (result.length > 1) {
          //This should never happen
          this.errorMessage = `Multiple users (${result.length}) returned!  Something isn't right.`;
        } else {
          //login success
          this.loginService.isLoggedIn = true;
          this.loginService.currentUser = result[0];
          this.router.navigate([this.returnURL]);
        }
      });
    }
  }

}
