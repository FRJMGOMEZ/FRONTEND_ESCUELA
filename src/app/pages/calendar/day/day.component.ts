import { Component, OnInit, ViewChild, ElementRef,EventEmitter } from '@angular/core';
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

  day:any;

  hours:Event[]


  public events:Event[]

  public facilities:any[]

  public notification:EventEmitter<void> = new EventEmitter<void>()

  constructor(private activatedRoute: ActivatedRoute,
              private _calendarServices:CalendarService,
              private _userServices:UserServices,
              private _facilitiesServices:FacilitiesService,
              private _eventModalController:EventModalController
              ) {

    this.token = this._userServices.token;            

    this.activatedRoute.params.subscribe((params)=>{      
      this.day = params['day']
    })
  }

  ngOnInit() {

    this.getDay()
    this.getFacilities() 

    this._eventModalController.notification.subscribe((res)=>{

      if(!res){

        this.getDay()
      }
    })   
  }
  
  
  getFacilities(){
    this._facilitiesServices.getFacilities(this.token).subscribe((facilities) => {
      if(facilities){
        facilities.forEach((facilitie) => {
          let space = 720;
          facilitie.space = space;    
        })
        this.facilities = facilities;
      }
    }) 
  }

  getDay(){
    this._calendarServices.getDayById(this.day,this.token).subscribe((day)=>{
      this.hours = [day['0'], day['1'], day['2'], day['3'], day['4'], day['5'], day['6'], day['7'], day['8'], day['9'], day['10'], day['11']]
    })
  }
}

