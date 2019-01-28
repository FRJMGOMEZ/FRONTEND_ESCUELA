import { Injectable, EventEmitter } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class CalendarModalController {
  public hidden: string = "hidden";
  public currentCalendarId: string 
  public dayId:string
  public notification = new EventEmitter<any>();

  constructor() {}

  hideModal() {
    this.hidden = "hidden";
    this.currentCalendarId = ''
    this.dayId = '';
  }

  showModal(calendarId:string, dayId:string) {
    this.currentCalendarId = calendarId;
    this.dayId = dayId;
    this.notification.emit()
    this.hidden = "";
    
  }
}
