import { Component } from '@angular/core';
import { ClothesService } from '../services/clothes.services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [ClothesService]
})

export class HomeComponent{
  public title = 'Homepage';
  public clothing_list:Array<string>;
  public hold_save:string;

  public showDate;
  public name = 'Jonny Alexander';

  constructor(
    private _clothesService: ClothesService)
    {
      this.showDate = new Date(2017, 4, 26);
    }

    ngOnInit(){
      this.clothing_list = this._clothesService.getClothes();
      console.log(this.clothing_list);
    }

    savePledge(){
      this._clothesService.addClothes(this.hold_save);
      this.hold_save = null;
    }

    removeGarment(index:number){
      this._clothesService.removeGarment(index);
    }

  }
