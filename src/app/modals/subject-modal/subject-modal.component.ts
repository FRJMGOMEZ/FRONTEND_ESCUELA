import { Component, OnInit } from '@angular/core';
import { SubjectModalController } from './subjectModalController';
import { Subject, SubjectOrder } from '../../models/subject.model';
import { SubjectServices } from '../../providers/subject.service';
import { NgForm } from '@angular/forms';
import { AlumniServices } from '../../providers/alumni.service';
import { ProfessorsServices } from '../../providers/professor.service';
import { Subscription } from 'rxjs';
import { Professor } from 'src/app/models/professor.model';
import { Alumni } from 'src/app/models/alumni.model';
import { AlumniOrder } from '../../models/alumni.model';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styles: []
})
export class SubjectModalComponent implements OnInit {

  professor:Professor;
  alumni:Alumni;
  subjects:Subject[] = []
  
  subject:Subject = new Subject('')

  creation:boolean= false;
  edition:boolean=false;
  addition:boolean=false;

  from:number=0

  professorSubscription:Subscription = null;
  alumniSubscription:Subscription = null;
  subjectSubscription:Subscription=null;

  constructor(private _alumniServices:AlumniServices,
              private _professorServices:ProfessorsServices,
              public _modalController:SubjectModalController,
              private _subjectServices:SubjectServices) {}

  ngOnInit() {

    this._modalController.notification.subscribe((res:string)=>{

      if (res) {
      this.addition = true;
      let request;
      if(res === 'ALUMNI'){
        this.alumniSubscription = this._alumniServices.alumnis$.subscribe((alumniOrder: AlumniOrder) => {
          if (alumniOrder.order === 'getById') {
            this.alumni = alumniOrder.alumni;
            this.subjectSubscription = this._subjectServices.subjects$.subscribe((subjectOrder: SubjectOrder) => {
              if (subjectOrder.order === 'get') {
                console.log(this.alumni.subjects)
                if (this.alumni.subjects.indexOf(subjectOrder.subject._id) < 0) {
                  this.subjects.push(subjectOrder.subject);
                }
              }
            })
            this._subjectServices.getSubjects().subscribe()
          }
        })
        request = this._alumniServices.getAlumniById(
          this._modalController.id
        );
      }else if (res === 'PROFESSOR'){
        this.professorSubscription = this._professorServices.professors$.subscribe((professorOrder) => {
          if (professorOrder.order === 'getById') {
            this.professor = professorOrder.professor;
            this.subjectSubscription = this._subjectServices.subjects$.subscribe((subjectOrder: SubjectOrder) => {
              if (subjectOrder.order === 'get') {
                if (this.professor.subjects.indexOf(subjectOrder.subject._id) < 0) {
                  this.subjects.push(subjectOrder.subject);
                }
              }
            })
            this._subjectServices.getSubjects().subscribe()
          }
        })
        request = this._professorServices.getProfessorById(
          this._modalController.id
        );
      }
        request.subscribe();

    }else{
        if (this._modalController.id) {
          this.edition = true;
          this.subjectSubscription = this._subjectServices.subjects$.subscribe((subjectOrder: SubjectOrder) => {
            if (subjectOrder.order === 'getById') {
              this.subject = subjectOrder.subject
            }
          })
          this._subjectServices.getSubjectById(this._modalController.id).subscribe()
        }
      }
    })      
  }

  postSubject(form:NgForm){
     if(form.valid){
      let subject = new Subject(form.value.subjectName)
      this._subjectServices.createSubject(subject).subscribe(()=>{
        this.hideModal()
      })
     }
  }

  putSubject(form: NgForm) {
    if (form.valid) {
      let subject = new Subject(form.value.subjectName)
      this._subjectServices.putSubject(this.subject._id,subject).subscribe(()=>{
        this.hideModal()})
    }
  }

  addSubject(subjectId:string){
    if(this.alumni){
      this._subjectServices.addOrDeleteAlumni(subjectId, this._modalController.id).subscribe(()=>{
        this.subjects = this.subjects.filter((subject) => { return subject._id != subjectId });
        if (this.subjects === []) { this._modalController.hideModal() }
      })
    }
    else if(this.professor){
      this._subjectServices.addOrDeleteProfessor(subjectId, this._modalController.id).subscribe(()=>{
        this.subjects = this.subjects.filter((subject) => { return subject._id != subjectId });
        if (this.subjects === []) { this._modalController.hideModal() }
      })
    }
}
  hideModal() {
    this.edition=false;
    this.creation=false;
    this.addition=false;
    if (this.professorSubscription != null) { this.professorSubscription.unsubscribe()}
    if(this.alumniSubscription != null ){this.alumniSubscription.unsubscribe()}
    if(this.subjectSubscription != null){this.subjectSubscription.unsubscribe()}
    this.subject = null;
    this.subjects = [];
    this.alumni=null;
    this.professor=null;
    this.from=0;
    this._modalController.hideModal()
  }
}
