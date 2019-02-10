import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { Event } from '../models/event.model';
import { Calendar } from '../models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private daySource = new Subject<void>();
  public daySource$ = this.daySource.asObservable()

  public calendarsSource = new Subject<Calendar>();
  public calendars$ = this.calendarsSource.asObservable()

  constructor(private http:HttpClient) { }

  postCalendar(days:string[],token:string){

        let url = `${URL_SERVICES}/calendario`;

        let headers = new HttpHeaders().set('token', token)
        
        return this.http.post(url,{days},{headers}).pipe(map((res:any)=>{

          return res.calendarSaved
        }))     
  }
   
  getCalendars(token:string){

    let url = `${URL_SERVICES}/calendarios`;

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url,{headers}).pipe(map((res: any) => {

      return res.calendariosDb
    }))
  }

  getCalendarById(id: string, token: string, day?: string) {

    let url = `${URL_SERVICES}/searchById/calendario/${id}`

    let headers = new HttpHeaders().set('token', token)

    return this.http.get(url, { headers }).pipe(map((res: any) => {

      return res.calendario

    }))
  }

  getCalendarByDay(dayId: string, dayOfTheWeek: number, token: string) {

    let url = `${URL_SERVICES}/calendarByDay/${dayId}/${dayOfTheWeek}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url, { headers }).pipe(map((res: any) => {

      return res.calendar[0]
    }))
  }

  postDaysOfTheWeek(date: Date, token: string) {

    let url = `${URL_SERVICES}/days`;

    let headers = new HttpHeaders().set("token", token);

    return this.http.post(url, { date }, { headers }).pipe(map((res: any) => {

      return res.daysSaved
    }))
  }

  getDayById(id:string,token:string){

    let url = `${URL_SERVICES}/searchById/day/${id}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url,{headers}).pipe(map((res:any)=>{

      this.daySource.next(res.day)

       return res.day
    }))
  }

  getDayByDate(date: Date, token: string) {

    let url = `${URL_SERVICES}/dayByDate/${date}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url, { headers }).pipe(map((res: any) => {

      return res.day
    }))
  }

  postEvent(event:Event,token:string){

    let url = `${URL_SERVICES}/event`

    let headers = new HttpHeaders().set("token", token);

    return this.http.post(url,event,{headers}).pipe(map((res:any)=>{

      return res.event
    }))
  }

  pushEvent(event:Event,dayId:string,token:string){

    let url = `${URL_SERVICES}/day/${dayId}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.put(url,{position:event.position,id:event._id},{headers})

  }

  putEvent(eventId:string,event:any,token:string){
    
    let url = `${URL_SERVICES}/event/${eventId}`

    let headers = new HttpHeaders().set("token", token);

      return this.http.put(url,event,{headers}).pipe(map((res:any)=>{

      return res.event
      }))
  }

  getEventById(eventId:string,token:string){

    let url = `${URL_SERVICES}/searchById/event/${eventId}`

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url,{headers}).pipe(map((res:any)=>{

      return res.event
    }))
  }
}
