import { HeroService } from './components/tour-of-heroes/service/hero.service';
import { AppRoutingModule } from './components/tour-of-heroes/routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/tour-of-heroes/hero-detail/hero-detail.component';
import { HeroesListComponent } from './components/tour-of-heroes/heroes-list/heroes-list.component';
import { HeroDashboardComponent } from './components/tour-of-heroes/hero-dashboard/hero-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HeroDashboardComponent },
  { path: 'heroes', component: HeroesListComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent,
    HeroDashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
