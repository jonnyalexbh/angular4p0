import { Component } from '@angular/core';
import { ClothesService } from '../services/clothes.services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [ClothesService]
})

export class HomeComponent{
  public title = 'Homepage';

  constructor(
    private _clothesService: ClothesService)
    {}

    ngOnInit(){
      this._clothesService.test('Jean');
      console.log(this._clothesService.test('jean Colombia'));
    }

  }
