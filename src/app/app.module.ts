import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bottomNavBarComponent } from 'src/app/Navigation/bottomnavbar/bottomnavbar.component';
import { BuyNowCardsComponent } from 'src/app/buynowcards/buynowcards.component';
import { CenterNavBarComponent } from 'src/app/Navigation/center-nav-bar/centernavbar.component';
import { MainCardComponent } from 'src/app/main-card/maincard.component';
import { MainSupportCardsComponent } from 'src/app/mainsupportcards/mainsupportcards.component';
import { TopNavBarComponent } from 'src/app/Navigation/top-nav-bar/topnavbar.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Warhammer40000Componenet } from './Layouts/Warhammer-40000.component';
import { HomeLayoutComponent } from './Layouts/home-layout.component';
import { NewAndExclusiveComponenet } from './Layouts/New-and-Exclusive.component';
import { AOSComponenet } from './Layouts/AOS.component';
import { MiddleEarthComponenet } from './Layouts/Middle-Earth.component';
import { NaEAccordionComponenet } from './NaE-accordion/NaE-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CenterNavBarComponent,
    bottomNavBarComponent,
    MainCardComponent,
    MainSupportCardsComponent,
    BuyNowCardsComponent,
    Warhammer40000Componenet,
    HomeLayoutComponent,
    NewAndExclusiveComponenet,
    AOSComponenet,
    MiddleEarthComponenet,
    NaEAccordionComponenet
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
