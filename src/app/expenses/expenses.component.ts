import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs'
//import 'rxjs/add/operator/map';



@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  users = USERS;
  public expense: Observable<any[]>;
  constructor(db: AngularFirestore) {
      this.expense = db.collection('/Users/1/Expenses').valueChanges();
      console.log(this.users);
      this.expense.subscribe(res=> console.log(res));
   }
   

  ngOnInit() {
    
  }

}
