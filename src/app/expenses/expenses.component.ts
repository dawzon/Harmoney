import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import { DataService } from '../data.service';
import { Expenses } from '../models/user';
//import 'rxjs/add/operator/map';



@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenses: Expenses[];
  users = USERS;
  //public expense: Observable<any[]>;
  constructor(private dataService: DataService) {
      
   }
   

  ngOnInit() {
    this.dataService.getExpenses().subscribe(expense => {
      console.log(expense);
      this.expenses = expense;
      console.log(this.expenses);
    })
  }

}
