import { Component, Input, OnInit } from "@angular/core";
import { BuynowcardItemModel } from "./buynowcard-item.model";
import { BuyNowCardService } from "./buynowcard.service";

@Component({
    selector: 'gw-buynowcards',
    templateUrl: 'buynowcards.component.html',
    styleUrls: ['buynowcards.component.css']
})
export class BuyNowCardsComponent implements OnInit{

    buynowcards : BuynowcardItemModel[] = []

    constructor(private buyNowCardService:BuyNowCardService){
       
    }
    ngOnInit(): void {
        this.buyNowCardService.getBuyNowCard().subscribe(data => {
            console.log("Fetching Buy Now Card data");
            for (var buyNowcard of data){
                console.log(buyNowcard);
                this.buynowcards.push(buyNowcard)
            }
        })
    }
}