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
  today:string

  constructor(public _userServices:UserServices,
              private _calendarServices:CalendarService,
              private route:Router) {
                this.token = this._userServices.token;            
  }

  ngOnInit() {
    
    let today = new Date()
    let calendarDate;
    switch(today.getDay()){
      case 1: calendarDate = new Date(); this.today = 'monday';
      break;
      case 2: calendarDate = today.setDate(today.getDate() - 1); this.today = 'tuesday';
      break;
      case 3: calendarDate = today.setDate(today.getDate() - 2); this.today = 'wednesday';
      break;
      case 4: calendarDate = today.setDate(today.getDate() - 3); this.today = 'thursday';
        break;
      case 5: calendarDate = today.setDate(today.getDate() - 4); this.today = 'friday';
        break;
      case 6: calendarDate = today.setDate(today.getDate() - 5); this.today = 'saturday';
        break;
      case 7: calendarDate = today.setDate(today.getDate() - 6); this.today = 'sunday';
        break;
    }
    this._calendarServices
      .getCalendarByDate(new Date(calendarDate))
      .subscribe((calendars:Calendar[]) => {
        if (calendars) {
          this.currentCalendar = calendars[0];
        }
      });
  }

 toLastCalendar(){
        if(this.currentCalendar){
          this.route.navigate(['/day', this.currentCalendar._id,this.currentCalendar[this.today]._id])
        }else{
          this.route.navigate(['/day','no-calendar', 'no-day'])
        }
  }
}