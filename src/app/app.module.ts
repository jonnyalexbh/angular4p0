import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CarsComponent } from './cars/cars.component';

import { ConverterPipe } from './pipes/converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent,
    HomeComponent,
    ContactComponent,
    CarsComponent,
    ConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
