import { Component, EventEmitter, OnInit} from '@angular/core';
import { CalendarService } from '../../providers/calendar.service';
import { UserServices } from '../../providers/user.service';
import { FacilitiesService } from '../../providers/facilities.service';
import * as _ from "underscore";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.less"]
})
export class CalendarComponent implements OnInit  {

  token: string;

  currentCalendar:any;
  dayId:string;
  week:any[];
  currentDate:string

  hours: Event[] 

  facilities: any[];

  calendars:any[]=[null,null,null,null];

 

  constructor(
    private _facilitieServices:FacilitiesService,
    private _calendarServices: CalendarService,
    private _userServices: UserServices,
  
  ) {
    this.token = this._userServices.token;   
}

ngOnInit() {}

}


