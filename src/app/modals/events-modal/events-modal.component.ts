import { Component, OnInit } from '@angular/core';
import { EventModalController } from './eventsModal.controller';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { SubjectServices } from '../../providers/subject.service';
import { Professor } from '../../models/professor.model';
import { Subject } from '../../models/subject.model';
import { CalendarService } from '../../providers/calendar.service';
import { Event } from '../../models/event.model';


@Component({
  selector: 'app-events-modal',
  templateUrl: './events-modal.component.html',
  styleUrls: ['./events-modal.component.css']
})
export class EventsModalComponent implements OnInit {

  userOnline: User
  token:string

  day:any
  
  professors:Professor[]
  selectedProfessors:Professor[]=[]
  subjects:Subject[]
  selectedSubjects:Subject[]=[]

  time:any={minutes:0,hour:0}
  event: Event
  facilitie: any = { id: undefined, events: [] }
  position: string

  timeAvailable:number=12;

  constructor(public _modalController:EventModalController,
             private _userServices:UserServices,
             private _professorServices:ProfessorsServices,
             private _subjectServices:SubjectServices,
             private _calendarServices:CalendarService) {

              this.token = this._userServices.token;

              this.userOnline = this._userServices.userOnline;
              }

  ngOnInit() { 
    
      this._calendarServices.daySource$.subscribe((day)=>{
        this.day = day
      })
    
     this._modalController.notification.subscribe((res)=>{

      if(res){

        this.facilitie.id = res.facilitieId;
        this.position = res.position;

        if (this.day[this.position + 11]){
          for (let event of this.day[this.position + 11]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 11 }}}

        if(this.day[this.position +10]){
          for (let event of this.day[this.position + 10]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 10;}}}

        if (this.day[this.position + 9]) {
          for (let event of this.day[this.position + 9]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 9;}}}

        if (this.day[this.position + 8]) {
          for (let event of this.day[this.position + 8]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 8;}}}

        if (this.day[this.position + 7]) {
          for (let event of this.day[this.position + 7]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 7;}}}

        if (this.day[this.position + 6]) {
          for (let event of this.day[this.position + 6]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 6;}}}

        if (this.day[this.position + 5]) {
          for (let event of this.day[this.position + 5]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 5;}}}

        if (this.day[this.position + 4]) {
          for (let event of this.day[this.position + 4]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 4;}}}

        if (this.day[this.position + 3]) {
          for (let event of this.day[this.position + 3]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 3;}}}

        if (this.day[this.position + 2]) {
          for (let event of this.day[this.position + 2]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 2}}} 

        if (this.day[this.position + 1]) {
          for (let event of this.day[this.position + 1]) {
            if (event.instalacion === this.facilitie.id) {this.timeAvailable = 1;}}}


            console.log(res.percent)


        if (res.percent < 1) { this.timeAvailable = (this.timeAvailable - (Number(this.position)) - (1- res.percent)) }
        else { this.timeAvailable = (this.timeAvailable) - Number(this.position);}

        console.log(this.timeAvailable)

        this.event = new Event("", "", undefined, res.position, false, this.userOnline._id, this.facilitie.id, [], []);

        this.getProfessors();
        this.getSubjects();
          }   
      })   
  }
  hideModal() {
    this._modalController.hideModal()
    this.timeAvailable = 12;
  }


  getProfessors(){

    this._professorServices.getProfessors(this.token).subscribe((professors) => {

      this.professors = professors;
    })
  }

  getSubjects(){
     this._subjectServices.getSubjects(this.token).subscribe((subjects) => {

      this.subjects = subjects;
    })
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

    this._calendarServices.postEvent(this.event,this.token).subscribe((event:Event)=>{

      console.log(event)

      this._calendarServices.pushEvent(event,this.day._id,this.token).subscribe((day)=>{

        this._modalController.notification.emit()

         this.hideModal()
      })
    })        
  }
}

