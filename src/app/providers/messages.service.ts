import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Message } from '../models/message.model';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http:HttpClient) { }

  postMessage(message:Message,token:string){

    let url = `${URL_SERVICES}/mensaje`

    let headers = new HttpHeaders().set('token',token)

    return this.http.post(url,message,{headers}).pipe(map((res:any)=>{

     return res.mensajeGuardado
    }))

  }

  getMessages(projectId: string, token: string){

    let url = `${URL_SERVICES}/mensajes/${projectId}`;

    let headers = new HttpHeaders().set('token', token)

    return this.http.get(url, {headers}).pipe(map((res:any)=>{

      return res.mensajes
    }))
     
  }
}
