import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Import components

import { EmployeeComponent } from './employee/employee.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'employee', component: EmployeeComponent },
  {path: 'fruit', component: FruitComponent },
  {path: 'home', component: HomeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'contact/:page', component: ContactComponent },
  {path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
