import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { DocumentChangeAction } from 'angularfire2/firestore';

import { User } from '../User';

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

    //this.loginService.getUsers(username, password).subscribe(
    //  result => console.log('doc id: ' + result[0].payload.doc.id));
    
    this.loginService.getUsers(username, password).subscribe((result: DocumentChangeAction<User>[]) => {
      if(result.length == 0) {
        //login fail, no matches
        this.errorMessage = "No user with those credentials found!";
      } else if (result.length > 1) {
        //This should never happen
        this.errorMessage = `Multiple users (${result.length}) returned!  Something isn't right.`;
      } else {
        //login success
        this.loginService.isLoggedIn = true;
        this.loginService.currentUser = result[0].payload.doc.data();
        this.loginService.currentUser.id = result[0].payload.doc.id;
        this.router.navigate([this.returnURL]);
      }
    });
  }

  goToRegister() {
    this.router.navigateByUrl('register');
  }
}
