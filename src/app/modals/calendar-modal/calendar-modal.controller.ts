import { Injectable, EventEmitter } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class CalendarModalController {
  public hidden: string = "hidden";
  public notification = new EventEmitter<any>();

  constructor() {}

  hideModal() {
    this.hidden = "hidden";
  }

  showModal() {
    this.notification.emit()
    this.hidden = "";
    
  }
}
