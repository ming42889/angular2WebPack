import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroDashboardComponent } from '../hero-dashboard/hero-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HeroDashboardComponent },
  { path: 'heroes', component: HeroesListComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
}
)

export class AppRoutingModule {

}
