import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventModalController {
  public hidden: string = "hidden";
  public id: string;
  public day: string;
  public notification = new EventEmitter<any>();

  constructor() {}

  hideModal() {
    this.hidden = "hidden";
    this.id = "";
  }

  showModal(day:string,id: string) {
    this.hidden = "";
    this.id = id;
    this.day = day;
  }
}
