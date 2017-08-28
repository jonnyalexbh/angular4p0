import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Import components

import { EmployeeComponent } from './employee/employee.component';
import { FruitComponent } from './fruit/fruit.component';

const appRoutes: Routes = [
  {path: '', component: EmployeeComponent },
  {path: 'employee', component: EmployeeComponent },
  {path: 'fruit', component: FruitComponent },
  {path: '**', component: EmployeeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
