import { Component, OnInit } from '@angular/core';
import { ProfessorModalController } from './professorModalController';
import { Professor, ProfessorOrder } from '../../models/professor.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { SubjectServices } from '../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';
import { Subscription } from 'rxjs';
import { SubjectOrder } from '../../models/subject.model';


@Component({
  selector: 'app-professor-modal',
  templateUrl: './professor-modal.component.html',
  styles: []
})
export class ProfessorModalComponent implements OnInit {

  subject:Subject

  professors:Professor[] = []

  from:number=0

  subjectSubscription:Subscription=null;
  professorsSubscription:Subscription=null;

  constructor(public _modalController:ProfessorModalController,
              private _professorServices:ProfessorsServices,
              private _subjectServices:SubjectServices) {
   }

  ngOnInit() {
    
    this._modalController.notification.subscribe((res)=>{
       this.subjectSubscription = this._subjectServices.subjects$.subscribe((subjectOrder:SubjectOrder)=>{
         if(subjectOrder.order === 'getById'){
           this.subject = subjectOrder.subject;
           this.professorsSubscription = this._professorServices.professors$.subscribe((professorOrder:ProfessorOrder)=>{
             if(professorOrder.order === 'get'){
               if(this.subject.professors.indexOf(professorOrder.professor._id)<0){
                 this.professors.push(professorOrder.professor)
               }
             }
           })
           this._professorServices.getProfessors().subscribe()
         }
       })
       this._subjectServices.getSubjectById(this._modalController.id).subscribe()
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
    this.professorsSubscription.unsubscribe();
    this.subjectSubscription.unsubscribe();
    this._modalController.hideModal()
  }
}
