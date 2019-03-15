import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Subject, Observable} from 'rxjs';
import { EventModel, EventOrder } from '../models/event.model';
import { WeekOrder } from '../models/week.model';
import * as _ from "underscore";
import { DayOrder } from '../models/day.model';
import * as io from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class CalendarService {
 
  headers: HttpHeaders
  
  private socket;

  public daySource = new Subject<DayOrder>();
  public day$ = this.daySource.asObservable();

  public weeksSource = new Subject<WeekOrder>();
  public weeks$ = this.weeksSource.asObservable();

  public eventsSource = new Subject<EventOrder>();
  public events$ = this.eventsSource.asObservable();

  constructor(private http: HttpClient) {
    this.socket = io(URL_SERVICES);
    if (localStorage.getItem('token').length > 0) {
      this.headers = new HttpHeaders().set('token', localStorage.getItem('token'))
    }
  }

  getWeekByDate(date: Date) {
    let url = `${URL_SERVICES}/week/${date}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        if(res.week.length === 0){
          return 'no-week' 
        }else{
          let weekOrder = new WeekOrder(res.week[0], 'getByDate')
          this.weeksSource.next(weekOrder)
        }
      })
    );
  }
  getDayByDate(date: Date) {
    let url = `${URL_SERVICES}/dayByDate/${date}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        if(res.day === null){
          return 'no-day'
        }else{
          let dayOrder = new DayOrder(res.day, 'getByDate')
          this.daySource.next(dayOrder);
        }
      })
    );
  }

  getWeekById(id:string) {
    let url = `${URL_SERVICES}/searchById/week/${id}`;
    return this.http.get(url,{headers:this.headers}).pipe(
      map((res: any) => {
        let weekOrder = new WeekOrder(res.week, 'getById')
        this.weeksSource.next(weekOrder);
      })
    );
  }

  getDayById(id: string) {
    let url = `${URL_SERVICES}/searchById/day/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        let dayOrder = new DayOrder(res.day, 'getById')
        this.daySource.next(dayOrder);
      })
    );
  }


  getWeekByDay(dayId: string, dayOfTheWeek: number) {
    let url = `${URL_SERVICES}/weekByDay/${dayId}/${dayOfTheWeek}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        let weekOrder = new WeekOrder(res.week[0],'getByDay')
        this.weeksSource.next(weekOrder)
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
          let weekOrder = new WeekOrder(res.week,'push')
          this.weeksSource.next(weekOrder)
        })
      );
  }

  getEvents() {
    let url = `${URL_SERVICES}/events`
    return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
      res.events.forEach((event)=>{
        let eventOrder = new EventOrder(event, 'get')
        this.eventsSource.next(eventOrder)
      })
    }))
  }

  eventsSocket(){
    return Observable.create((observer) => {
      this.socket.on('event', (event) => {
        let eventOrder = new EventOrder(event, 'get')
        observer.next(eventOrder);
      });
    });
  }

  getEventById(eventId: string) {
    let url = `${URL_SERVICES}/searchById/event/${eventId}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event, 'getById')
        this.eventsSource.next(eventOrder)
      })
    );
  }

  postEvent(event: EventModel,dayId:string,limitDate?:number) {
    let url = `${URL_SERVICES}/event/${dayId}/${limitDate}`;
    return this.http.post(url, event, { headers:this.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event,'push')
        this.eventsSource.next(eventOrder)
        this.socket.emit('event', eventOrder)
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

  checkPermanentEvents(event:EventModel){
    let url = `${URL_SERVICES}/checkPermanentEvents`
    return this.http.put(url,event,{headers:this.headers}).pipe(map((res:any)=>{
       return res.day
    }))
  }

  getEventsInProject(projectId:string){
    let url = `${URL_SERVICES}/events/projects/${projectId}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      return res.events
    }))
  }

  getPermanentEvents(){
    let url = `${URL_SERVICES}/permanentEvents`;
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      return res.events
    }))
  }
  
}
