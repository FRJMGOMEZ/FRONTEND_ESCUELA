import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { CalendarService } from '../../providers/calendar.service';
import { Router } from '@angular/router';
import { Calendar } from 'src/app/models/calendar.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:string

  currentCalendar:any

  calendars:Calendar[]=[]

  constructor(public _userServices:UserServices,
              private _calendarServices:CalendarService,
              private route:Router) {
                this.token = this._userServices.token;            
  }

  ngOnInit() {
    this._calendarServices.getCalendars(this.token).subscribe((calendars)=>{
      if(calendars){
        this.calendars = calendars;
      }
    })
    this._calendarServices.calendars$.subscribe((calendar)=>{
       this.calendars.push(calendar)
    })
  }

 toLastCalendar(){
      this.checkDay().then((today)=>{
        if(today){
          this.route.navigate(['/day', this.currentCalendar._id, today])
        }else{
          this.route.navigate(['/day','no-calendar', 'no-day'])
        }
      })  
  }

  checkDay(){
    return new Promise((resolve,reject)=>{
      let today;
      if(this.calendars.length > 0){
      this.calendars.forEach((calendar: any) => {
        if (new Date(calendar.monday.date).getDate() === new Date().getDate() && new Date(calendar.monday.date).getMonth() === new Date().getMonth() && new Date(calendar.monday.date).getFullYear() === new Date().getFullYear()) {
          today = calendar.monday._id;
          this.currentCalendar = calendar;
          resolve(today);
        } else if (new Date(calendar.tuesday.date).getDate() === new Date().getDate() && new Date(calendar.tuesday.date).getMonth() === new Date().getMonth() && new Date(calendar.tuesday.date).getFullYear() === new Date().getFullYear()) {
                 today = calendar.tuesday._id;
                 this.currentCalendar = calendar;
                 resolve(today);
        } else if (new Date(calendar.wednesday.date).getDate() === new Date().getDate() && new Date(calendar.wednesday.date).getMonth() === new Date().getMonth() && new Date(calendar.wednesday.date).getFullYear() === new Date().getFullYear()) {
                 today = calendar.wednesday._id;
                 this.currentCalendar = calendar;
                 resolve(today);
        } else if (new Date(calendar.thursday.date).getDate() === new Date().getDate() && new Date(calendar.thursday.date).getMonth() === new Date().getMonth() && new Date(calendar.thursday.date).getFullYear() === new Date().getFullYear()) {
                 today = calendar.thursday._id;
                 this.currentCalendar = calendar;
                 resolve(today);
        } else if (new Date(calendar.friday.date).getDate() === new Date().getDate() && new Date(calendar.friday.date).getMonth() === new Date().getMonth() && new Date(calendar.friday.date).getFullYear() === new Date().getFullYear()) {
                 today = calendar.friday._id;
                 this.currentCalendar = calendar;
                 resolve(today);
        } else if (new Date(calendar.saturday.date).getDate() === new Date().getDate() && new Date(calendar.saturday.date).getMonth() === new Date().getMonth() && new Date(calendar.saturday.date).getFullYear() === new Date().getFullYear()) {
                 today = calendar.saturday._id;
                 this.currentCalendar = calendar;
                 resolve(today);
        } else if (new Date(calendar.sunday.date).getDate() === new Date().getDate() && new Date(calendar.sunday.date).getMonth() === new Date().getMonth() && new Date(calendar.sunday.date).getFullYear() === new Date().getFullYear()) {
                 today = calendar.sunday._id;
                 this.currentCalendar = calendar;
                 resolve(today);
               }
        })
      }else{resolve()}
    })
  }
}