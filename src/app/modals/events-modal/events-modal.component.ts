import { Component, OnInit} from '@angular/core';
import { EventModalController } from './eventsModal.controller';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { SubjectServices } from '../../providers/subject.service';
import { Professor } from '../../models/professor.model';
import { Subject } from '../../models/subject.model';
import { CalendarService } from '../../providers/calendar.service';
import { Event } from '../../models/event.model';
import * as _ from "underscore";

@Component({
  selector: "app-events-modal",
  templateUrl: "./events-modal.component.html",
  styleUrls: ["./events-modal.component.css"]
})
export class EventsModalComponent implements OnInit {
  
  userOnline: User;
  token: string;

  page: string = "1";
  clock: number;

  facilitie: any = { id: undefined, events: [] };
  day: any;
  hour: any;
  position:string
  
  start: any;
  time: any = { minutes: 0, hour: 0 };
  repetition: boolean = false
  name:string
  description:string
  professors: Professor[];
  selectedProfessors: Professor[] = [];
  subjects: Subject[];
  selectedSubjects: Subject[] = [];

  timeAvailable: number = 12;

  eventCreated:any
  eventId:string

  constructor(
    public _modalController: EventModalController,
    private _userServices: UserServices,
    private _professorServices: ProfessorsServices,
    private _subjectServices: SubjectServices,
    private _calendarServices: CalendarService
  ) {
    this.token = this._userServices.token;

    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {
    this._calendarServices.daySource$.subscribe(day => {
      this.day = day;
    });

    this._modalController.notification.subscribe(res => {

      if(res){

        if (res.facilitieId) {

          this.facilitie.id = res.facilitieId;
          this.position = res.position;
          this.hour = this.day[String(parseInt(this.position))];

         this.checkTimeAvailable().then((res)=>{

           this.getProfessors();
           this.getSubjects();

         })
        }
        if(res.id){
    
          this._calendarServices.getEventById(res.id,this.token).subscribe((event)=>{
                this.eventCreated = event;
                this.page = '5';
          })
        }
      }     
    });
  }

  checkTimeAvailable(){
    return new Promise((resolve,reject)=>{
      if (
        this.day[parseInt(this.position) + 11] &&
        this.day[parseInt(this.position) + 11].length > 0
      ) {
          for (let event of this.day[parseInt(this.position) + 11]) {
            if (event.instalacion === this.facilitie.id) {
              this.timeAvailable = 11;
            }
          }
        }
      if (
        this.day[parseInt(this.position) + 10] &&
        this.day[parseInt(this.position) + 10].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 10]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 10;
          }
        }
      }

      if (
        this.day[parseInt(this.position) + 9] &&
        this.day[parseInt(this.position) + 9].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 9]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 9;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 8] &&
        this.day[parseInt(this.position) + 8].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 8]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 8;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 7] &&
        this.day[parseInt(this.position) + 7].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 7]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 7;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 6] &&
        this.day[parseInt(this.position) + 6].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 6]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 6;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 5] &&
        this.day[parseInt(this.position) + 5].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 5]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 5;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 4] &&
        this.day[parseInt(this.position) + 4].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 4]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 4;
          }
        }
      }

      if (
        this.day[parseInt(this.position) + 3] &&
        this.day[parseInt(this.position) + 3].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 3]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 3;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 2] &&
        this.day[parseInt(this.position) + 2].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 2]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 2;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 1] &&
        this.day[parseInt(this.position) + 1].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 1]) {
          if (event.instalacion === this.facilitie.id) {
            this.timeAvailable = 1;
          }
        }
      }

      this.timeAvailable -= Number(this.position);

           this.clock = Number(this.position) - parseInt(this.position);

           for (let event of this.hour) {

             if (event.posicion === this.position + 0.75 && event.instalacion === this.facilitie.id) {
               this.timeAvailable = 0.75;
             }
           }

           for (let event of this.hour) {
             if (event.posicion === this.position + 0.5 && event.instalacion === this.facilitie.id) {
               this.timeAvailable = 0.5;
             }
           }

           for (let event of this.hour) {
             if (event.posicion === this.position + 0.25 && event.instalacion === this.facilitie.id) {
               this.timeAvailable = 0.25;
             }
           }
    resolve()
    })
  }

  switch(div: string, way?: string) {
   if (div === "1") {
     this.timeAvailable -= Number(this.start);
      this.page = "2";
    }
    if (div === "2") {
      if (way && way === "prev") {
        this.timeAvailable += Number(this.start);
        this.time.hour = 0;
        this.time.minutes = 0;
        this.page = "1";
      } else {
        this.page = "3";
      }
    }
    if (div === "3") {
      if (way && way === "prev") {
        this.page = '2'
      } else {
        this.page = "4";
      }
    }
    if (div === "4") {
      if (way && way === "prev") {
        this.page = "3";
      }
    }
  }

 
  getProfessors() {
    this._professorServices.getProfessors(this.token).subscribe(professors => {
      this.professors = professors;
    });
  }

  getSubjects() {
    this._subjectServices.getSubjects(this.token).subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  addProfessor(id: string) {
    if (id) {
  
      let professor = this.professors.find(professor => {
        return professor._id === id;
      });

      this.selectedProfessors.push(professor);

      this.professors = this.professors.filter(professor => {
        return professor._id != id;
      });
    }
  }

  addSubject(id: string) {
    if (id) {
    
      let subject = this.subjects.find(subject => {
        return subject._id === id;
      });

      this.selectedSubjects.push(subject);

      this.subjects = this.subjects.filter(subject => {
        return subject._id != id;
      });
    }
  }

  createEvent() {
    let position = Number(this.position) + Number(this.start);
    let duration = Number(this.time.hour) + Number((this.time.minutes/100))
    let professors = []
    this.selectedProfessors.forEach((professor)=>{ professors.push(professor._id) })
    let subjects = []
    this.selectedSubjects.forEach((subject)=>{subjects.push(subject._id)})
    this.clock = 0
    let event = new Event(this.name, this.description, duration, position, this.repetition, this.userOnline._id, this.facilitie.id, professors, subjects)
    this._calendarServices.postEvent(event,this.token).subscribe((event:Event)=>{
    this.eventCreated = event;
    this._calendarServices.pushEvent(event,this.day._id,this.token).subscribe((day)=>{
      this._modalController.notification.emit()
      //this._modalController.hideModal()
      this.page = '5';
      })
    })
  }

  changeEvent(){  
    let currentPositionDecimals = String(this.position).split('.')[1];
    let eventsBefore=[];

    if (currentPositionDecimals != undefined) {

    for (let event of this.hour) {
     
       if (this.facilitie.id === event.instalacion) {
         if (event._id != this.eventCreated._id) { 
          let eventDecimals = String(event.posicion).split('.')[1]
          if(eventDecimals === undefined || Number(eventDecimals) < Number(currentPositionDecimals) ){
            eventsBefore.push(event)
          }     
         }
     }
    }
    if (eventsBefore.length === 0) {
      let decimals =  String(this.position).split('.')[1];
      this.timeAvailable += Number(decimals)/100;
      this.clock = 0;
      this.position = String(this.position).split('.')[0];
      this.page = "1";return
    }else{
      eventsBefore = _.sortBy(eventsBefore, (event) => {
        return event.position})
      if (eventsBefore.length === 3) { this.page = '1';return}
      else{
        if(eventsBefore.length === 2){
          let eventDecimals = String(eventsBefore[1].posicion).split(".")[1];
          if (eventDecimals === '5') { eventDecimals = '50' }
          if (Number(currentPositionDecimals) - Number(eventDecimals) === 25) {
            this.page = '1';return
          } else {
            let position = Number(this.position) - 0.25;
            this.position= String(position);
            this.clock -=0.25;
            this.timeAvailable -=0.25
            this.page = "1";
            return
          }
        }else{
          if(eventsBefore.length === 1){
            let eventDecimals = String(eventsBefore[0].posicion).split(".")[1];
            if (Number(currentPositionDecimals) - Number(eventDecimals) === 25) {
              this.page = "1";return
            }else{
              if (eventDecimals === undefined) { this.page = '1';return}else{
                let position = Number(this.position) - 0.25;
                this.position = String(position);
                this.clock -= 0.25;
                this.timeAvailable -= 0.25
                this.page = "1";
                return
              }
            }   
          }
        }
      }   
  } 
} else { this.page = '1';return}
    
  }

  hideModal() {
    this._modalController.hideModal();
    this.timeAvailable = 12;
    this.page = "1";
    this.start = '0';
    this.time = { minutes: 0, hour: 0 };
    this.repetition = false;
    this.name=undefined;
    this.description = undefined
    this.professors = undefined;
    this.professors = [];
    this.subjects = undefined;
    this.selectedSubjects = [];
    this.eventCreated = null;
    this.timeAvailable = 12;
  }

  
}

