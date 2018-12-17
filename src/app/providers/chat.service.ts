import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

import { Observable } from 'rxjs';
import { URL_SERVICES } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class ChatServices {

    private url = URL_SERVICES;
    private socket;

    constructor(private http:HttpClient) {
        this.socket = io(this.url)
     }

    sendMessage(message) {
        this.socket.emit('mensaje', message)
    }

    getMessages() {
        return Observable.create((observer) => {
            this.socket.on('mensaje', (mensaje) => {

                observer.next(mensaje);
            });
        });
    } 
    
    getFile(url: string) {
        return this.http.get(url, { observe: 'response', responseType: 'blob' })
            .pipe(map((res) => {
                return new Blob([res.body], { type: res.headers.get('Content-Type') });
            }))
    }
}
