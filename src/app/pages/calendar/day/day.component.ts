
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { Event } from 'src/app/models/event.model';
import { CalendarComponent } from '../calendar.component';
import { CalendarService } from '../../../providers/calendar.service';
import { CalendarModalController } from '../../../modals/calendar-modal/calendar-modal.controller';

@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit{

  @ViewChild('calendarPlace') calendarPlace : ElementRef

  currentDay: any;
  calendarId:string

  week:any[]

  hours: Event[] = [];

  facilities: any[];

  cardWidth:string

  inProgress:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _eventModalController: EventModalController,
    private router:Router,
    public calendarComponent:CalendarComponent,
    private _calendarServices:CalendarService,
    private _calendarModalController:CalendarModalController
  ) { }

  ngOnInit() {

    this.inProgress = true;

    this.activatedRoute.params.subscribe(params => {
      this.currentDay = params["day"];
      this.calendarId = params['calendarId']
  
    if (this.calendarId === 'no-calendar') {

      this.calendarComponent.postCalendar(new Date()).then((calendar:any)=>{

        this._calendarServices.calendarsSource.next(calendar);
        
        let day = new Date();
        let dayId;

        switch(day.getDay()){
          case 1 : dayId = calendar.monday._id;
          break;
          case 2: dayId = calendar.tuesday._id;
            break;
          case 3: dayId = calendar.wednesday._id;
            break;
            case 4: dayId = calendar.thursday._id ;
          break;
          case 5: dayId = calendar.friday._id;
            break;
          case 6: dayId = calendar.saturday._id;
            break;
          case 0: dayId = calendar.sunday._id;
            break;
        }
        this.router.navigate(['/day',calendar._id,dayId])
      })

    } else {
        this.calendarComponent.getCalendar(this.calendarId).then(() => {
         this.week = this.calendarComponent.week;
          this.calendarComponent.checkCalendars().then((calendars)=>{
            this.inProgress = false;
            this.render()
          })
        })      
    }
    })

    this._eventModalController.notification.subscribe(res => {
      if (!res) {
        this.render()
      }
    });

    this._calendarModalController.notification.subscribe((res)=>{
     if(res){
      let date = res;
       this.calendarComponent.postCalendar(new Date(date)).then((calendar: any) => {
         this._calendarServices.calendarsSource.next(calendar);
         let day = new Date();
         let dayId;

         switch (day.getDay()) {
           case 1: dayId = calendar.monday._id;
             break;
           case 2: dayId = calendar.tuesday._id;
             break;
           case 3: dayId = calendar.wednesday._id;
             break;
           case 4: dayId = calendar.thursday._id;
             break;
           case 5: dayId = calendar.friday._id;
             break;
           case 6: dayId = calendar.saturday._id;
             break;
           case 7: dayId = calendar.sunday._id;
             break;
         }
         this.router.navigate(['/day', calendar._id, dayId])
       })

     
     }
    }) 
  }

  async render() {
   let res = await this.calendarComponent.getDay(this.currentDay);
   this.hours = res['hours'];
   let res2 = await this.calendarComponent.getFacilities();
   this.facilities = res2['facilities'];
   this.getWidth()
  
  }

  getWidth(){
    this.cardWidth = `${Math.round(((this.calendarPlace.nativeElement.offsetWidth / 12) * 11) / (this.facilities.length + 1))}px`;
  }

  async toOtherDay(day) {
    this.inProgress = true;
    this.router.navigate(['./day', this.calendarId, day])
  }

  async toOtherWeek(calendarId:any){
    this.inProgress = true;
   let res = await this.calendarComponent.navigateToCalendar(calendarId);
   let dayId = res['day'];
   this.router.navigate(["/day", calendarId,dayId])
  }

  showCalendarModal(){
    console.log(this.calendarId)
    this._calendarModalController.showModal(this.calendarId,this.currentDay)
  }

 // swipeCalendars(calendar:any){
   // this.inProgress = true;
    //this.calendarComponent.checkCalendars(calendar).then(()=>{
     // this.inProgress = false;
    //})
 // } 
 // swipeCalendarsBack(calendar){ 
   // let monday = new Date(calendar.monday.date);
   // monday.setDate(monday.getDate()+7)
   // calendar.monday.date = monday;
   // this.calendarComponent.checkCalendars(calendar).then(()=>{
   // })
 // }
}

