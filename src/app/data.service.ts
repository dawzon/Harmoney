import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Users } from './models/user';
import { Observable } from 'rxjs';
import { Expenses } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataCollection: AngularFirestoreCollection<Expenses>;
  expense: Observable<any[]>;

  constructor(public afs: AngularFirestore) {

    this.dataCollection = this.afs.collection('Users/1/Expenses');

    this.expense = this.afs.collection('/Users/1/Expenses').valueChanges();
    console.log(this.expense);

  }

  getExpenses(){
    return this.expense;
  }

  addExpense(exp: Expenses){
    this.dataCollection.add(exp);
  }
}


