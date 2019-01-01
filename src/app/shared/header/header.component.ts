import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { CalendarService } from '../../providers/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:string

  calendar:any

  constructor(public _userServices:UserServices,
              private _calendarServices:CalendarService,
              private route:Router) {

    this.token = this._userServices.token;            
               }

  ngOnInit() {
    this._calendarServices.getCalendars(this.token).subscribe((calendars)=>{
      if(calendars){
        this.calendar = calendars[calendars.length - 1]
      }
    })
  }

  toLastCalendar(){
    if(this.calendar){
      this.route.navigate(['/calendar', this.calendar._id])
    }else{
      this.route.navigate(['/calendar', 'no-calendars'])
    }
  }

}