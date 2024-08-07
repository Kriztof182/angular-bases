import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {



  public charaters: Character[] = [
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id:uuid(),
      name:'Goku',
      power:9500
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:7500
    }
  ];

  public addCharacter(character:Character):void{
    console.log(character);
    this.charaters.push(character);
  }

  // public onDeleteCharacter(index:number):void{
  //   this.charaters.splice(index,1)
  // }
  public onDeleteCharacterById(id:string):void{
    this.charaters = this.charaters.filter(character => character.id !== id);
  }

  constructor() { }
}
