import { Component, ɵɵsetComponentScope } from "@angular/core";
import { BuynowcardItemModel } from "./buynowcards/buynowcard-item.model";
import { BuyNowCardService } from "./buynowcards/buynowcard.service";

@Component({
    selector: 'gw-addProduct',
    templateUrl: 'add-product.component.html'
})
export class AddProductComponent{

    constructor( public bn: BuyNowCardService){

    }

    addProduct(product : BuynowcardItemModel){
        console.log("You clicked add product");
        console.log(product);
        this.bn.addProduct(product);
    }
}