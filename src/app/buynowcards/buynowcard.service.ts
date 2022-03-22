import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BuynowcardItemModel } from "./buynowcard-item.model";


@Injectable({
    providedIn:'root'
})
export class BuyNowCardService{
    constructor(private db: AngularFireDatabase){

    }
    
    public getBuyNowCard(){
        return this.db.list<BuynowcardItemModel>("buyNowCard").valueChanges( );
    }

    public getBuyNowCards(index:number){
    }

    addProduct(product : BuynowcardItemModel){
        this.db.list<BuynowcardItemModel>("buyNowCard").push(product);
    }
}