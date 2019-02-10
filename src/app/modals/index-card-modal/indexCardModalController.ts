import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: "root"
})
export class IndexCardModalController {

    public hidden: string = 'hidden'
    public role:string
    public notification = new EventEmitter<any>()

    constructor() { }

    hideModal() {
        this.role=''
        this.hidden = "hidden";
    }

    showModal(type:string) {
        this.role = type || ''
        this.hidden = ''
    }
}