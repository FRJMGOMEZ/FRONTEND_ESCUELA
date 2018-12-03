import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProfessorModalController {
  public hidden: string = "hidden";
  public notification = new EventEmitter<any>();

  constructor() {}

  ocultarModalProfesor() {
    this.hidden = "hidden";
  }

  mostrarModalProfesor() {
    this.hidden = "";
  }
}
