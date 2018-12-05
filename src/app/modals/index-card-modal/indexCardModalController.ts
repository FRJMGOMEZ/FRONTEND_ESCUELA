import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: "root"
})
export class IndexCardModalController {

    public hidden: string = 'hidden'
    public type:string
    public notification = new EventEmitter<any>()

    constructor() { }

    hideModal() {
        this.type=''
        this.hidden = "hidden";
    }

    showModal(type:string) {
        this.type = type || ''
        this.hidden = ''
    }
}