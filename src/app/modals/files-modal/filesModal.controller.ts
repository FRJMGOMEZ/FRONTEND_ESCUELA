import { Injectable, EventEmitter } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class FilesModalController {
    public hidden: string = "hidden";
    public type:string
    public notification = new EventEmitter<any>();

    constructor() { }

    hideModal() {
        this.hidden = "hidden";
        this.type = ''
    }

    showModal(type: string) {
        this.hidden = "";
        this.type = type;
    }

}