import { Router } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
    selector: 'heroes-list',
    templateUrl: 'heroes-list.component.html',
    styleUrls: ['heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService) { }

   getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}



