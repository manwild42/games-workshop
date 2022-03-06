import { Component } from "@angular/core";
import { BuynowcardItemModel } from "../buynowcards/buynowcard-item.model";
import { BuyNowCardService } from "../buynowcards/buynowcard.service";

@Component({
    selector: 'gw-home-layout',
    templateUrl: 'home-layout.component.html'
})
export class HomeLayoutComponent{
    buynowcards: BuynowcardItemModel[] = [];


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