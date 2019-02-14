import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map } from 'rxjs/operators';
import { Subject} from 'rxjs';
import { Event } from '../models/event.model';
import { Calendar } from '../models/calendar.model';
import { UserServices } from './user.service';
import * as _ from "underscore";
import { Day } from '../models/day.model';


@Injectable({
  providedIn: "root"
})
export class CalendarService {
  token: string;

  days: string[];

  public currentDaySource = new Subject<Day>();
  public currentDay$ = this.currentDaySource.asObservable();

  public calendarsSource = new Subject<Calendar>();
  public calendars$ = this.calendarsSource.asObservable();

  public eventsSource = new Subject<Event>();
  public events$ = this.calendarsSource.asObservable();

  constructor(private http: HttpClient, private _userServices: UserServices) {
    this.token = this._userServices.token;
  }

  getCalendarByDate(date: Date) {
    let url = `${URL_SERVICES}/calendar/${date}`;
    let headers = new HttpHeaders().set("token", this.token);
    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        this.calendarsSource.next(res.calendars[0])
        return res.calendars;
      })
    );
  }

  postDaysOfTheWeek(calendarDay: Date) {
    switch (calendarDay.getDay()) {
      case 1:
        calendarDay = calendarDay;
        break;
      case 2:
        calendarDay.setDate(calendarDay.getDate() - 1);
        break;
      case 3:
        calendarDay.setDate(calendarDay.getDate() - 2);
        break;
      case 4:
        calendarDay.setDate(calendarDay.getDate() - 3);
        break;
      case 5:
        calendarDay.setDate(calendarDay.getDate() - 4);
        break;
      case 6:
        calendarDay.setDate(calendarDay.getDate() - 5);
        break;
      case 0:
        calendarDay.setDate(calendarDay.getDate() - 6);
        break;
    }
    let url = `${URL_SERVICES}/days`;
    let headers = new HttpHeaders().set("token", this.token);
    return this.http
      .post(url, { date: new Date(calendarDay) }, { headers })
      .pipe(
        map((res: any) => {
          this.days = res.days.map(day => {
            return day._id;
          });
        })
      );
  }

  postCalendar() {
    let url = `${URL_SERVICES}/calendar`
    let headers = new HttpHeaders().set("token", this.token);
    return this.http.post(url, { days: this.days }, { headers }).pipe(
      map((res: any) => {
        this.calendarsSource.next(res.calendar);
        return res.calendar
      })
    );
  }

  getCalendarById(id: string) {
    let url = `${URL_SERVICES}/searchById/calendar/${id}`;
    let headers = new HttpHeaders().set("token", this.token);
    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        this.calendarsSource.next(res.calendar);
      })
    );
  }

  getCalendarByDay(dayId: string, dayOfTheWeek: number, token: string) {
    let url = `${URL_SERVICES}/calendarByDay/${dayId}/${dayOfTheWeek}`;
    let headers = new HttpHeaders().set("token", token);
    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        return res.calendar[0];
      })
    );
  }


  getDayById(id: string) {
    let url = `${URL_SERVICES}/searchById/day/${id}`;
    let headers = new HttpHeaders().set("token", this.token);
    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        this.currentDaySource.next(res.day);
      })
    );
  }

  getDayByDate(date: Date, token: string) {
    let url = `${URL_SERVICES}/dayByDate/${date}`;

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        return res.day;
      })
    );
  }

  postEvent(event: Event, token: string) {
    let url = `${URL_SERVICES}/event`;
    let headers = new HttpHeaders().set("token", token);
    return this.http.post(url, event, { headers }).pipe(
      map((res: any) => {
        return res.event;
      })
    );
  }

  pushEvent(event: Event, dayId: string, token: string) {
    let url = `${URL_SERVICES}/day/${dayId}`;
    let headers = new HttpHeaders().set("token", token);
    return this.http.put(
      url,
      { position: event.position, id: event._id },
      { headers }
    ).pipe(map((res:any)=>{
     this.currentDaySource.next(res.day)
    }))
  }

  putEvent(eventId: string, event: any, token: string) {
    let url = `${URL_SERVICES}/event/${eventId}`;
    let headers = new HttpHeaders().set("token", token);
    return this.http.put(url, event, { headers }).pipe(
      map((res: any) => {
        this.eventsSource.next(res.event)
        return res.event;
      })
    );
  }

  getEventById(eventId: string, token: string) {
    let url = `${URL_SERVICES}/searchById/event/${eventId}`;

    let headers = new HttpHeaders().set("token", token);

    return this.http.get(url, { headers }).pipe(
      map((res: any) => {
        return res.event;
      })
    );
  }
}
