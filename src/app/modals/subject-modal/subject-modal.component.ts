import { Component, OnInit } from '@angular/core';
import { SubjectModalController } from './subjectModalController';
import { Subject } from '../../models/subject.model';
import { SubjectServices } from '../../providers/subject.service';
import { UserServices } from '../../providers/user.service';
import { NgForm } from '@angular/forms';
import { AlumniServices } from '../../providers/alumni.service';
import { ProfessorsServices } from '../../providers/professor.service';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styles: []
})
export class SubjectModalComponent implements OnInit {

  alumniSubjects:string[]
  subjects:Subject[]
  
  subject:Subject = new Subject('')

  creation:boolean= false;
  edition:boolean=false;

  from:number=0

  constructor(private _alumniServices:AlumniServices,
              private _professorServices:ProfessorsServices,
              public _modalController:SubjectModalController,
              private _subjectServices:SubjectServices) {

  }

  ngOnInit() {

    this._modalController.notification.subscribe((res:any)=>{
      if(res){
        if (res.message && res.message === 'addSubjects') {
          this.edition = false;
          this.creation= false;
          let observable;
          switch(this._modalController.type){
            case 'ALUMNI': observable = this._alumniServices.getAlumniById(this._modalController.id);
            break;
            case 'PROFESSOR': observable = this._professorServices.getProfessorById(this._modalController.id);
            break;
          }
          observable.subscribe((item)=>{
              this.getSubjects().then((subjects:any)=>{
                this.subjects = [];
                let subjectItemIds = item.subjects.map((item)=>{return item._id})
                for (let subject of subjects) {
                  if (subjectItemIds.indexOf(subject._id) < 0) {
                    this.subjects.push(subject)
                  }
                }
              })
          })
        }
        }else{
        if (this._modalController.id) {
          this.edition = true;
          this.creation = false;
          this._subjectServices.getSubjectById(this._modalController.id).subscribe((subject:any) => {
          this.subject = subject  
          })
        }else{
          this.edition = false;
          this.creation = true;
        }}
      })      
  }

  getSubjects(){
    return new Promise((resolve,reject)=>{
      this._subjectServices.getSubjects(0,100).subscribe((subjects: any) => {
        resolve(subjects)
      })
    })
  }
   
  createSubject(form:NgForm){
     if(form.valid){
      let subject = new Subject(form.value.subjectName)
      this._subjectServices.createSubject(subject).subscribe((subject)=>{
        this.subject = subject;
        this.edition = true;
        this.creation = false;
      })
     }
  }

  editSubject(form: NgForm) {
    if (form.valid) {
      let subject = new Subject(form.value.subjectName)
      this._subjectServices.updateSubject(this.subject._id,subject).subscribe((subject)=>{
        this.subject = subject
      })
    }
  }

  addSubject(subjectId:string){
    if(this._modalController.type === 'ALUMNI'){
      this._subjectServices.addOrDeleteAlumni(subjectId, this._modalController.id).subscribe((subjectUpdated:any) => {
        let id = subjectUpdated._id;
        this.subjects = this.subjects.filter((subject) => { return subject._id != id });
        if (this.subjects === []) { this._modalController.hideModal() }
      })
    }
    else if(this._modalController.type === 'PROFESSOR'){
      this._subjectServices.addOrDeleteProfessor(subjectId, this._modalController.id).subscribe((subjectUpdated: any) => {
        let id = subjectUpdated._id
        this.subjects = this.subjects.filter((subject) => { return subject._id != id });
        if (this.subjects === []) { this._modalController.hideModal() }
      })
    }
}
  hideModal() {
    this.subjects = [];
    this._modalController.hideModal()
  }
}
