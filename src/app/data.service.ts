import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Users } from './models/user';
import { Observable } from 'rxjs';
import { Expenses } from './models/user';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataCollection: AngularFirestoreCollection<Expenses>;
  expense: Observable<any[]>;

  constructor(public afs: AngularFirestore, private login: LoginService) {

    this.getExpenses();
  }

  getExpenses() {

    this.dataCollection = this.afs.collection(`Users/${this.login.currentUser.id}/Expenses`);
    this.expense = this.afs.collection(`/Users/${this.login.currentUser.id}/Expenses`).valueChanges();
    console.log(this.expense);

    return this.expense;
  }

  addExpense(exp: Expenses){
    this.dataCollection.add(exp);
  }
}


