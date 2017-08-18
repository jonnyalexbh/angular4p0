import { Component } from '@angular/core';

@Component({
  selector: 'fruit',
  templateUrl: './fruit.component.html'
})

export class FruitComponent {
  public name_component = 'Fruit Component';
  public list_fruit = 'Apple, banana, mango and pear';

  public name:string = 'jonnyalexbh';
  public age:number = 26;
  public adult:boolean = true;
  public jobs:Array<string> = ['Carpenter', 'bricklayer', 'plumber'];
  public anyone:any = 99;
}
