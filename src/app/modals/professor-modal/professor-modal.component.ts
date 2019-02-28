import { Component, OnInit } from '@angular/core';
import { ProfessorModalController } from './professorModalController';
import { Professor } from '../../models/professor.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { SubjectServices } from '../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';


@Component({
  selector: 'app-professor-modal',
  templateUrl: './professor-modal.component.html',
  styles: []
})
export class ProfessorModalComponent implements OnInit {

  subject:Subject

  professors:Professor[] = []

  from:number=0

  constructor(public _modalController:ProfessorModalController,
              private _professorServices:ProfessorsServices,
              private _subjectServices:SubjectServices) {
   }

  ngOnInit() {
    
    this._modalController.notification.subscribe((res)=>{
      if (res) {
        if (res.message && res.message ==='addProfessors') {
          this._subjectServices.getSubjectById(this._modalController.id).subscribe((subject:Subject)=>{
            this.subject = subject;
            this.getProfessors().then((res:any) => {
              this.professors = [];
              for (let professor of res.professors) {
                if (subject.professors.indexOf(professor._id) < 0) {
                  this.professors.push(professor);
                }
              }
            });
          })
        }
      }
    })
  }

  getProfessors(){
    return new Promise((resolve,reject)=>{
      this._professorServices.getProfessors(this.from).subscribe((professors:any) => {
        resolve({professors})
      })
    })
  }

  addProfessor(professorId:string){ 
    this._subjectServices.addOrDeleteProfessor(this._modalController.id,professorId).subscribe(()=>{
      this.professors = this.professors.filter((professor)=>{ return professor._id != professorId })
      if (this.professors === []) {
        this._modalController.hideModal()
      }
    })     
  }

  searchProfessors(input: string) {
    this._professorServices.searchProfessors(input).subscribe((professors:any) => {
      this.professors = [];
      professors.forEach(professor => {
        if(this.subject.professors.indexOf(professor._id)<0){
          this.professors.push(professor)
        }
      });;
    })
  }

  hideModal(){
    this.professors = [];
    this._modalController.hideModal()
  }
}
