import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http:HttpClient) { }

  postCalendar(token:string){

    let headers = new HttpHeaders().set('token',token)

    let url = `${URL_SERVICES}/calendario`

    return  this.http.post(url,{headers}).pipe(map((res:any)=>{

    return res.calendarioGuardado
    }))
  }
   
  getCalendars(token:string){

    let url = `${URL_SERVICES}/calendario`;

    return this.http.get(url).pipe(map((res: any) => {

      return res.calendariosDb
    }))
  }

  getCalendarById(id:string,token:string){

    let url = `${URL_SERVICES}/searchById/calendario/${id}`

    let headers = new HttpHeaders().set('token', token)

    return this.http.get(url,{headers}).pipe(map((res:any)=>{

      return res.calendario
    })) 
  }

  addEvent(calendarId:string,day:string,eventId:string, token:string){

     let url = `${URL_SERVICES}/anadirEvento/${calendarId}`
     
    let headers = new HttpHeaders().set('token', token)

    return this.http.put(url,{evento:eventId,dia:day},{headers})
  }

}
