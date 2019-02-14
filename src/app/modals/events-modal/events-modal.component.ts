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
  spaceAvailable: number = 12;

  day: any;
  hour: any;

  position: string;
  decimalsOfPosition: number;

  facilitie: any = { id: undefined, events: [] };

  startDecimals: any;
  timeRepresentation: any = { decimal: 0, integer: 0 };
  repetition: boolean = false;
  name: string;
  description: string;
  professors: Professor[];
  selectedProfessors: Professor[] = [];
  subjects: Subject[];
  selectedSubjects: Subject[] = [];

  eventCreated: any;

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

    this._calendarServices.currentDay$.subscribe((day)=>{
      this.day = day;
    })
  
    this._modalController.notification.subscribe(res => {
      if (res) {
        if (res.facilitieId) {
          this.hour = this.day[`hour${parseInt(res.position)}`];
          this.decimalsOfPosition = Number(res.position) - parseInt(res.position);
          this.facilitie.id = res.facilitieId;
          this.position = res.position;

          this.checkSpaceAvailable().then(res => {
            this.getProfessors();
            this.getSubjects();
          });
        }
        if (res.eventId) {
          this._calendarServices
            .getEventById(res.eventId, this.token)
            .subscribe(event => {
              this.eventCreated = event;
              this.page = "5";
            });
        }
      }
    });
  }

  checkSpaceAvailable() {

    return new Promise((resolve, reject) => {  
       
      if (
        this.day[parseInt(this.position) + 11] &&
        this.day[parseInt(this.position) + 11].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 11]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 11;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 10] &&
        this.day[parseInt(this.position) + 10].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 10]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 10;
          }
        }
      }

      if (
        this.day[parseInt(this.position) + 9] &&
        this.day[parseInt(this.position) + 9].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 9]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 9;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 8] &&
        this.day[parseInt(this.position) + 8].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 8]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 8;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 7] &&
        this.day[parseInt(this.position) + 7].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 7]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 7;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 6] &&
        this.day[parseInt(this.position) + 6].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 6]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 6;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 5] &&
        this.day[parseInt(this.position) + 5].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 5]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 5;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 4] &&
        this.day[parseInt(this.position) + 4].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 4]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 4;
          }
        }
      }

      if (
        this.day[parseInt(this.position) + 3] &&
        this.day[parseInt(this.position) + 3].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 3]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 3;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 2] &&
        this.day[parseInt(this.position) + 2].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 2]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 2;
          }
        }
      }
      if (
        this.day[parseInt(this.position) + 1] &&
        this.day[parseInt(this.position) + 1].length > 0
      ) {
        for (let event of this.day[parseInt(this.position) + 1]) {
          if (event.instalacion === this.facilitie.id) {
            this.spaceAvailable = 1;
          }
        }
      }

      if(Number(this.spaceAvailable) === 12){
        this.spaceAvailable = this.spaceAvailable - Number(this.position);
      }

      if(this.hour.length > 0){

      for (let event of this.hour) {
        if (
          event.posicion === this.position + 0.75 &&
          event.instalacion === this.facilitie.id
        ) {
          this.spaceAvailable = 0.75;
        }
      }

      for (let event of this.hour) {
        if (
          event.posicion === this.position + 0.5 &&
          event.instalacion === this.facilitie.id
        ) {
          this.spaceAvailable = 0.5;
        }
      }

      for (let event of this.hour) {
        if (
          event.posicion === this.position + 0.25 &&
          event.instalacion === this.facilitie.id
        ) {
          this.spaceAvailable = 0.25;
        }
      }
      }

      resolve();
    });
  }

  switch(div: string, way?: string) {
    if (div === "1") {
      this.spaceAvailable -= Number(this.startDecimals);
      this.page = "2";
    }
    if (div === "2") {
      if (way && way === "prev") {
        this.spaceAvailable += Number(this.startDecimals);
        this.timeRepresentation.hour = 0;
        this.timeRepresentation.decimals = 0;
        this.page = "1";
      } else {
        this.page = "3";
      }
    }
    if (div === "3") {
      if (way && way === "prev") {
        this.page = "2";
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

  postEvent() {
    let position = Number(this.position) + Number(this.startDecimals);
    let duration = Number(this.timeRepresentation.integer) + Number(this.timeRepresentation.decimals / 100);
    let professors = [];
    this.selectedProfessors.forEach(professor => {
      professors.push(professor._id);
    });
    let subjects = [];
    this.selectedSubjects.forEach(subject => {
      subjects.push(subject._id);
    });
    let event = new Event(
      this.name,
      this.description,
      duration,
      position,
      this.repetition,
      this.userOnline._id,
      this.facilitie.id,
      professors,
      subjects
    );
    this._calendarServices
      .postEvent(event, this.token)
      .subscribe((event: Event) => {
        this.eventCreated = event;
        this._calendarServices
          .pushEvent(event, this.day._id, this.token)
          .subscribe(day => {
            this._modalController.notification.emit();
            this.page = "5";
          });
      });
  }

  putEvent() {
    this.eventCreated.posicion =
      Number(this.position) + Number(this.startDecimals);
    this.eventCreated.duracion =
      Number(this.timeRepresentation.integer) + Number(this.timeRepresentation.decimals / 100);
    let professors = [];
    this.selectedProfessors.forEach(professor => {
      professors.push(professor._id);
    });
    this.eventCreated.profesores = professors;
    let subjects = [];
    this.selectedSubjects.forEach(subject => {
      subjects.push(subject._id);
    });
    this.eventCreated.materias = subjects;
    this._calendarServices
      .putEvent(this.eventCreated._id, this.eventCreated, this.token)
      .subscribe(event => {
        this.eventCreated = event;
        this._modalController.notification.emit();
        this.page = "5";
      });
  }

  checkSpaceBack() {
    let currentPositionDecimals = String(this.position).split(".")[1];
    let eventsBefore = [];

    console.log(this.hour)

    if (currentPositionDecimals != undefined) {
      for (let event of this.hour) {
        if (this.facilitie.id === event.instalacion) {
          if (event._id != this.eventCreated._id) {
            let eventDecimals = String(event.posicion).split(".")[1];
            if (
              eventDecimals === undefined ||
              Number(eventDecimals) < Number(currentPositionDecimals)
            ) {
              eventsBefore.push(event);
            }
          }
        }
      }
      if (eventsBefore.length === 0) {
        let decimals = String(this.position).split(".")[1];
        this.spaceAvailable += Number(decimals) / 100;
        this.decimalsOfPosition = 0;
        this.position = String(this.position).split(".")[0];
        this.page = "1";
        return;
      } else {
        eventsBefore = _.sortBy(eventsBefore, event => {
          return event.position;
        });
        if (eventsBefore.length === 3) {
          this.page = "1";
          return;
        } else {
          if (eventsBefore.length === 2) {
            let eventDecimals = String(eventsBefore[1].posicion).split(".")[1];
            if (eventDecimals === "5") {
              eventDecimals = "50";
            }
            if (
              Number(currentPositionDecimals) - Number(eventDecimals) ===
              25
            ) {
              this.page = "1";
              return;
            } else {
              let position = Number(this.position) - 0.25;
              this.position = String(position);
              this.decimalsOfPosition -= 0.25;
              this.spaceAvailable -= 0.25;
              this.page = "1";
              return;
            }
          } else {
            if (eventsBefore.length === 1) {
              let eventDecimals = String(eventsBefore[0].posicion).split(
                "."
              )[1];
              if (
                Number(currentPositionDecimals) - Number(eventDecimals) ===
                25
              ) {
                this.page = "1";
                return;
              } else {
                if (eventDecimals === undefined) {
                  this.page = "1";
                  return;
                } else {
                  let position = Number(this.position) - 0.25;
                  this.position = String(position);
                  this.decimalsOfPosition -= 0.25;
                  this.spaceAvailable -= 0.25;
                  this.page = "1";
                  return;
                }
              }
            }
          }
        }
      }
    } else {
      this.page = "1";
      return;
    }
  }

  hideModal() {
    this._modalController.hideModal();
    this.spaceAvailable = 12;
    this.page = "1";
    this.startDecimals = "0";
    this.timeRepresentation = { decimals: 0, integer: 0 };
    this.repetition = false;
    this.name = undefined;
    this.description = undefined;
    this.professors = undefined;
    this.professors = [];
    this.subjects = undefined;
    this.selectedSubjects = [];
    this.eventCreated = null;
    this.spaceAvailable = 12;
    this.decimalsOfPosition = 0;
  }
}

