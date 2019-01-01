import { Component, OnInit } from '@angular/core';
import { SubjectModalController } from './subjectModalController';
import { Subject } from '../../models/subject.model';
import { SubjectServices } from '../../providers/subject.service';
import { UserServices } from '../../providers/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styles: []
})
export class SubjectModalComponent implements OnInit {

  token:string
  alumniSubjects:string[]
  subjects:Subject[]=[]
  
  subjectName:string

  constructor(private _userServices:UserServices,
              public _modalController:SubjectModalController,
              private _subjectServices:SubjectServices) {

    this.token= this._userServices.token
  }

  ngOnInit() {

    this._modalController.notification.subscribe((res)=>{

      if(res){

        if (res.subjects) {

          this.alumniSubjects = res.subjects.map((subject) => { return subject._id })

          this.getSubjects()
        }

        else if (this._modalController.id) {

          this._subjectServices.getSubjectsBydId(this._modalController.id, this.token).subscribe((res) => { console.log(res) })
        }
      }      
    })
  }
   
  createSubject(form:NgForm){
    
     if(form.valid){

      let subject = new Subject(form.value.subjectName)

      this._subjectServices.createSubject(subject,this.token).subscribe(()=>{

        this._modalController.notification.emit()
        this._modalController.hideModal()
      })
     }
  }

  getSubjects() {

    this._subjectServices.getSubjects(this.token).subscribe((subjects)=>{

      if(!subjects){

        this.subjects = undefined; 
      }

      for (let subject of subjects) {

        if (this.alumniSubjects.indexOf(subject._id) < 0) {

          this.subjects.push(subject)
        }
      }
    })
  }

  addSubject(subjectId:string){

    if(this._modalController.type === 'alumni'){

      this._subjectServices.addOrDeleteAlumni(subjectId, this._modalController.id, this.token).subscribe((res: any) => {

        let id = res.materiaGuardada._id;

        this.subjects = this.subjects.filter((subject) => { return subject._id != id });

        if (this.subjects === []) { this._modalController.hideModal() }

        this._modalController.notification.emit()
      })
    }

    else if(this._modalController.type === 'professor'){

      this._subjectServices.addOrDeleteProfessor(subjectId, this._modalController.id, this.token).subscribe((res: any) => {

        let id = res.materiaGuardada._id;

        this.subjects = this.subjects.filter((subject) => { return subject._id != id });

        if (this.subjects === []) { this._modalController.hideModal() }

        this._modalController.notification.emit()
      })
    }
}


  hideModal() {
    this.subjects = [];
    this._modalController.hideModal()
  }
}
