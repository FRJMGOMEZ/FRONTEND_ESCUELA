import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProjectModalController {
  public hidden: string = "hidden";
  public notification = new EventEmitter<any>();

  constructor() {}

  ocultarModalProyecto() {
    this.hidden = "hidden";
  }

  mostrarModalProyecto() {
    this.hidden = "";
  }
}
