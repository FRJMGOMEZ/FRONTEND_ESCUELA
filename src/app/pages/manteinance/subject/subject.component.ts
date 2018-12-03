import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { UserServices } from 'src/app/providers/user.service';
import { SubjectServices } from '../../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';
import { AlumnniModalController } from '../../../modals/alumni-modal/alumniModal.controller';


@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styles: []
})
export class SubjectComponent implements OnInit {

  token: string;
  subjects: Subject[] = [];
 
  constructor(
    private _userServices: UserServices,
    private _subjectModalController: SubjectModalController,
    private _subjectServices: SubjectServices,
    private _alumniModalController:AlumnniModalController
  ) {
    this.token = this._userServices.token;
  }

  ngOnInit() {
    this.getSubjects();

    this._subjectModalController.notification.subscribe(res => {
      if (!res) {
        this.getSubjects();
      }
    });

    this._alumniModalController.notification.subscribe((res)=>{

    if(res){

      this.getSubjects()
    }
    })
  }

  searchSubjects(input:string){

    this._subjectServices.searchSubjects(input).subscribe((subjects)=>{

       this.subjects = subjects
    })
  }

  openSubjectModal(id?:string) {

    if(id){

      this._subjectModalController.notification.emit({id});
    }
    else { this._subjectModalController.notification.emit({}) }

    this._subjectModalController.showModal();
  }

  getSubjects() {
    this._subjectServices.getSubjects().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
    });
  }

  openAlumniModal(){}

  openProfessorModal(){}

  addProfessor(professors){

    console.log(professors)
  }

  addAlumni(subject:Subject){

   if(subject.alumnos){

       let alumnis = subject.alumnos;

       let alumnisId = alumnis.map((alumni:any)=>{return alumni._id})

       this._alumniModalController.notification.emit({alumnisId})

       this._alumniModalController.showModal(subject._id)
    }

    console.log(subject)
  }

}
