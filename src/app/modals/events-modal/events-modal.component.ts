import { Component, OnInit } from '@angular/core';
import { EventModalController } from './eventsModal.controller';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Event } from '../../models/event.model';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { SubjectServices } from '../../providers/subject.service';
import { Professor } from '../../models/professor.model';
import { Subject } from '../../models/subject.model';
import { EventsService } from '../../providers/events.service';
import { CalendarService } from '../../providers/calendar.service';

@Component({
  selector: 'app-events-modal',
  templateUrl: './events-modal.component.html',
  styleUrls: ['./events-modal.component.css']
})
export class EventsModalComponent implements OnInit {

  userOnline: User
  token:string

  professors:Professor[]
  selectedProfessors:Professor[]=[]

  subjects:Subject[]
  selectedSubjects:Subject[]=[]

  time:any={hour:0,minutes:0}

  timeAvailable:number=12;

  event:Event

  constructor(public _modalController:EventModalController,
             private _userServices:UserServices,
             private _professorServices:ProfessorsServices,
             private _subjectServices:SubjectServices,
             private _eventServices:EventsService,
             private _calendarServices:CalendarService ) {

              this.token = this._userServices.token;

              this.userOnline = this._userServices.userOnline;
              }

  ngOnInit() {
    
    this._modalController.notification.subscribe((number)=>{

      this.timeAvailable = this.timeAvailable - (number - 1);

      this.event = new Event('', '', undefined, number, false, '')

      this.event.materias = [] 
      this.event.profesores = [] 

      this._calendarServices.getCalendarById(this._modalController.id,this.token).subscribe((calendar)=>{

        if(this._modalController.day === 'lunes'){

          //////Obtenemos todos los eventos del lunes////////


        }        
      })                      

    })

    this._professorServices.getProfessors(this.token).subscribe((professors)=>{

      this.professors = professors;
    })

    this._subjectServices.getSubjects(this.token).subscribe((subjects)=>{

      this.subjects = subjects;
    })
  }


  hideModal() {

    this._modalController.hideModal()
  }

  addProfessor(id:string){

    if(id){

      this.event.profesores.push(id)

      let professor = this.professors.find((professor) => { return professor._id === id })

      this.selectedProfessors.push(professor)

      this.professors = this.professors.filter((professor) => { return professor._id != id })
    }
  }

  addSubject(id:string){

    if(id){

      this.event.materias.push(id)

      let subject = this.subjects.find((subject) => { return subject._id === id })

      this.selectedSubjects.push(subject)

      this.subjects = this.subjects.filter((subject) => { return subject._id != id })
    }   
  }

  createEvent(){

    this.event.duracion = Number(this.time.minutes / 100) + Number(this.time.hour) ;

    this._eventServices.postEvent(this.event, this.token).subscribe((event:any)=>{

      this._calendarServices.addEvent(this._modalController.id,this._modalController.day,event._id,this.token)
       
    })
  }
}
