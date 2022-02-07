import { Component } from '@angular/core';
import { BuynowcardItemModel } from './buynowcards/buynowcard-item.model';
import { mock_buynow_list } from './buynowcards/mock_buynow_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'games-workshop';
  buynowcards: BuynowcardItemModel[] = [];

  constructor(){
    for (var buynowcard of mock_buynow_list){
      console.log(buynowcard);
      this.buynowcards.push(buynowcard);
    }
  }
}
