import { Component, Input } from "@angular/core";

@Component({
    selector: 'gw-buynowcards',
    templateUrl: 'buynowcards.component.html',
    styleUrls: ['buynowcards.component.css']
})
export class BuyNowCardsComponent{

    @Input() img1: string;
    @Input() title1: string;
    @Input() img2: string;
    @Input() title2: string;
    @Input() img3: string;
    @Input() title3: string;

    constructor(){
        this.img1 ="./assets/image_not_found.png"
        this.title1 = "No title yet"
        this.img2 ="./assets/image_not_found.png"
        this.title2 = "No title yet"
        this.img3 ="./assets/image_not_found.png"
        this.title3 = "Not title yet"
    }
}