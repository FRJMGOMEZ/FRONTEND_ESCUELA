import { Component, OnInit } from '@angular/core';
import { ProfessorModalController } from './professor-modal-controller';
import { ProfessorsServices } from '../../providers/professor.service';
import { SubjectServices } from '../../providers/subject.service';
import { SubjectModel } from 'src/app/models/subject.model';


@Component({
  selector: 'app-professor-modal',
  templateUrl: './professor-modal.component.html',
  styles: []
})
export class ProfessorModalComponent implements OnInit {

  subject:SubjectModel

  from:number=0

  constructor(public _modalController:ProfessorModalController,
              public _professorServices:ProfessorsServices,
              private _subjectServices:SubjectServices) {
   }

  ngOnInit() {
    this._modalController.notification.subscribe(() => {
      this.subject = this._subjectServices.subjects.filter((subject) => { return subject._id === this._modalController.id })[0];
      this._professorServices.getProfessors(this.from, 10).subscribe(() => {
        let subjectProfessorsIds = this.subject.professors;
        subjectProfessorsIds = subjectProfessorsIds.map((professor: any) => { return professor._id });
        this._professorServices.professors = this._professorServices.professors.filter((professor) => {
          if (subjectProfessorsIds.indexOf(professor._id) < 0) {
            return professor
          }
        })
      })
    })
  }

  addProfessor(professorId:string){ 
    this._subjectServices.addOrDeleteProfessor(this._modalController.id,professorId).subscribe(()=>{
      this._professorServices.professors = this._professorServices.professors.filter((professor)=>{ return professor._id != professorId })
      if (this._professorServices.professors === []) {
        this._modalController.hideModal()
      }
    })     
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    this._modalController.notification.emit()
  }

  searchProfessors(input: string) {
    this._professorServices.searchProfessors(input).subscribe()
  }

  hideModal(){
    this.from =0;
    this.subject = undefined;
    this._professorServices.professors = [];
    this._modalController.hideModal()
  }
}
