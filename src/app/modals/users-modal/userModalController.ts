import { Injectable, EventEmitter } from "@angular/core";
import { User } from "src/app/models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserModalController {
  public id:string
  public hidden: string = "hidden";
  public notification = new EventEmitter<any>();


  constructor() {}

  hideModal() {
    this.hidden = "hidden";
    this.id = '';
  }

  showModal(id:string) {
    this.hidden = "";
    this.id = id;
  }

}
