import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(public http:HttpClient) { }

enviarMail(mensaje){

  let url = 'http://localhost:3000/';

  return this.http.post(url,{mensaje})
}
}