import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'employee-tag',
  templateUrl: './employee.component.html'
})

export class EmployeeComponent {
  public title = 'component employee:';
  public employee:Employee;
  public workers:Array<Employee>;

  constructor(){
    this.employee = new Employee('Jonny Alexander', 26, 'Ing. sistemas', true);
    this.workers = [
      new Employee('Jonny Alexander', 26, 'Ing. sistemas', true),
      new Employee('Juan David Lopez', 30, 'Ing. sistemas', false),
      new Employee('Daniela Lopez', 56, 'Ing. industrial', true)
    ];
  }

  ngOnInit(){
    console.log(this.employee);
    console.log(this.workers);
  }
}
