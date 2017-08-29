import { Component } from "@angular/core";
import { Car } from './car';
import { RequestService } from '../services/request.service';

@Component({
  selector : 'cars',
  templateUrl: './cars.component.html',
  providers: [RequestService]
})

export class CarsComponent{

  public car: Car;
  public cars:Array<Car>;
  public articles;

  constructor(private _requestService: RequestService){
    this.car = new Car("", "", "");
    this.cars = [
      new Car("Sail LTZ", "120", "black"),
      new Car("Renault Clio", "110", "blue")
    ];
  }

  ngOnInit(){
    this._requestService.getArticles().subscribe(
      result => {
        this.articles = result;
        if(!this.articles){
          console.log("Server error");
        }
      },
      error => {
        var errorMessague = <any>error;
        console.log(errorMessague);
      }
    )
  }

  onSubmit(){
    this.cars.push(this.car);
    this.car = new Car("", "", "");
  }

  clear(){

  }

}
