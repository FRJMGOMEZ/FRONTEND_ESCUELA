import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserModalController {
  public hidden: string = "hidden";
  public type:string
  public notification = new EventEmitter<any>();

  constructor() {}

  hideModal() {
    this.hidden = "hidden";
    this.type = undefined;
  }

  showModal(type:string) {
    this.hidden = "";
    this.type = type;
  }

}
