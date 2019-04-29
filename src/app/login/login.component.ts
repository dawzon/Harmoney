import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  output : string;
  returnURL: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    //set up redirect
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || "/";

    if (this.loginService.getIsLoggedIn()) {
      this.router.navigate([this.returnURL]);
    }
  }

  
  onSubmit(username : string, password : string) {

    this.loginService.login(username, password);
    
    // Redirect user back to where they were before login
    this.router.navigate([this.returnURL]);
  }

}
