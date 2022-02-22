import { Component } from "@angular/core";
import { mockcontentcardslist } from "src/app/NaE-Content-Cards/mock-contentcards-list";
import { NaEContentCardItemModel } from "src/app/NaE-Content-Cards/NaE-content-cards-item.model";

@Component({
    selector:'gw-NewAndExclusive',
    templateUrl: 'New-and-Exclusive.component.html'
})
export class NewAndExclusiveComponenet{
    contentcards: NaEContentCardItemModel[] = [];
    
    constructor(){
        for (var contentcard of mockcontentcardslist){
          console.log(contentcard);
          this.contentcards.push(contentcard);
        }
      }
}