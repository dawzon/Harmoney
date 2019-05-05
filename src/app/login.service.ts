import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { USERS } from './mock-users';

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
    
    for (let user of USERS) {
      if (user.username == username && user.password == password) {
        this.currentUser = user;
        this.isLoggedIn = true;
        break;
      }
    }
    return this.isLoggedIn;
  }

  logout() {
    this.currentUser = undefined;
    this.isLoggedIn = false;
  }
}
