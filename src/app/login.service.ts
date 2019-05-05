import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser = { username: "DannyCool", password: "12345", name: "Daniel" };
  isLoggedIn: boolean = false;
  
  constructor() {
   }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getUser() {
    if (this.isLoggedIn) {
      return this.currentUser.name;
    }
  }

  login(username : string, password : string) {
    //TODO: compare login credentials against database to determine eligibility
    console.log("Successfully logged in.");
    this.isLoggedIn = true;
    console.log("isLoggedIn: " + this.isLoggedIn);
  }

  logout() {
    console.log("Successfully logged out.");
    this.isLoggedIn = false;
  }
}
