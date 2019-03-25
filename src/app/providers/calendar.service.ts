import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { EventModel, EventOrder } from '../models/event.model';
import { Week } from '../models/week.model';
import * as _ from "underscore";
import { Day } from '../models/day.model';
import * as io from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class CalendarService {
 
  headers: HttpHeaders
  
  private socket;

  currentDay:Day
  currentWeek:Week

  permanentEvents:EventModel[]

  public daySource = new Subject<string>();
  public day$ = this.daySource.asObservable();

  public weeksSource = new Subject<string>();
  public weeks$ = this.weeksSource.asObservable();

  public eventsSource = new Subject<EventOrder>();
  public events$ = this.eventsSource.asObservable();

  constructor(private http: HttpClient) {
    this.socket = io(URL_SERVICES);
    if (localStorage.getItem('token').length > 0) {
      this.headers = new HttpHeaders().set('token', localStorage.getItem('token'))
    }
  }

  //////// WEEK ///////

  getWeekByDate(date:number) {
    let url = `${URL_SERVICES}/week/${date}`;
    return this.http.get(url, { headers:this.headers }).pipe(
      map((res: any) => {
        if(res.week === null){
          return 'no-week' 
        }else{
          this.currentWeek = res.week;
          this.weeksSource.next('getByDate')
        }
      })
    );
  }

  getWeekById(id: string) {
    let url = `${URL_SERVICES}/searchById/week/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        this.currentWeek = res.week;
        this.weeksSource.next("getById");
      })
    );
  }

  getWeekByDay(dayId: string, dayOfTheWeek: number) {
    let url = `${URL_SERVICES}/weekByDay/${dayId}/${dayOfTheWeek}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        this.currentWeek = res.week;
        setTimeout(() => {
          this.weeksSource.next("getByDay");
        })
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
      .post(url, { date: weekDay.toUTCString() }, { headers: this.headers })
      .pipe(
        map((res: any) => {
          this.currentWeek = res.week;
        })
      );
  }

  checkWeekDay(day?: number) {
    return new Promise((resolve) => {
      let dayId;
      if (day >= 0) {
        switch (day) {
          case 1:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
          case 2:
            dayId = this.currentWeek.tuesday._id;
            resolve(dayId);
            break;
          case 3:
            dayId = this.currentWeek.wednesday._id;
            resolve(dayId);
            break;
          case 4:
            dayId = this.currentWeek.thursday._id;
            resolve(dayId);
            break;
          case 5:
            dayId = this.currentWeek.friday._id;
            resolve(dayId);
            break;
          case 6:
            dayId = this.currentWeek.saturday._id;
            resolve(dayId);
            break;
          case 0:
            dayId = this.currentWeek.sunday._id;
            resolve(dayId);
            break;
          default:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
        }
      } else {
        let today = new Date();
        switch (today.getDay()) {
          case 1:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
          case 2:
            dayId = this.currentWeek.tuesday._id;
            resolve(dayId);
            break;
          case 3:
            dayId = this.currentWeek.wednesday._id;
            resolve(dayId);
            break;
          case 4:
            dayId = this.currentWeek.thursday._id;
            resolve(dayId);
            break;
          case 5:
            dayId = this.currentWeek.friday._id;
            resolve(dayId);
            break;
          case 6:
            dayId = this.currentWeek.saturday._id;
            resolve(dayId);
            break;
          case 0:
            dayId = this.currentWeek.sunday._id;
            resolve(dayId);
            break;
          default:
            dayId = this.currentWeek.monday._id;
            resolve(dayId);
            break;
        }
      }
    });
  }

  /////////// DAY //////////

  getDayByDate(date:number) {
    let url = `${URL_SERVICES}/dayByDate/${date}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        if(res.day === null){
          return 'no-day'
        }else{
          this.currentDay = res.day;
          this.daySource.next("getByDate");
        }
      })
    );
  }

  getDayById(id: string) {
    let url = `${URL_SERVICES}/searchById/day/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        this.currentDay = res.day;
        this.daySource.next('getById');
      })
    );
  }

    //////////// EVENTS ///////////
  
  getEvents() {
    let url = `${URL_SERVICES}/events`
    return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
      return res.events
    }))
  }

  getEventsInProject(projectId: string) {
    let url = `${URL_SERVICES}/events/projects/${projectId}`
    return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
      return res.events
    }))
  }

  getPermanentEvents() {
    let url = `${URL_SERVICES}/permanentEvents`;
    return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
      this.permanentEvents = res.events;
    }))
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
        if(res.event.permanent){
          this.permanentEvents.push(res.event)
        }
      })
    );
  }

  putEvent(eventId: string, event: any) {
    let url = `${URL_SERVICES}/event/${eventId}`;
    return this.http.put(url, event, { headers:this.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event,'put')
        this.eventsSource.next(eventOrder)
        if(res.event.permanent){
          this.permanentEvents.forEach((event,index)=>{
            if(event._id === res.event._id){
              this.permanentEvents[index]=res.event
            }
          })
        }
      })
    );
  }

  pullEvent(dayId:string,eventId:string){
    let url = `${URL_SERVICES}/pullEvent/${dayId}/${eventId}`
    return this.http.put(url,event,{headers:this.headers}).pipe(map((res:any)=>{
      this.eventsSource.next()
      if (res.event.permanent) {
        if (res.event.permanent) {
          this.permanentEvents.forEach((event, index) => {
            if (event._id === res.event._id) {
              this.permanentEvents[index] = res.event
            }
          })
        }
      }
    }))
  }

  deleteEvent(eventId:string,dayId:string){
    let url = `${URL_SERVICES}/event/${eventId}/${dayId}`
    return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
      this.eventsSource.next()
      if(res.event.permanent){
        this.permanentEvents = this.permanentEvents.filter((event)=>{return event._id != res.event._id})
      }
    }))
  }

  checkPermanentEvents(event:EventModel){
    let url = `${URL_SERVICES}/checkPermanentEvents`
    return this.http.put(url,event,{headers:this.headers}).pipe(map((res:any)=>{
       return res.day
    }))
  }
}
