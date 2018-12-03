import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

import { Observable } from 'rxjs';
import { URL_SERVICES } from '../config/config';



@Injectable({
    providedIn: 'root'
})
export class ChatServices {

    private url = URL_SERVICES;
    private socket;

    constructor() { }

    sendMessage(message) {
        this.socket.emit('mensaje', message);
    }

    getMessages() {
        let observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('mensaje', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        })
        return observable;
    }  
}
