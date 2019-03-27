import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { Subject } from 'rxjs';
import { URL_SERVICES } from '../config/config';
import { HttpClient} from '@angular/common/http';
import { MessageOrder, Message } from '../models/message.model';
import { UserServices } from './user.service';
import { map } from 'rxjs/operators';
import { ProjectServices } from './project.service';

@Injectable({
    providedIn: 'root'
})
export class ChatServices {

    messagesSource = new Subject<MessageOrder>();
    messages$ = this.messagesSource.asObservable();

    constructor(private http:HttpClient,
                private _userServices: UserServices,
                private socket:Socket,
                private _projectServices:ProjectServices) {
     }

    getMessages(projectId: string, from: number, limit: number = 15) {
        let url = `${URL_SERVICES}/messages/${projectId}?from=${from}&limit=${limit}`;
        return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
            res.messages.reverse()
            res.messages.forEach((message) => {
                let messageOrder = new MessageOrder(message, 'get')
                this.messagesSource.next(messageOrder)
            })
        }))
    }

    getLastMessages() {
       let url = `${URL_SERVICES}/lastMessages`
       return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
           return res.messages
       }))
    }

    postMessage(message: Message) {
        let url = `${URL_SERVICES}/message`
        return this.http.post(url, message, { headers: this._userServices.headers }).pipe(map((res: any) => {
            this._projectServices.messagesCount++
            let messageOrder = new MessageOrder(res.message,'post')
            this.messagesSource.next(messageOrder)
            this.sendMessage(messageOrder)
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

    deleteMessage(messageId: string) {
        let url = `${URL_SERVICES}/message/${messageId}`
        return this.http.delete(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
            this._projectServices.messagesCount--;
            let messageOrder = new MessageOrder(res.message, 'delete')
            this.messagesSource.next(messageOrder)
        }))
    }
}
