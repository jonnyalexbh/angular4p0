import {Injectable} from '@angular/core';

@Injectable()
export class ClothesService{
  public namePledge = 'jeans';

  test(name){
    return name;
  }

}
