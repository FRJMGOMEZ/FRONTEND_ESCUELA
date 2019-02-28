import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Message } from '../models/message.model';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { UserServices } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  headers:HttpHeaders

  constructor(private http:HttpClient,
             private _userServices:UserServices) {
    this.headers = new HttpHeaders().set('token',this._userServices.token)              
              }

  postMessage(message:Message){

    let url = `${URL_SERVICES}/mensaje`
    return this.http.post(url,message,{headers:this.headers}).pipe(map((res:any)=>{
     return res.mensajeGuardado
    }))

  }

  getMessages(projectId: string){

    let url = `${URL_SERVICES}/mensajes/${projectId}`;
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      return res.mensajes
    }))
     
  }
}
