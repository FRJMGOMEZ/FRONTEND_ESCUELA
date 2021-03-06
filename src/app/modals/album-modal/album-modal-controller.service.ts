import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AlbumModalController {
    public hidden: string = "hidden";
    public id: string
    public notification = new EventEmitter<any>();
k

    constructor() { }

    hideModal() {
        this.hidden = "hidden";
        this.id = ''
    }

    showModal(id?: string) {
        this.hidden = "";
        this.id = id
    }
}
