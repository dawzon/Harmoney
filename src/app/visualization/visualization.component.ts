import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  public barChartOptions={
    scaleShowVerticleLines: false,
    responsive: true
  };

  public barChartLabels = ['Groceries', 'Utilities', 'Entertainment', 'Rent', 'Clothing', 'Health'];
  public barChartType = 'bar';
  public barChartLegent = true;
  public barChartData = [
    {data: [65, 59, 30, 350, 55, 40], label: 'All time Expenses'},
    
  ]

  constructor() { }

  ngOnInit() {
    
  }

}
