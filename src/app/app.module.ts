import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bottomNavBarComponent } from 'src/app/bottomnavbar/bottomnavbar.component';
import { BuyNowCardsComponent } from 'src/app/buynowcards/buynowcards.component';
import { CenterNavBarComponent } from 'src/app/center-nav-bar/centernavbar.component';
import { MainCardComponent } from 'src/app/main-card/maincard.component';
import { MainSupportCardsComponent } from 'src/app/mainsupportcards/mainsupportcards.component';
import { TopNavBarComponent } from 'src/app/top-nav-bar/topnavbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CenterNavBarComponent,
    bottomNavBarComponent,
    MainCardComponent,
    MainSupportCardsComponent,
    BuyNowCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
