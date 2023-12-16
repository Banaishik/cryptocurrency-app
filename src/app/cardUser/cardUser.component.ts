import { Component, Input } from "@angular/core";
import { IUsers } from "../models/IUsers";


@Component({
    selector : "card-user",
    templateUrl : "./cardUser.component.html",
    styleUrl : "./cardUser.component.css"
})

export class CardUserComponent  {

    @Input()
    user!: IUsers;


}