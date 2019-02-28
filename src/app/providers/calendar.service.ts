import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { Event, EventOrder } from '../models/event.model';
import { Week } from '../models/week.model';
import { UserServices } from './user.service';
import * as _ from "underscore";
import { Day } from '../models/day.model';


@Injectable({
  providedIn: "root"
})
export class CalendarService {
 
  headers: HttpHeaders;

  public currentDaySource = new Subject<Day>();
  public currentDay$ = this.currentDaySource.asObservable();

  public weeksSource = new Subject<Week>();
  public weeks$ = this.weeksSource.asObservable();

  public eventsSource = new Subject<EventOrder>();
  public events$ = this.eventsSource.asObservable();

  constructor(private http: HttpClient, private _userServices: UserServices) {

    this.headers = new HttpHeaders().set("token", this._userServices.token);
  }

  getWeekByDate(date: Date) {
    let url = `${URL_SERVICES}/week/${date}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        console.log(res)
        return res.weeks;
      })
    );
  }

  getWeekById(id: string) {
    let url = `${URL_SERVICES}/searchById/week/${id}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        this.weeksSource.next(res.week);
      })
    );
  }

  getWeekByDay(dayId: string, dayOfTheWeek: number) {
    let url = `${URL_SERVICES}/weekByDay/${dayId}/${dayOfTheWeek}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        return res.week[0];
      })
    );
  }

  postWeek(weekDay: Date) {
    switch (weekDay.getDay()) {
      case 1:
        weekDay = weekDay;
        break;
      case 2:
        weekDay.setDate(weekDay.getDate() - 1);
        break;
      case 3:
        weekDay.setDate(weekDay.getDate() - 2);
        break;
      case 4:
        weekDay.setDate(weekDay.getDate() - 3);
        break;
      case 5:
        weekDay.setDate(weekDay.getDate() - 4);
        break;
      case 6:
        weekDay.setDate(weekDay.getDate() - 5);
        break;
      case 0:
        weekDay.setDate(weekDay.getDate() - 6);
        break;
    }
    let url = `${URL_SERVICES}/week`;
    return this.http
      .post(url, { date: new Date(weekDay) }, { headers:this.headers })
      .pipe(
        map((res: any) => {
          return res.week
        })
      );
  }

  getDayById(id: string) {
    let url = `${URL_SERVICES}/searchById/day/${id}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        this.currentDaySource.next(res.day);
      })
    );
  }

  getDayByDate(date: Date) {
    let url = `${URL_SERVICES}/dayByDate/${date}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        return res.day;
      })
    );
  }

  getEventById(eventId: string) {
    let url = `${URL_SERVICES}/searchById/event/${eventId}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event, 'getById')
        this.eventsSource.next(eventOrder)
        return res.event;
      })
    );
  }

  postEvent(event: Event,dayId:string,limitDate?:number) {
    let url = `${URL_SERVICES}/event/${dayId}/${limitDate}`;
    return this.http.post(url, event, { headers:this.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event, 'push')
        this.eventsSource.next(eventOrder)
      })
    );
  }

  putEvent(eventId: string, event: any) {
    let url = `${URL_SERVICES}/event/${eventId}`;
    return this.http.put(url, event, { headers:this.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event,'put')
        this.eventsSource.next(eventOrder)
        return res.event
      })
    );
  }

  pullEvent(dayId:string,eventId:string){
    let url = `${URL_SERVICES}/pullEvent/${dayId}/${eventId}`
    return this.http.put(url,event,{headers:this.headers}).pipe(map((res:any)=>{
      let eventOrder = new EventOrder(res.event,'pull')
      this.eventsSource.next(eventOrder)
    }))
  }

  deleteEvent(eventId:string,dayId:string){
    let url = `${URL_SERVICES}/event/${eventId}/${dayId}`
    return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
      let eventOrder = new EventOrder(res.event,'delete')
      this.eventsSource.next(eventOrder)
    }))
  }

  checkPermanentEvents(event:Event){
    let url = `${URL_SERVICES}/checkPermanentEvents`
    return this.http.put(url,event,{headers:this.headers}).pipe(map((res:any)=>{
       return res.day
    }))
  }

  getPermanentEvents(){
    let url = `${URL_SERVICES}/permanentEvents`;
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      return res.events
    }))
  }
}
