import { Component } from "@angular/core";
import { Car } from './car';

@Component({
  selector : 'cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent{

  public car: Car;

  constructor(){
    this.car = new Car("", "", "");
  }

  onSubmit(){
    console.log(this.car);
  }

}
