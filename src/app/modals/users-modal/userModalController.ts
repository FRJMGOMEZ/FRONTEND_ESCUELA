import { Injectable, EventEmitter } from "@angular/core";
import { User } from "src/app/models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserModalController {
  public usuario: User;
  public hidden: string = "hidden";
  public notificationUsuario = new EventEmitter<any>();


  constructor() {}

  ocultarModalUsuario() {
    this.hidden = "hidden";
    this.usuario = null;
  }

  mostrarModalUsuario(usuario) {
    this.hidden = "";
    this.usuario = usuario;
  }

}
