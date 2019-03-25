import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { Subject } from 'rxjs';
import { URL_SERVICES } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageOrder, Message } from '../models/message.model';
import { UserServices } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChatServices {

    messagesSource = new Subject<MessageOrder>();
    messages$ = this.messagesSource.asObservable();
    messagesCount: number = 0
    headers: HttpHeaders

    constructor(private http:HttpClient,
                private _userServices: UserServices,
                private socket:Socket) {
        this.headers = new HttpHeaders().set('token', this._userServices.token)
     }

    getMessages(projectId: string, from: number, limit: number = 0) {
        let url = `${URL_SERVICES}/messages/${projectId}?from=${from}&limit=${limit}`;
        return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
            res.messages.reverse()
            res.messages.forEach((message) => {
                this.messagesCount++
                let messageOrder = new MessageOrder(message, 'get')
                this.messagesSource.next(messageOrder)
            })
        }))
    }

    getLastMessages() {
       let url = `${URL_SERVICES}/lastMessages`
       return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
           return res.messages
       }))
    }

    postMessage(message: Message) {
        let url = `${URL_SERVICES}/message`
        return this.http.post(url, message, { headers: this.headers }).pipe(map((res: any) => {
            let messageOrder = new MessageOrder(res.message,'push')
            //this.messagesSource.next(messageOrder)
            this.sendMessage(messageOrder)
        }))
    }

    deleteMessage(messageId: string) {
        let url = `${URL_SERVICES}/message/${messageId}`
        return this.http.delete(url, { headers: this.headers }).pipe(map((res: any) => {
            let messageOrder = new MessageOrder(res.message, 'delete')
            this.messagesSource.next(messageOrder)
        }))
    }

    sendMessage(messageOrder:MessageOrder) {
        this.socket.emit('message', messageOrder)
    }

     messagesSocket() {
        return this.socket.fromEvent('message').pipe(map((messageOrder:MessageOrder)=>{
            this.messagesSource.next(messageOrder)
        }))  
    } 
}
