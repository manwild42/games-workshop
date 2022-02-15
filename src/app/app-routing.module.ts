import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Warhammer40000Componenet } from './Layouts/Warhammer-40000.component';
import { HomeLayoutComponent } from './Layouts/home-layout.component';
import { NewAndExclusiveComponenet } from './Layouts/New-and-Exclusive.component';
import { AOSComponenet } from './Layouts/AOS.component';
import { MiddleEarthComponenet } from './Layouts/Middle-Earth.component';

const routes: Routes = [
  {path:'', component:HomeLayoutComponent},
  {path: 'Warhammer-40000', component: Warhammer40000Componenet},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'New-and-Exclusive', component: NewAndExclusiveComponenet},
  {path: 'AOS', component: AOSComponenet},
  {path: 'Middle-Earth', component: MiddleEarthComponenet}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
