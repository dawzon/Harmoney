import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Expenses } from '../models/user';



@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  expenses: Expenses[];

  public barChartOptions={
    scaleShowVerticleLines: false,
    responsive: true
  };
  grocSum: number = 0;
  utilSum: number = 0;
  enteSum: number = 0;
  rentSum: number = 0;
  clotSum: number = 0;
  healSum: number = 0;

  //get sums
  
  //chart
  public barChartLabels = ['Groceries', 'Utilities', 'Entertainment', 'Rent', 'Clothing', 'Health'];
  public barChartType = 'bar';
  public barChartLegent = true;
  public barChartData = [];
    

  constructor(private dataService: DataService) { }
  //get data
  ngOnInit() {
    this.dataService.getExpenses().subscribe(expense => {
      console.log(expense);
      this.expenses = expense;

       //get sums
    for (var i = 0; i < this.expenses.length; i++){
      if (this.expenses[i].category == 'Groceries'){
        this.grocSum += this.expenses[i].amount;
      }
      else if (this.expenses[i].category == 'Utilities'){
        this.utilSum += this.expenses[i].amount;
      }
      else if (this.expenses[i].category == 'Entertainment'){
        this.enteSum += this.expenses[i].amount;
      }
      else if (this.expenses[i].category == 'Rent'){
        this.rentSum += this.expenses[i].amount;
      }
      else if (this.expenses[i].category == 'Clothing'){
        this.clotSum += this.expenses[i].amount;
      }
      else if (this.expenses[i].category == 'Health'){
        this.healSum += this.expenses[i].amount;
      }
    }

    this.barChartData = [
      {data: [this.grocSum, this.utilSum, this.enteSum, this.rentSum, this.clotSum, this.healSum], label: 'All time Expenses'},
      
    ]

      
    })

     

    


    
  }

}
