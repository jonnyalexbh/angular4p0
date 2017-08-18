import { Component } from '@angular/core';

@Component({
  selector: 'fruit',
  templateUrl: './fruit.component.html'
})

export class FruitComponent {

  public name_component = 'Fruit Component';
  public list_fruit = 'Apple, banana, mango and pear';

  public name:string;
  public age:number;
  public adult:boolean;
  public jobs:Array<string> = ['Carpenter', 'bricklayer', 'plumber'];
  public anyone:any;

  constructor(){
    this.name = 'jonnyalex.bh';
    this.age = 26;
    this.adult = true;
    this.anyone = 'Yes';
  }

  ngOnInit(){
    console.log(this.anyone);
    console.log(this.jobs);
    this.changeName(this.name);
    this.changeAge(this.age);

    // variables and scope
    var one = 8;
    var two = 15;

    if(one === 8){
      let one = 3;
      var two = 88;
      console.log("inside of the if " + one);
    }
    console.log('outside of ' + one);
  }

  changeName(name) {
    console.log("My name is " + name);
  }

  changeAge(age) {
    console.log("My age is " + age);
  }

}
