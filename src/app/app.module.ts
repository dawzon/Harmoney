import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { InputComponent } from './input/input.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { LoginService } from './login.service';

import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExpensesComponent,
    VisualizationComponent,
    InputComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [
    LoginService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
