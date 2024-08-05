import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'iroman';
  public age:number = 45;


  get capitalizedName():string{
    return 'Hola Mundo'.toLocaleUpperCase();
  }

  getheroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
  }
  changeAge():void{
    this.age = 25;
  }

  viewButtonChangeName():boolean{
    return true;
  }

  resetForm():void{
    // this.name = 'iroman';
    this.age = 45;
    document.querySelectorAll('h1').forEach(element =>{
      element.innerHTML = 'Desde Angular';
    })

  }

}
