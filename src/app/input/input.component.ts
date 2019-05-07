import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';
import { Users } from '../Users';
//import { Users } from '../Users';
import { Expenses } from '../models/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  date: string;
  amount: number;
  description: string;
  category: string;
  arr: Expenses[] = [];

  data: Expenses = {
    date: "",
    description: '',
    amount: 0,
    category: ''

  }

  constructor(private dataService : DataService) { 
    console.log(this.date);
    
  }

  ngOnInit() {
  }

  addExpense() {
    //console.log(this.date.toString());
    
    this.dataService.addExpense(this.data);
  }

}
