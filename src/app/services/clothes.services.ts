import {Injectable} from '@angular/core';

@Injectable()
export class ClothesService{
  public namePledge = 'jeans';
  public clothingCollection = ['White pants', 'Red shirt'];

  test(name){
    return name;
  }

  addClothes(name_pledge:string):Array<string>{
    this.clothingCollection.push(name_pledge);
    return this.getClothes();
  }

  removeGarment(index:number){
    this.clothingCollection.splice(index, 1);
    return this.getClothes();
  }

  getClothes():Array<string>{
    return this.clothingCollection;
  }

}
