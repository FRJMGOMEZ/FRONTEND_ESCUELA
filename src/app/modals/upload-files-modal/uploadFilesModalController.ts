import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class UploadFilesModalController {
    
    public id: string;
    public type:string;
    public hidden: string = "hidden";
    public notification = new EventEmitter<any>();

    constructor() { }

    hideModal() {
        this.hidden = "hidden";
        this.id = '';
        this.type=''
    }
    showModal(id:string,type:string) {
        this.hidden = "";
        this.id = id;
        this.type= type
    }
}
