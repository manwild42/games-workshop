import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BuynowcardItemModel } from "./buynowcard-item.model";

@Injectable({
    providedIn:'root'
})
export class BuyNowCardService{
    private baseUrl: string = "https://games-workshop-369ee-default-rtdb.firebaseio.com/";
    private buyNowCardEndpoint : string = "buyNowCard.json";

    constructor(private http:HttpClient){

    }
    
    public getBuyNowCard(){
        return this.http.get<BuynowcardItemModel []>(this.baseUrl + this.buyNowCardEndpoint);
    }

    public getBuyNowCards(index:number){
        return this.http.get<BuynowcardItemModel>(this.baseUrl + 'buyNowCard/' + index + '.json')
    }
}