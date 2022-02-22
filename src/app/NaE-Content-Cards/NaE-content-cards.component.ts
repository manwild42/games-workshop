import { Component, Input } from "@angular/core";

@Component({
    selector:'gw-NaEContentCards',
    templateUrl: 'NaE-content-cards.component.html'
})
export class NaEContentCardsComponenet{
    
    @Input() img1: string;
    @Input() title1: string;
    @Input() price1: string;
    @Input() img2: string;
    @Input() title2: string;
    @Input() price2: string;
    @Input() img3: string;
    @Input() title3: string;
    @Input() price3: string;

    constructor(){
        this.img1 ="./assets/image_not_found.png"
        this.title1 = "No title yet"
        this.price1 = "$XX.XX"
        this.img2 ="./assets/image_not_found.png"
        this.title2 = "No title yet"
        this.price2 = "$XX.XX"
        this.img3 ="./assets/image_not_found.png"
        this.title3 = "Not title yet"
        this.price3 = "$XX.XX"
    }
}