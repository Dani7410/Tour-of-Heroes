import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // herunder giver vi dette component et propterty som hedder heroes og fortæller at den er HEROES fra mock ts filen 
  // heroes = HEROES;
  heroes: Hero[] = [];

  selectedHero?: Hero;

  //her defineres en private property herService og definere den som et objekt af HeroService 
  constructor(private heroService: HeroService) { }

  //Fordi vi behøver at kalde dataen i det applikationen starter skal vi bruges ngOnInit til at initialisere denne process
  // Dette virker også kun med mock data, da dataen hentes i runtime. hvor med en server vil der være et delay, og derfor ikke muligt at henete daten med det samme 
  ngOnInit() {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // her benytter vi subscribe i forlængelse af Observable. Obserable hjælper med at tilgå data aynkront for at et delay ikke ødelægger processen for at få data hentet
  //Fordi Observable har en metode subscribe() som kan passe den sendte/emittet data til et callback, så vi først kan tilgå datene når den er hentet
  // Dette er måden for at interegere med en server 
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}