import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalendarService } from 'src/app/providers/calendar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DemoService } from '../../providers/demo.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarManagerComponent implements OnInit, OnDestroy {

  constructor(public _calendarServices:CalendarService,
             private router:Router,
             private activatedRoute:ActivatedRoute,
             private _demoServices:DemoService) { }

  ngOnInit() {

    this._demoServices.calendarPopup()
    
    this.activatedRoute.params.subscribe(params => {
      if (!params['weekId'] && !params['dayId'] && !this._calendarServices.currentDay && !this._calendarServices.currentWeek) {
        let today = new Date();
        today = new Date(today.getFullYear(),today.getMonth(),today.getDate(),6,0,0,0)
        this._calendarServices.getDayByDate(today.getTime()).subscribe((res: any) => {
          if (res === 'no-day') {
            this._calendarServices.postWeek(today).subscribe(() => {
                this._calendarServices.checkWeekDay().then((dayId:string) => {
                  this._calendarServices.getDayById(dayId).subscribe(()=>{
                    setTimeout(()=>{
                      this.router.navigate(["./calendar", this._calendarServices.currentWeek._id, this._calendarServices.currentDay._id]);
                      return
                    })
                  })
              })
            })
          }else{
              let dayOfTheWeek = new Date(this._calendarServices.currentDay.date).getDay();
              this._calendarServices.getWeekByDay(this._calendarServices.currentDay._id, dayOfTheWeek).subscribe(() => {
                setTimeout(()=>{
                  this.router.navigate(['./calendar', this._calendarServices.currentWeek._id, this._calendarServices.currentDay._id])
                })
                return
              })
          }
        })
      }
    });
    this._calendarServices.getPermanentEvents().subscribe()
  }

  ngOnDestroy(): void {
    this._calendarServices.userOut()
    this._calendarServices.currentDay=undefined;
    this._calendarServices.currentWeek=undefined;
    this._calendarServices.permanentEvents = [];
  }
}