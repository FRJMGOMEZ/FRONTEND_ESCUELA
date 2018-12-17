import { Component, OnInit } from '@angular/core';
import { SubjectServices } from '../../providers/subject.service';
import { CalendarService } from '../../providers/calendar.service';
import { UserServices } from '../../providers/user.service';
import { FacilitiesService } from '../../providers/facilities.service';
import { ActivatedRoute } from '@angular/router';
import { EventModalController } from 'src/app/modals/events-modal/eventsModal.controller';
import { Calendar } from 'src/app/models/calendar.model';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {


  persist = true;
  

  token: string

  facilities:any[]=[]
  rowsWidth: string

  calendars: any[] = []

  calendar:Calendar[]

  week:number[]

  days:number[]

  constructor(private _userServices:UserServices,
              private _subjectsService:SubjectServices,
              private _calendarServices:CalendarService,
              private _facilitiesService:FacilitiesService,
              private ar:ActivatedRoute,
              public _eventModalController:EventModalController) { 

    this.token = this._userServices.token;            
  }

  ngOnInit() {

    this.ar.params.subscribe((params) => {

      let id = params['id'];

      this._calendarServices.getCalendarById(id, this.token).subscribe((calendar) => {

        this.calendar = calendar;

        let date = new Date(calendar.fecha)

        let calendarDate = date.getDate();

        let calendarDay = date.getDay();

        switch (calendarDay) {
          case 1: this.week = [calendarDate, calendarDate + 1, calendarDate + 2, calendarDate + 3,calendarDate + 4, calendarDate + 5, calendarDate + 6];
            break;
          case 2: this.week = [calendarDate - 1, calendarDate, calendarDate + 1, calendarDate + 2, calendarDate + 3, calendarDate + 4, calendarDate + 5];
            break;
          case 3: this.week = [calendarDate - 2, calendarDate - 1, calendarDate, calendarDate + 1, calendarDate + 2, calendarDate + 3, calendarDate + 4];
            break;
          case 4: this.week = [calendarDate - 3, calendarDate - 2, calendarDate - 1, calendarDate, calendarDate + 1, calendarDate + 2, calendarDate + 3];
            break;
          case 5: this.week = [calendarDate - 4, calendarDate - 3, calendarDate - 2, calendarDate - 1, calendarDate, calendarDate + 1, calendarDate + 2];
            break;
          case 6: this.week = [calendarDate - 5, calendarDate - 4, calendarDate - 3, calendarDate - 2, calendarDate - 1, calendarDate, calendarDate + 1];
            break;
          case 7: this.week = [calendarDate - 6, calendarDate - 5, calendarDate - 4, calendarDate - 3, calendarDate - 2, calendarDate - 1, calendarDate];
            break;
        }
      })
    })

    this._facilitiesService.getFacilities(this.token).subscribe((facilities)=>{

      this.facilities = facilities;

      this.rowsWidth = `${100/this.facilities.length}%`; 
    })

    this._calendarServices.getCalendars(this.token).subscribe((calendars)=>{

      if(calendars.length === 0){

        this._calendarServices.postCalendar(this.token).subscribe((calendar)=>{

           this.calendars.push = calendar

           this.calendar = calendar;            
        })

        return

      }else{

        this.calendars = calendars;

        let lapso = 604800000;

        let lastDate = new Date(this.calendars[this.calendars.length - 1].fecha)

        lapso = lapso - (lapso/7)*lastDate.getDay()+1; 

        let now = new Date()
       
        if (now.getTime() - lastDate.getTime() > lapso) {

            this._calendarServices.postCalendar(this.token).subscribe((calendar)=>{

              this.calendars.push(calendar)
            })
        } 
     }
  })
  
  }
   event(position:number, day:string){

    this._eventModalController.showModal(day,this.calendar['_id'])

    this._eventModalController.notification.emit(position)

    this._eventModalController.notification.subscribe((res)=>{


    })
    }

  }
    
   
