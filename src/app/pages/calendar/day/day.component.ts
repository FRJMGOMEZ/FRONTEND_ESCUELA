
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from '../../../providers/calendar.service';
import { UserServices } from '../../../providers/user.service';
import { FacilitiesService } from '../../../providers/facilities.service';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { Event } from 'src/app/models/event.model';
import { Calendar } from '../../../models/calendar.model';


@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit{

  @ViewChild('calendarPlace') calendarPlace : ElementRef

  token: string;

  currentDay: any;

  calendarId:string
  week:any[]

  hours: Event[] = [];

  facilities: any[];

  cardWidth:string

  constructor(
    private activatedRoute: ActivatedRoute,
    private _calendarServices: CalendarService,
    private _userServices: UserServices,
    private _facilitiesServices: FacilitiesService,
    private _eventModalController: EventModalController,
    private router:Router

  ) {
    this.token = this._userServices.token;

    this.activatedRoute.params.subscribe(params => {
      this.currentDay = params["day"];
      this.calendarId = params['calendarId']
    });
  }

  ngOnInit() {

    this.render()

    this.getCalendar()

    this._eventModalController.notification.subscribe(res => {
      if (!res) {
        this.render()
      }
    });
  }

  async render() {
    await this.getDay()
    await this.getFacilities()
    await this.getWidth()
  }


  getDay() {
    return new Promise((resolve, reject) => {
      this._calendarServices
        .getDayById(this.currentDay, this.token)
        .subscribe(day => {
          this.hours = [
            day["0"],
            day["1"],
            day["2"],
            day["3"],
            day["4"],
            day["5"],
            day["6"],
            day["7"],
            day["8"],
            day["9"],
            day["10"],
            day["11"]
          ]; resolve()
        })
    })
  }

  getFacilities() {
    return new Promise((resolve,reject)=>{
      this._facilitiesServices.getFacilities(this.token).subscribe(facilities => {
        if (facilities) {
          facilities.forEach(facilitie => {
            let space = 720;
            facilitie.space = space;
          });
          this.facilities = facilities;
          resolve()
        }
      }); 
    })   
  }

  getWidth(){
    this.cardWidth = `${Math.round(((this.calendarPlace.nativeElement.offsetWidth / 12) * 11) / (this.facilities.length + 1))}px`;
  }

  getCalendar(){
    this._calendarServices.getCalendarById(this.calendarId,this.token).subscribe((calendar)=>{

      this.week = [{ date: new Date(calendar.monday.date), id: calendar.monday._id },
      { date: new Date(calendar.tuesday.date), id: calendar.tuesday._id },
      { date: new Date(calendar.wednesday.date), id: calendar.wednesday._id },
      { date: new Date(calendar.thursday.date), id: calendar.thursday._id },
      { date: new Date(calendar.friday.date), id: calendar.friday._id },
      { date: new Date(calendar.saturday.date), id: calendar.saturday._id },
      { date: new Date(calendar.sunday.date), id: calendar.sunday._id },
      ];

      console.log(this.week)
    })
  }

  async toDay(day) {
    console.log(day)
    this.router.navigate(['./day', this.calendarId, day])
    await this.activatedRoute.params.subscribe(params => {
      this.currentDay = params["day"];
    })
    this.render()
  }
  
}

