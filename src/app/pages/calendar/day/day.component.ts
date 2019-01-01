import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from '../../../providers/calendar.service';
import { UserServices } from '../../../providers/user.service';
import { FacilitiesService } from '../../../providers/facilities.service';
import { EventModalController } from '../../../modals/events-modal/eventsModal.controller';
import { Event } from 'src/app/models/event.model';


@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {

  @ViewChild('eventDivision') eventDivision: ElementRef;

  token: string

  day:string;
  calendarId:string;

  public events:Event[]

  public facilities:any[]

  public notification:EventEmitter<void> = new EventEmitter<void>()

  constructor(private activatedRoute: ActivatedRoute,
              private renderer: Renderer2,
              private _calendarServices:CalendarService,
              private _userServices:UserServices,
              private _facilitiesServices:FacilitiesService,
              private _modalEventController:EventModalController,
              ) {

    this.token = this._userServices.token;            

    this.activatedRoute.params.subscribe((params)=>{      
      this.day = params['day']
      this.calendarId = params['calendarId']
    })
  }

  ngOnInit() {

    this._calendarServices.getCalendarById(this.calendarId,this.token,this.day).subscribe((events)=>{

      this.events = events

      this._facilitiesServices.getFacilities(this.token).subscribe((facilities) => {

        this.facilities = facilities;

        this.facilities.forEach((facilitie)=>{
          let space = '720';
          facilitie.space = space;
        })

      }) 
    }) 
  }

  createEvent(position:number,facilitieId:string){

    this._modalEventController.showModal(this.day,this.calendarId)

    this._modalEventController.notification.emit({position,facilitieId})
  } 

}

