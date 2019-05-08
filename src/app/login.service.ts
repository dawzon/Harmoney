import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore'
import { USERS } from './mock-users';

import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser = undefined;
  isLoggedIn: boolean = false;
  
  constructor(private afs: AngularFirestore) {
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getUser() {
    if (this.isLoggedIn) {
      return this.currentUser.name;
    }
  }

  getUsers(username: string, password: string): Observable<DocumentChangeAction<User>[]> {
    var users: AngularFirestoreCollection<User> =
      this.afs.collection('Users', ref => ref.where('username', '==', username).where('password', '==', password));
    return users.snapshotChanges();
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
