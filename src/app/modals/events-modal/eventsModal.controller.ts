import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventModalController {
  public hidden: string = "hidden";
  public notification = new EventEmitter<any>();
  constructor() {}

  hideModal() {
    this.hidden = "hidden";
  }

  showModal() {
    this.hidden = "";
  }
}
