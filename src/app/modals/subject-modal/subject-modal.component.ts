import { Component, OnInit } from '@angular/core';
import { SubjectModalController } from './subjectModalController';
import { SubjectModel } from '../../models/subject.model';
import { SubjectServices } from '../../providers/subject.service';
import { NgForm } from '@angular/forms';
import { AlumniServices } from '../../providers/alumni.service';
import { ProfessorsServices } from '../../providers/professor.service';
import { Professor } from 'src/app/models/professor.model';
import { Alumni } from 'src/app/models/alumni.model';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styles: []
})

export class SubjectModalComponent implements OnInit {

  professor:Professor;
  alumni:Alumni;
  
  subject:SubjectModel;

  creation:boolean= false;
  edition:boolean=false;
  addition:boolean=false;

  from:number=0

  constructor(private _alumniServices:AlumniServices,
              private _professorServices:ProfessorsServices,
              public _modalController:SubjectModalController,
              public _subjectServices:SubjectServices) {}

  ngOnInit() {

    this._modalController.notification.subscribe((res:string)=>{

     this.subject = new SubjectModel('')

      if (res) {
      this.addition = true;
      if(res === 'ALUMNI'){
        this.alumni = this._alumniServices.alumnis.filter((alumni)=>{return alumni._id === this._modalController.id})[0]
        this._subjectServices.getSubjects(null,null).subscribe(()=>{
           let alumniSubjectsIds = this.alumni.subjects;
           alumniSubjectsIds = alumniSubjectsIds.map((subject:any)=>{return subject._id});
            this._subjectServices.subjects = this._subjectServices.subjects.filter((subject:SubjectModel)=>{
               if(alumniSubjectsIds.indexOf(subject._id)<0){
                  return subject
               }
            })
        })
      }else if (res === 'PROFESSOR'){
        this.professor = this._professorServices.professors.filter((professor)=>{return professor._id === this._modalController.id})[0];
        this._subjectServices.getSubjects(null,null).subscribe(()=>{
          let professorSubjectsIds = this.professor.subjects;
          professorSubjectsIds = professorSubjectsIds.map((subject:any)=>{return subject._id});
          this._subjectServices.subjects = this._subjectServices.subjects.filter((subject:SubjectModel)=>{
            if(professorSubjectsIds.indexOf(subject._id)<0){
              return subject
            }
          })
        })
      }    
    }else{
      if(this._modalController.id){
        this.edition=true;
        this.subject = this._subjectServices.subjects.filter((subject:SubjectModel)=>{return subject._id === this._modalController.id})[0]
      }else{
        this.creation = true;
      }
    }
  })
}

  postSubject(form:NgForm){
     if(form.valid){
      let subject = new SubjectModel(form.value.subjectName)
      this._subjectServices.postSubject(subject).subscribe(()=>{
        this.hideModal()
      })
     }
  }

  putSubject(form: NgForm) {
    if (form.valid) {
      let subject = new SubjectModel(form.value.subjectName)
      this._subjectServices.putSubject(this.subject._id,subject).subscribe(()=>{
        this.hideModal()})
    }
  }

  addSubject(subjectId:string){
    if(this.alumni){
      this._subjectServices.addOrDeleteAlumni(subjectId, this._modalController.id).subscribe(()=>{
        this._subjectServices.subjects = this._subjectServices.subjects.filter((subject) => { return subject._id != subjectId });
        if (this._subjectServices.subjects === []) { this._modalController.hideModal() }
      })
    }
    else if(this.professor){
      this._subjectServices.addOrDeleteProfessor(subjectId, this._modalController.id).subscribe(()=>{
        this._subjectServices.subjects = this._subjectServices.subjects.filter((subject) => { return subject._id != subjectId });
        if (this._subjectServices.subjects === []) { this._modalController.hideModal() }
      })
    }
}
  hideModal() {
    if (this.addition) {
      this._subjectServices.subjects = []
    }
    this.edition=false;
    this.creation=false;
    this.addition=false;
    this.subject = undefined;
    this.alumni=undefined;
    this.professor=undefined;
    this.from=0;
    this._modalController.hideModal()
  }
}
