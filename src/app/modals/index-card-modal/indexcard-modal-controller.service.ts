import { Injectable, EventEmitter } from '@angular/core';



@Injectable({
    providedIn: "root"
})
export class IndexcardModalController {

    public hidden: string = 'hidden'
    public id:string
    public notification = new EventEmitter<any>()

    constructor() { }

    hideModal() {
        this.id = ''
        this.hidden = "hidden";
    }

    showModal(id?:string) {
        this.id = id
        this.hidden = ''
    }
   
    
}