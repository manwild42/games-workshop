import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Component({
    selector: "gw-user-info",
    templateUrl: './user-info.component.html',
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;

    constructor(private http: HttpClient){ }

    ngOnInit(): void {
        console.log("Sending request to server");
        this.showUserInfo();
    }
    
    getUserInfo(){
       return this.http.get<UserInfo>('https://games-workshop-369ee-default-rtdb.firebaseio.com/My-info.json')
    }

    showUserInfo(){
        this.getUserInfo().subscribe((data: UserInfo)=>{
            console.log(data);
            this.myInfo = data;
        })
    }
}