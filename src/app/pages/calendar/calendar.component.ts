import { Component, OnInit, EventEmitter } from '@angular/core';
import { CalendarService } from '../../providers/calendar.service';
import { UserServices } from '../../providers/user.service';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent implements OnInit {
  
  token: string;
  public calendar: any;
  week: number[] = []

  public notification = new EventEmitter<any>();

  calendars:any[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private _calendarServices: CalendarService,
    private _userServices: UserServices,
    private router: Router,
  ) {
    this.token = this._userServices.token;   
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {

      let id = params["id"];

      if (id != 'no-calendars') {
        this._calendarServices
          .getCalendarById(id, this.token)
          .subscribe((calendar) => {

            this.calendar = calendar;
            let date = new Date(calendar.fecha);
            let year = date.getFullYear();
            let month = date.getMonth();
            let daysInMonth = 32 - new Date(year,month,32).getDate();

            let calendarDate = date.getDate();

            let calendarDay = date.getDay();

            let week =[];

            switch (calendarDay) {
              case 0:
                week = [
                  calendarDate + 1,
                  calendarDate + 2,
                  calendarDate + 3,
                  calendarDate + 4,
                  calendarDate + 5,
                  calendarDate + 6,
                  calendarDate + 7
                ];
                break;
              case 1:
                week = [
                  calendarDate ,
                  calendarDate + 1,
                  calendarDate + 2,
                  calendarDate + 3,
                  calendarDate + 4,
                  calendarDate + 5,
                  calendarDate + 6
                ];
                break;
              case 2:
                week = [
                  calendarDate - 1,
                  calendarDate ,
                  calendarDate + 1 ,
                  calendarDate + 2,
                  calendarDate + 3,
                  calendarDate + 4,
                  calendarDate + 5
                ];
                break;
              case 3:
                week = [
                  calendarDate - 2,
                  calendarDate - 1,
                  calendarDate ,
                  calendarDate + 1,
                  calendarDate + 2,
                  calendarDate + 3,
                  calendarDate + 4
                ];
                break;
              case 4:
                week = [
                  calendarDate - 3,
                  calendarDate - 2,
                  calendarDate - 1,
                  calendarDate ,
                  calendarDate + 1,
                  calendarDate + 2,
                  calendarDate + 3
                ];
                break;
              case 5:
                week = [
                  calendarDate - 4,
                  calendarDate - 3,
                  calendarDate - 2,
                  calendarDate - 1,
                  calendarDate ,
                  calendarDate + 1,
                  calendarDate + 2
                ];
                break;
              case 6:
                week = [
                  calendarDate - 5,
                  calendarDate - 4,
                  calendarDate - 3,
                  calendarDate - 2,
                  calendarDate - 1,
                  calendarDate ,
                  calendarDate + 1
                ];
                break;
            }
            for(let day of week ){
              if(day>daysInMonth){
                day = day-daysInMonth;
                this.week.push(day)
              }else{
                this.week.push(day)
              }}

            this._calendarServices.getCalendars(this.token).subscribe((calendars) => {

                this.calendars = calendars;

                let lapso = 604800000;

                let lastDate = new Date(this.calendars[this.calendars.length - 1].fecha)

                lapso = lapso - (lapso / 7) * lastDate.getDay() + 1;

                let now = new Date()

                if (now.getTime() - lastDate.getTime() > lapso) {

                 this.postCalendar()
                }
            })
          })
        } 
      else if(id === 'no-calendars') {
        this.postCalendar()
      }
    }); 
  }

  postCalendar(){

    this._calendarServices.postCalendar(this.token).subscribe((calendar) => {

      this.router.navigate(['/calendar',calendar._id])
    })
  }

  toDay(day) {

    this.router.navigate(['./day', day, this.calendar._id])   
  }
}
