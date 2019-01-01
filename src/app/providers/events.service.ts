import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }


   postEvent(event:any,token:string){

    let url = `${URL_SERVICES}/evento`

    let headers = new HttpHeaders().set('token',token);

    return this.http.post(url,event,{headers}).pipe(map((res:any)=>{

      return res.eventoGuardado
    }))
   }
}
