import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit() {
  }

}
