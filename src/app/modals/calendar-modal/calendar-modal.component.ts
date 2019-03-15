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
    let dateToSearch = new Date(date.getFullYear(),date.getMonth(),date.getDate(),1,0,0,0);
    this._calendarServices.getDayByDate(dateToSearch).subscribe((res:any)=>{
      console.log(res)
      if(res==='no-day'){
        let dateInMilliseconds = date.getTime();
        this._modalController.notification.emit({ date: dateInMilliseconds, day: date.getDay() });
        this._modalController.hideModal()
      }
    })
  }

  hideModal() {
    this._modalController.hideModal()
  }
}

