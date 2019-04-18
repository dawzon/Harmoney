import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesComponent } from './expenses/expenses.component'
import { VisualizationComponent } from './visualization/visualization.component';

const routes: Routes = [
  { path: 'expenses', component: ExpensesComponent},
  { path: 'visualization', component: VisualizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
