import { Component } from "@angular/core";
import { BuynowcardItemModel } from "./buynowcards/buynowcard-item.model";

@Component({
    selector: 'gw-home-layout',
    templateUrl: 'home-layout.component.html'
})
export class HomeLayoutComponent{
    buynowcards: BuynowcardItemModel[] = [];
}