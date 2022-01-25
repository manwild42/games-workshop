import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bottomNavBarComponent } from 'src/bottomnavbar/bottomnavbar.component';
import { CenterNavBarComponent } from 'src/center-nav-bar/centernavbar.component';
import { TopNavBarComponent } from 'src/top-nav-bar/topnavbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    CenterNavBarComponent,
    bottomNavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
