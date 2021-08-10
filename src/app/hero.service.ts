import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
// Dette er en service klasse som har det ansvar at holde styr på data og give andre klasser af applikatioo nem adgang 
@Injectable({
  providedIn: 'root' // En provider er noget som kan skabe eller levere data fra service
})
export class HeroService {

  constructor() { }

  // her fortæller vi hvad metoden i klassen skal returnere
  //Den retuerner HEROES af typen Hero som kun er et interfaace der holder på attributerne i HEROES. Derfor er den af typen 
  // observable emitter en værdi. Vores mock heroes data
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

}
