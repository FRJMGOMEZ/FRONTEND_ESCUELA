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
  graphs:boolean = false;
  overview:boolean = false;
  incomes:boolean = false;
  payments:boolean = false;


  constructor() { }



  loginPopup(onclick:boolean = false){
    if(!this.login || onclick)
   {Swal.fire({
        title: "USUARIOS ADMINISTRADORES",
        text: 'Los usuarios habilitados como administradores son: freddieQueen@gmail.com , janisJap@gmail.com ,lennonJohn1940@gmail.com ,y ninaSim@gmail.com, el password de los cuatro es 123. Puedes utilizar CHROME para loggearte con uno y MOZILLA para loggearte con otro con el fin de probar la interacción en tiempo real entre los dos'
        , type: "info",
        confirmButtonText: "OK",
        heightAuto: false
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
        , type: "info",
        confirmButtonText: "OK",
        heightAuto:false
      }).then(()=>{
        this.dashboard = true;
      })
    }
  }

  calendarPopup(onclick: boolean = false) {
    if (!this.calendar || onclick) {
      Swal.fire({
        title: "BIENVENIDO/A AL CALENDARIO",
        text: 'Muevete libremente entre fechas y crea, edita ,elimina eventos, también puedes asignarlos a tus proyectos; pueden durar solo un día, varias semanas o puedes crearlos para que se prorroguen de forma indefinida. La conexión con los sockets permite la actualización en tiempo real de los eventos establecidos. '
        , type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(() => {
        this.calendar = true;
      })
    }
  }

  graphsPopup(onclick: boolean = false) {
    if (!this.graphs || onclick) {
      Swal.fire({
        title: "APARTADO DE GRAFICAS",
        text: 'Observa y analiza la evolución de ingresos y liquidaciones, según los parámetros establecidos',
        type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(() => {
        this.graphs = true;
      })
    }
  }
  overviewPopup(onclick: boolean = false) {
    if (!this.overview || onclick) {
      Swal.fire({
        title: "MANAGER OVERVIEW",
        text: 'Crea artistas y albúmes, y dentro de estos, tracks(en los que puedes asignar porcentajes de liquidacion por cada artista participante en su creación)',
        type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(() => {
        this.overview = true;
      })
    }
  }

  incomesPopup(onclick: boolean = false) {
    if (!this.incomes || onclick) {
      Swal.fire({
        title: "INGRESOS POR ROYALTIES",
        text: 'Crea ingresos asignados a cada empresa o institución acreedora (ej:SGAE, AIE..), y liquídalos entre los artistas y tu empresa',
        type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(() => {
        this.incomes = true;
      })
    }
  }

  paymentsPopup(onclick: boolean = false) {
    if (!this.payments || onclick) {
      Swal.fire({
        title: "LIQUIDACIONES DE ROYALTIES",
        text: 'Gestiona las liquidaciones por royalties y envía comunicaciones de las mismas a cada artista'
        , type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(() => {
        this.payments = true;
      })
    }
  }

  dataPopup(onclick: boolean = false){
    if(!this.data || onclick){
      Swal.fire({
        text: 'Añade, edita y elimina items de los diferentes registros, puedes mantener un registro actualizado de las materias,alumnos y profesores de la escuela. También puedes mantener un registro de las instalaciones disponibles en la escuela'
        , type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(()=>{
        this.data = true;
      })
    }
  }

 

  projectsPopup(onclick: boolean = false){
    if (!this.projects || onclick) {
      Swal.fire({
        title: "BIENVENIDO/A A PROYECTOS",
        text: 'Comienza por elegir un proyecto, también puedes crear otro nuevo si quieres'
        , type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(() => {
        this.projects = true;
      })
    }
  }

  oneProjectPopup(onclick: boolean = false){
    if (!this.oneProject || onclick) {
      Swal.fire({
        text: 'Envía mensajes y archivos, revisa los eventos asignados al proyecto, asigna y revisa las tareas que se te han asignado y añade o elimina participantes o admnistradores. Todo se mantiene actualizado en tiempo real.'
        , type: "info",
        confirmButtonText: "OK",
        heightAuto: false
      }).then(() => {
        this.oneProject = true;
      })
    }
  }
}
