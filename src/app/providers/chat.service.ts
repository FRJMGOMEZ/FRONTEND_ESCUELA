import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { Subject } from 'rxjs';
import { URL_SERVICES } from '../config/config';
import { HttpClient} from '@angular/common/http';
import { MessageOrder, Message } from '../models/message.model';
import { UserServices } from './user.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChatServices {

    public messagesCount:number = 0;

    messagesSource = new Subject<MessageOrder>();
    messages$ = this.messagesSource.asObservable();

    constructor(private http:HttpClient,
                private _userServices: UserServices,
                private socket:Socket) {
     }

    getMessages(projectId: string, from: number, limit: number = 15) {
        let url = `${URL_SERVICES}messages/${projectId}?from=${from}&limit=${limit}`;
        return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
            res.messages.reverse()
            return res.messages
        }))
    }

    postMessage(message: Message,projectId:string) {
        let url = `${URL_SERVICES}message`
        return this.http.post(url, message, { headers: this._userServices.headers }).pipe(map((res: any) => {
            this.messagesCount++
            let messageOrder = new MessageOrder(res.message,'post')
            this.messagesSource.next(messageOrder)
            this.emitMessage(messageOrder,projectId)
        }))
    }

    emitMessage(messageOrder:MessageOrder,projectId:string) {
        let payload = {messageOrder,room:projectId}
        this.socket.emit('message', payload)
    }

    messagesSocket() {
        return this.socket.fromEvent('message').pipe(map((messageOrder:MessageOrder)=>{
            console.log(messageOrder)
            this.messagesSource.next(messageOrder)
        }))  
    } 

    deleteMessage(messageId: string) {
        let url = `${URL_SERVICES}message/${messageId}`
        return this.http.delete(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
            this.messagesCount--;
            let messageOrder = new MessageOrder(res.message, 'delete')
            this.messagesSource.next(messageOrder)
        }))
    }
}
