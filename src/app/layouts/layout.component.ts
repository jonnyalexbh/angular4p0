import { Component } from "@angular/core";

@Component({
  selector : 'layout',
  templateUrl: './layout.component.html'
})

export class LayoutComponent{

  public title;
  public administrator;

  constructor(){
    this.title = 'Templates ngTemplate in angular';
    this.administrator = true;
  }

  change(value){
    this.administrator = value;
  }

}
