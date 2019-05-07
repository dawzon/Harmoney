import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Users } from './models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataCollection: AngularFirestoreCollection<Users>;
  expense: Observable<any[]>;

  constructor(public afs: AngularFirestore) {
    this.expense = this.afs.collection('/Users/1/Expenses').valueChanges();
    console.log(this.expense);

  }

  getExpenses(){
    return this.expense;
  }
}


