import { Component} from '@angular/core';
import { CalendarModalController } from './calendar-modal.controller';
import { CalendarService } from '../../providers/calendar.service';

@Component({
  selector: "app-calendar-modal",
  templateUrl: "./calendar-modal.component.html",
  styleUrls: ["./calendar-modal.component.scss"]
})
export class CalendarModalComponent {

  constructor(public _modalController:CalendarModalController,
             private _calendarServices:CalendarService) {}

  navigateToDay(date:Date){
    date = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0)
    this._calendarServices.getDayByDate(date.getTime()).subscribe((res:any)=>{
      if(res==='no-day'){
        this._modalController.notification.emit({ date, day: date.getDay() });
        this._modalController.hideModal()
      }
    })
  }

  hideModal() {
    this._modalController.hideModal()
  }
}

