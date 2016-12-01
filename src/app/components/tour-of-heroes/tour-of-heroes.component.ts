import { Component, OnInit  } from '@angular/core';
import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
    selector: 'tour-of-heroes',
    templateUrl: 'tour-of-heroes.component.html',
    styleUrls: ['tour-of-heroes.component.scss'],
    providers: [HeroService]
})
export class TourOfHeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

   getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }
}



