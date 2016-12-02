import { filter } from 'rxjs/operator/filter';
import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
   return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
            //  if (filter!=null && filter[0]!=null){
            //     return filterList[0];
            //  }
  } 
}
