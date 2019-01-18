import { Component, OnInit, EventEmitter } from '@angular/core';
import { CalendarService } from '../../providers/calendar.service';
import { UserServices } from '../../providers/user.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent implements OnInit {
  
  token: string;

  currentCalendar: any;
  week: any[];
  

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

            this.currentCalendar = calendar;

            this.week = [ { date: new Date(calendar.monday.date),  id:calendar.monday._id},
                          { date: new Date(calendar.tuesday.date), id: calendar.tuesday._id },
                          { date: new Date(calendar.wednesday.date), id: calendar.wednesday._id },
                          { date: new Date(calendar.thursday.date), id: calendar.thursday._id },
                          { date: new Date(calendar.friday.date), id: calendar.friday._id },
                          { date: new Date(calendar.saturday.date), id: calendar.saturday._id },
                          { date: new Date(calendar.sunday.date), id: calendar.sunday._id },
                        ];

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
    })
  }

  postCalendar(){

    let calendarDay = new Date();
    let day = new Date();

    let observable;

    switch (calendarDay.getDay()) {
      case 1: day.setDate(calendarDay.getDate()); observable = this._calendarServices.postDaysOfTheWeek(day, this.token);
        break;
      case 2: day.setDate(calendarDay.getDate() - 1); observable = this._calendarServices.postDaysOfTheWeek(day, this.token);
        break;
      case 3: day.setDate(calendarDay.getDate() - 2); observable = this._calendarServices.postDaysOfTheWeek(day, this.token);
        break;
      case 4: day.setDate(calendarDay.getDate() - 3); observable = this._calendarServices.postDaysOfTheWeek(day, this.token);
        break;
      case 5: day.setDate(calendarDay.getDate() - 4); observable = this._calendarServices.postDaysOfTheWeek(day, this.token);
        break;
      case 6: day.setDate(calendarDay.getDate() - 5); observable = this._calendarServices.postDaysOfTheWeek(day, this.token);
        break;
      case 7: day.setDate(calendarDay.getDate() - 6); observable = this._calendarServices.postDaysOfTheWeek(day, this.token);
        break;
    }

    observable.subscribe((week) => {

      let days = []

      week.forEach(day => { days.push(day._id) });
      
      this._calendarServices.postCalendar(days,this.token).subscribe((calendar)=>{
         
        this.router.navigate(['/calendar', calendar._id])
      }) 
      })
    }
  
  toDay(day) {
    this.router.navigate(['./day', this.currentCalendar._id, day])  
  }

  navigateToCalendar(id:string){

    this._calendarServices.getCalendarById(id,this.token).subscribe((calendar)=>{

      this.currentCalendar = calendar;

      this.week = [{ date: new Date(calendar.monday.date), id: calendar.monday._id },
      { date: new Date(calendar.tuesday.date), id: calendar.tuesday._id },
      { date: new Date(calendar.wednesday.date), id: calendar.wednesday._id },
      { date: new Date(calendar.thursday.date), id: calendar.thursday._id },
      { date: new Date(calendar.friday.date), id: calendar.friday._id },
      { date: new Date(calendar.saturday.date), id: calendar.saturday._id },
      { date: new Date(calendar.sunday.date), id: calendar.sunday._id },
      ];
    })
  }
}
