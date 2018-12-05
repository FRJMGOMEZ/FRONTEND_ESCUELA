import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: "root"
})
export class SubjectModalController {

    public hidden: string = 'hidden';
    public id:string;
    public type:string
    public notification = new EventEmitter<any>()

    constructor() { }

    hideModal() {
        this.hidden = "hidden";
        this.id='';
        this.type=''
    }

   showModal(type:string,id?:string) {
        this.hidden = "";
        this.id = id;
        this.type = type
    }
}
