import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})

export class ContactComponent{
  public title = 'Web contact page';
  public parameter;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){
    this._route.params.forEach((params : Params) => {
      this.parameter = params['page'];
      console.log(params);
    });
  }

}
