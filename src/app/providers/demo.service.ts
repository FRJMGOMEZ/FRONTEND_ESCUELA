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
  company:boolean = false;
  incomes:boolean = false;
  payments:boolean = false;
  managerOverview:boolean = false;

  constructor() { }

  ngOnInit(): void {}

  loginPopup(onclick:boolean = false){
    if(!this.login || onclick)
   {Swal.fire({
        title: "USUARIOS ADMINISTRADORES",
     text: 'Los usuarios habilitados como administradores son: freddieQueen@gmail.com , janisJap@gmail.com ,lennonJohn1940@gmail.com ,y ninaSim@gmail.com, el password de los cuatro es 123. Puedes utilizar CHROME para loggearte con uno y MOZILLA para loggearte con otro con el fin de probar la interacción en tiempo real entre los dos'
        , type: "info",
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
        , type: "info",
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
        , type: "info",
        confirmButtonText: "OK",
      }).then(()=>{
        this.data = true;
      })
    }
  }

  calendarPopup(onclick: boolean = false){
    if(onclick){
      Swal.fire({
        title: "BIENVENIDA/O AL CALENDARIO",
        text: 'Muevete libremente entre fechas y crea, edita ,elimina eventos, también puedes asignarlos a tus proyectos; pueden durar solo un día, varias semanas o puedes crearlos para que se prorroguen de forma indefinida. La conexión con los sockets permite la actualización en tiempo real de los eventos establecidos. '
        , type: "info",
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
        , type: "info",
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
        , type: "info",
        confirmButtonText: "OK",
      }).then(() => {
        this.oneProject = true;
      })
    }
  }

  companyPopup(onclick: boolean = false) {
    if (!this.company || onclick) {
      Swal.fire({
        title: "BIENVENIDO/A AL APARTADO DE GRÁFICAS",
        text: 'En este apartado se muestra visualmente el desarrollo del negocio mediante gráficas, utilizando varios criterios dinámicos',
        confirmButtonText: "OK",
        type:'info'
      }).then(() => {
        this.company = true;
      })
    }
  }

  managerOverviewPopup(onclick: boolean = false){
    if (!this.managerOverview || onclick) {
      Swal.fire({
        title: "BIENVENIDA/O AL OVERVIEW DEL APARTADO MANAGER, donde creamos todos la información para la tarificación de royalties",
        text: 'Crear artistas y albúmes y a estos asignales diferentes pistas/tracks con determinados porcentajes para cada artista',
        confirmButtonText: "OK",
        type:'info'
      }).then(() => {
        this.managerOverview = true;
      })
    }
  }

  incomesPopup(onclick: boolean = false) {
    if (!this.incomes || onclick) {
      Swal.fire({
        title: "BIENVENIDO/A AL APARTADO DE GESTIÓN DE LOS INGRESOS POR ROYALTIES",
        text: 'Crea tus nuevos ingresos, asignalos a un determinado acreedor (SGAE, AIE...) y liquidalos creando nuevas liquidaciones' ,
        confirmButtonText: "OK",
        type:'info'
      }).then(() => {
        this.incomes = true;
      })
    }
  }

  paymentsPopup(onclick: boolean = false) {
    if (!this.payments || onclick) {
      Swal.fire({
        title: "BIENVENIDA/O AL APARTADO DE GESTIÓN DE LA LIQUIDACIONES",
        text: 'Una vez creadas las liquidaciones, el último paso para hacerlas efectivas es comunicarlo al artista beneficiario(y por supuesto realizar el pago, implementación en un futuro), elige el modelo de carta que quieres enviar, dale a enviar carta, y listo',
        confirmButtonText: "OK",
        type:'info'
      }).then(() => {
        this.payments = true;
      })
    }
  }
}
