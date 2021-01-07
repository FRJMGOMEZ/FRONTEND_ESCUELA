import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class IncomeModalController {
    public hidden: string = "hidden";
    public notification = new EventEmitter<any>();
    public id:string;

    constructor() { }

    hideModal() {
        this.hidden = "hidden";
        this.id = undefined;
    }

    showModal(id?:string) {
        this.hidden = "";
        this.id = id;
    }
}