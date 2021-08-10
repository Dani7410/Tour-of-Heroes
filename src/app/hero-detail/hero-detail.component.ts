import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // for at vi kan binde andre components som bruges i templaten skal vi bruge input, og injecte den. 
  // dette fungere også som et parent/child relationsship. Det betyder at parent: HeroesComponents vil sende en ny hero til at display
  // Vi har helt basalt bare  rykke details sektionen til en ny template, og injectet den med hvad der skal vises fra parent component
  @Input() hero?: Hero

  constructor() { }

  ngOnInit(): void {
  }

}
