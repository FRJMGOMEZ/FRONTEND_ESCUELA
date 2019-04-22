import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class RecoveringModalController {
    public hidden: string = "hidden";
    public notification = new EventEmitter<any>();
    public type:string
    public userEmail:string

    constructor() { }

    hideModal() {
        this.hidden = "hidden";
        this.type = '';
        this.userEmail='';
    }

    showModal(type?:string) {
        this.hidden = "";
        this.type=type;
    } 
}
