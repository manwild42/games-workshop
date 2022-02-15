import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Warhammer40000Componenet } from './Warhammer-40000.component';
import { HomeLayoutComponent } from './home-layout.component';

const routes: Routes = [
  {path:'', component:HomeLayoutComponent},
  {path: 'Warhammer-40000', component: Warhammer40000Componenet},
  {path: 'home', component: HomeLayoutComponent}
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
