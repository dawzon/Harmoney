import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  output : string;
  returnURL: string;
  subscription: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //set up redirect
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || "/";
  }

  onSubmit(username : string, password : string) {

    //TODO: Connect to loginService
    //this.subscription = this.loginService.getLogin(username, password).subscribe(hero => this.hero = hero);
    
    // Redirect user back to where they were before login
    this.router.navigate([this.returnURL]);
  }

}
