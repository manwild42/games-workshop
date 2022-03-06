import { Component, Input, OnInit } from "@angular/core";
import { BuynowcardItemModel } from "./buynowcard-item.model";
import { BuyNowCardService } from "./buynowcard.service";

@Component({
    selector: 'gw-buynowcards',
    templateUrl: 'buynowcards.component.html',
    styleUrls: ['buynowcards.component.css']
})
export class BuyNowCardsComponent {

    @Input() img1: string;
    @Input() img2: string;
    @Input() img3: string;
    @Input() title1: string;
    @Input() title2: string;
    @Input() title3: string;

    constructor(){
       this.img1="";
       this.img2="";
       this.img3="";
       this.title1="missing";
       this.title2="missing";
       this.title3="missing";
    }
   
}