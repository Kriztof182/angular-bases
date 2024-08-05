import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'She Hulh',
    'Thor'
  ];

  public deleteHero? : string;
  public showButtonDelete:boolean = true;

  removeLastHero():void{
    this.deleteHero =  this.heroNames.pop()?.toString();

  }

}
