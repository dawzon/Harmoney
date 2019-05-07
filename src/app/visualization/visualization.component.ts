import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Expenses } from '../models/user';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';



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

  
  
  //chart
  
  
  BarChart = [];
    

  constructor(private dataService: DataService) { }
  //get data
  ngOnInit() {
    this.dataService.getExpenses().subscribe(expense => {
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

    //test
    this.BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels: ["Groceries", "Utilities", "Entertainment", "Rent", "Clothing", "Health"],
     datasets: [{
         label: 'All time Expenses',
         data: [this.grocSum,this.utilSum , this.enteSum, this.rentSum, this.clotSum, this.healSum],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Bar Chart",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });

   

      
    })

     

    


    
  }

}
