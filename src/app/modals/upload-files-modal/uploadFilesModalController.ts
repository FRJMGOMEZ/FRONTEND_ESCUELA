import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class UploadFilesModalController {
    
    public id: string;
    public hidden: string = "hidden";
    public notification = new EventEmitter<any>();

    constructor() { }

    hideModal() {
        this.hidden = "hidden";
        this.id = '';
    }
    showModal(id) {
        this.hidden = "";
        this.id = id;
    }
}
