import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { UserServices } from 'src/app/providers/user.service';
import { SubjectServices } from '../../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';
import { AlumnniModalController } from '../../../modals/alumni-modal/alumniModal.controller';
import { ProfessorModalController } from '../../../modals/professor-modal/professorModalController';


@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styles: []
})
export class SubjectComponent implements OnInit {

  token: string;
  subjects: Subject[] = [];

  from:number = 0
 
  constructor(
    private _userServices: UserServices,
    private _subjectModalController: SubjectModalController,
    private _subjectServices: SubjectServices,
    private _alumniModalController:AlumnniModalController,
    private _professorModalController:ProfessorModalController
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

    if(!res){

      this.getSubjects()
    }
    });

    this._professorModalController.notification.subscribe((res)=>{

      if(!res){

      this.getSubjects()
      }
    });
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

    this._subjectModalController.showModal('');
  }

  getSubjects() {
    this._subjectServices.getSubjects(this.token,this.from).subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
    });
  }

  openAlumniModal(){}

  openProfessorModal(){}

  addProfessor(subject:Subject){

    if(subject.profesores){

      let professors = subject.profesores;

      let professorsIds = professors.map((professor:any)=>{return professor._id})

      this._professorModalController.notification.emit({professorsIds})

      this._professorModalController.showModal(subject._id)

    }
  }

  deleteProfessor(subjectId:string,professorId:string){

    swal({
      title: "Estás seguro/a",
      icon: "warning",
      buttons: ["Cancelar", "Borrar"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if(willDelete){

          this._subjectServices
            .addOrDeleteProfessor(subjectId, professorId, this.token)
            .subscribe(() => {
              this.getSubjects();
            });
          }
      });
  }

  addAlumni(subject:Subject){

   if(subject.alumnos){

       let alumnis = subject.alumnos;

       let alumnisId = alumnis.map((alumni:any)=>{return alumni._id})

       this._alumniModalController.notification.emit({alumnisId})

       this._alumniModalController.showModal(subject._id)
    }
  }

  deleteAlumni(subjectId:string,alummniId:string){

    swal({
      title: "Estás seguro/a",
      icon: "warning",
      buttons: ["Cancelar", "Borrar"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {

          this._subjectServices.addOrDeleteAlumni(subjectId, alummniId, this.token).subscribe(() => {
            this.getSubjects()
          })
        }
      });
  }

  changeFrom(number:number){

    if(this.from + number > 0){

      this.from += number
    }
  }
}
