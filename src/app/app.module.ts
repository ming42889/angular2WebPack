import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/tour-of-heroes/hero-detail.component';
import { TourOfHeroesComponent } from './components/tour-of-heroes/tour-of-heroes.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule
  ],
  declarations: [
    AppComponent,
    TourOfHeroesComponent,
    HeroDetailComponent 
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }
