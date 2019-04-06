import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  
  login:boolean=false;
  dashboard:boolean=false;
  calendar:boolean = false;
  data:boolean= false;
  projects:boolean= false;
  oneProject:boolean=false;

  constructor() { }

  ngOnInit(): void {}

  loginPopup(onclick:boolean = false){
    if(!this.login || onclick)
   {Swal.fire({
        title: "USUARIOS ADMINISTRADORES",
        text: 'Los usuarios habilitados como administradores son: freddieQueen@gmail.com con password 123 y lennonJohn1940@gmail.com con password 123. Puedes utilizar CHROME para loggearte con uno y MOZILLA para loggearte con otro con el fin de probar la interacción en tiempo real entre los dos'
        , type: "warning",
        confirmButtonText: "OK",
      }).then(() => {
        this.login = true;
      })
    }      
  }

  dashboardPopup(onclick: boolean = false){
    if(!this.dashboard || onclick){
      Swal.fire({
        title: "BIENVENIDA/O AL DASHBOARD",
        text: 'En esta pantalla obtenemos todos los cambios producidos en nuestros calendario de eventos , las tareas que nos son asignadas , las que tenemos pendientes en los proyectos de los que formamos parte, además de los mensajes recibidos en los mismos, todo ello se actualiza en tiempo real, gracias al uso de sockets'
        , type: "warning",
        confirmButtonText: "OK",
      }).then(()=>{
        this.dashboard = true;
      })
    }
  }

  dataPopup(onclick: boolean = false){
    if(!this.data || onclick){
      Swal.fire({
        text: 'Añade, edita y elimina items de los diferentes registros, puedes mantener un registro actualizado de las materias,alumnos y profesores de la escuela. También puedes mantener un registro de las instalaciones disponibles en la escuela'
        , type: "warning",
        confirmButtonText: "OK",
      }).then(()=>{
        this.data = true;
      })
    }
  }

  calendarPopup(onclick: boolean = false){
    if(!this.calendar || onclick){
      Swal.fire({
        title: "BIENVENIDO/A AL CALENDARIO",
        text: 'Muevete libremente entre fechas y crea, edita ,elimina eventos, también puedes asignarlos a tus proyectos; pueden durar solo un día, varias semanas o puedes crearlos para que se prorroguen de forma indefinida. La conexión con los sockets permite la actualización en tiempo real de los eventos establecidos. '
        , type: "warning",
        confirmButtonText: "OK",
      }).then(() => {
        this.calendar=true;
      })
    }
  }

  projectsPopup(onclick: boolean = false){
    if (!this.projects || onclick) {
      Swal.fire({
        title: "BIENVENIDO/A A PROYECTOS",
        text: 'Comienza por elegir un proyecto, también puedes crear otro nuevo si quieres'
        , type: "warning",
        confirmButtonText: "OK",
      }).then(() => {
        this.projects = true;
      })
    }
  }

  oneProjectPopup(onclick: boolean = false){
    if (!this.oneProject || onclick) {
      Swal.fire({
        text: 'Envía mensajes y archivos, revisa los eventos asignados al proyecto, asigna y revisa las tareas que se te han asignado y añade o elimina participantes o admnistradores. Todo se mantiene actualizado en tiempo real.'
        , type: "warning",
        confirmButtonText: "OK",
      }).then(() => {
        this.oneProject = true;
      })
    }
  }
}
