import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser = undefined;
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
    this.currentUser = { username: "DannyCool", password: "12345", name: "Daniel" };
    this.isLoggedIn = true;
  }

  logout() {
    this.currentUser = undefined;
    this.isLoggedIn = false;
  }
}
