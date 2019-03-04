import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Message, MessageOrder } from '../models/message.model';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { UserServices } from './user.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messagesSource = new Subject<MessageOrder>();
  messages$ = this.messagesSource.asObservable();

  headers:HttpHeaders

  constructor(private http:HttpClient,
             private _userServices:UserServices) {

    this.headers = new HttpHeaders().set('token',this._userServices.token)}

  postMessage(message:Message){
    let url = `${URL_SERVICES}/message`
    return this.http.post(url,message,{headers:this.headers}).pipe(map((res:any)=>{
      let messageOrder = new MessageOrder(res.message,'push')
     this.messagesSource.next(messageOrder)
    }))
  }

 getMessages(projectId: string,from:number){
      let url =`${URL_SERVICES}/messages/${projectId}?from=${from}`;
      return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
        res.messages.forEach((message) => {
          let messageOrder = new MessageOrder(message, 'get')
          this.messagesSource.next(messageOrder)
        })
      }))
  }    
}
