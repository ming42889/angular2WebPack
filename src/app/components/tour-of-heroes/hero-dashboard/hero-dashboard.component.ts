import { Component, OnInit } from '@angular/core';

import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
    selector: 'hero-dashboard',
    templateUrl: 'hero-dashboard.component.html',
    styleUrls: ['hero-dashboard.component.scss']
})
export class HeroDashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
