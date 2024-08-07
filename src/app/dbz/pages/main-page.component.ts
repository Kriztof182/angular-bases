import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class DbzMainPageComponent  {

  constructor(
   private dbzService: DbzService
  ){}


  characters(): Character[] {
    return [...this.dbzService.charaters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }

}
