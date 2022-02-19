import { Component } from "@angular/core";
import { mockcontentcardslist } from "src/NaE-Content-Cards/mock-contentcards-list";
import { NaEContentCardItemModel } from "src/NaE-Content-Cards/NaE-content-cards-item.model";

@Component({
    selector:'gw-NewAndExclusive',
    templateUrl: 'New-and-Exclusive.component.html'
})
export class NewAndExclusiveComponenet{
    contentcards: NaEContentCardItemModel[] = []
    
    constructor(){
        for (var contentcards of mockcontentcardslist){
          console.log(contentcards);
          this.contentcards.push(contentcards);
        }
      }
}