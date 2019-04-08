import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { EventModel, EventOrder } from '../models/event.model';
import { Week } from '../models/week.model';
import * as _ from "underscore";
import { Day } from '../models/day.model';
import { UserServices } from './user.service';
import { Socket } from 'ngx-socket-io';
import { CalendarModalController } from '../modals/calendar-modal/calendar-modal.controller';
import { EventModalController } from '../modals/events-modal/eventsModal.controller';

@Injectable({
  providedIn: "root"
})
export class CalendarService {

  currentDay:Day
  currentWeek:Week

  permanentEvents:EventModel[] = []

  public eventsSource = new Subject<any>();
  public events$ = this.eventsSource.asObservable();

  constructor(private http: HttpClient,
            private _userServices:UserServices,
            private socket:Socket,
            private _calendarModalController:CalendarModalController,
            private _eventModalController:EventModalController
          ) {}

  //////// WEEK ///////

  getWeekByDate(date:number) {
    let url = `${URL_SERVICES}week/${date}`;
    return this.http.get(url, { headers:this._userServices.headers }).pipe(
      map((res: any) => {
        if(res.week === null){
          return 'no-week' 
        }else{
          this.currentWeek = res.week;
        }
      })
    );
  }

  getWeekById(id: string) {
    let url = `${URL_SERVICES}searchById/week/${id}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        this.currentWeek = res.week;
      })
    );
  }

  getWeekByDay(dayId: string, dayOfTheWeek: number) {
    let url = `${URL_SERVICES}weekByDay/${dayId}/${dayOfTheWeek}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        this.currentWeek = res.week;
      })
    );
  }

  postWeek(weekDay: Date) {
    switch (weekDay.getDay()) {
      case 1:
        weekDay.setDate(weekDay.getDate());
        break;
      case 2:
        weekDay.setDate(weekDay.getDate() -1);
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

    let url = `${URL_SERVICES}week`;
    return this.http
      .post(url, { date: weekDay.getTime() }, { headers: this._userServices.headers })
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
    let url = `${URL_SERVICES}dayByDate/${date}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        if(res.day === null){
          return 'no-day'
        }else{
          if (this.currentDay) {
            this.userOut().then(()=>{
              this.currentDay = res.day;
              return
            })
          }else{
            this.currentDay = res.day;
              return
          }
        }
      })
    );
  }

  getDayById(id: string) {
    let url = `${URL_SERVICES}searchById/day/${id}`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        if(this.currentDay){
          this.userOut().then(()=>{
            this.currentDay=res.day
            return
          })
        }else{
          this.currentDay = res.day;
          return
        }
      })
    );
  }

  userIn(){
    return new Promise((resolve,reject)=>{
      let payload = { user: this._userServices.userOnline._id, room: this.currentDay._id }
      this.socket.emit('userIn', payload, (usersOnline) => {
        resolve()
      })
    })
  }

  userOut(){
   return new Promise((resolve,reject)=>{
      let payload = { user: this._userServices.userOnline._id, room: this.currentDay._id }
      this.socket.emit('userOut', payload)
      resolve()
    })
  }

    //////////// EVENTS ///////////

  getEventsInProject(projectId: string) {
    let url = `${URL_SERVICES}events/projects/${projectId}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      return res.events
    }))
  }

  getPermanentEvents() {
    let url = `${URL_SERVICES}permanentEvents`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.permanentEvents = res.events;
    }))
  }

  getEventById(eventId: string) {
    let url = `${URL_SERVICES}searchById/event/${eventId}`;
    return this.http.get(url, { headers:this._userServices.headers }).pipe(
      map((res: any) => {
        return res.event
      })
    );
  }

  emitEvent(eventOrder?:EventOrder) {
    let payload = {eventOrder,room:this.currentDay._id}
     this.socket.emit('event',payload)
  }

  eventSocket() {
    return this.socket.fromEvent('event').pipe(map((payload:any)=>{
      if (payload.room === this.currentDay._id) {
        if (this._calendarModalController.hidden != 'hidden') {
          this._calendarModalController.hideModal()
        }
        if (this._eventModalController.hidden != 'hidden') {
          this._calendarModalController.hideModal()
        }
        this.eventsSource.next()
      }
      if (payload.eventOrder) {
        if (payload.eventOrder.order === 'post') {
          this.permanentEvents.push(payload.eventOrder.event)
        } else if (payload.eventOrder.order === 'put') {
          this.permanentEvents.forEach((event, index) => {
            if (event._id === payload.eventOrder.event._id) {
              this.permanentEvents[index] = payload.eventOrder.event
            }
          })
        } else if (payload.eventOrder.order === 'delete') {
          this.permanentEvents = this.permanentEvents.filter((event) => { return event._id != payload.eventOrder.event._id })
        }
      }
    }))}


  postEvent(event: EventModel, dayId: string, limitDate:number= 8630000000000000) {
    let url = `${URL_SERVICES}event/${dayId}/${limitDate}s`;
    return this.http.post(url, event, { headers:this._userServices.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event,'post')
        this.eventsSource.next(eventOrder)
        if(res.event.permanent){
          this.permanentEvents.push(res.event)
          this.emitEvent(eventOrder)
        }else{
          this.emitEvent()
        }
      })
    );
  }

  putEvent(eventId: string, event: any) {
    let url = `${URL_SERVICES}event/${eventId}`;
    return this.http.put(url, event, { headers:this._userServices.headers }).pipe(
      map((res: any) => {
        let eventOrder = new EventOrder(res.event,'put')
        this.eventsSource.next(eventOrder)
        if(res.event.permanent){
          this.permanentEvents.forEach((event,index)=>{
            if(event._id === res.event._id){
              this.permanentEvents[index]=res.event
            }
          })
          this.emitEvent(eventOrder)
        }else{
          this.emitEvent()
        }
        
      })
    );
  }

  pullEvent(dayId:string,eventId:string){
    let url = `${URL_SERVICES}pullEvent/${dayId}/${eventId}`
    return this.http.put(url,event,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.eventsSource.next()
      if (res.event.permanent) {
        if (res.event.permanent) {
          this.permanentEvents.forEach((event, index) => {
            if (event._id === res.event._id) {
              this.permanentEvents[index] = res.event
            }
          })
        }
        let eventOrder = new EventOrder(res.event, 'put')
        this.emitEvent(eventOrder)
      }else{
        this.emitEvent()
      }
   
    }))
  }

  deleteEvent(eventId:string){
    let url = `${URL_SERVICES}event/${eventId}`
    return this.http.delete(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.eventsSource.next()
      if(res.event.permanent){
        this.permanentEvents = this.permanentEvents.filter((event)=>{return event._id != res.event._id})
        let eventOrder = new EventOrder(res.event, 'delete')
        this.emitEvent(eventOrder)
      }else{
        this.emitEvent()
      }  
    }))
  }

  checkPermanentEvents(event:EventModel){
    let url = `${URL_SERVICES}checkPermanentEvents`
    return this.http.put(url,event,{headers:this._userServices.headers}).pipe(map((res:any)=>{
       return res.day
    }))
  }
}
