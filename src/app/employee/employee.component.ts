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
  public employee_external:boolean;
  public color:string;
  public selected_color:string;

  constructor(){

    this.employee = new Employee('Jonny Alexander', 26, 'Ing. sistemas', true);
    this.workers = [
      new Employee('Yesenia Ortiz', 34, 'Alimentos', false),
      new Employee('Juan David Lopez', 30, 'Ing. sistemas', false),
      new Employee('Daniela Lopez', 56, 'Ing. industrial', true)
    ];

    this.employee_external = true;
    this.color = 'green';
    this.selected_color =  '#CCC';

  }

  ngOnInit(){
    console.log(this.employee);
    console.log(this.workers);
  }

  changeExternal(paramt){
    this.employee_external = paramt;
  }

  logSelectedColor(){
    console.log(this.selected_color);
  }

}
