import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProfessorModalController } from './professorModalController';
import { Professor } from '../../models/professor.model';
import { ProfessorsServices } from '../../providers/professor.service';
import { SubjectServices } from '../../providers/subject.service';

@Component({
  selector: 'app-professor-modal',
  templateUrl: './professor-modal.component.html',
  styles: []
})
export class ProfessorModalComponent implements OnInit {

  token:string

  professors:Professor[] = []
  subjectProfessorsIds:string[]= []

  constructor(private _userServices:UserServices,
              public _modalController:ProfessorModalController,
              private _professorServices:ProfessorsServices,
              private _subjectServices:SubjectServices) {

    this.token = this._userServices.token;
   }

  ngOnInit() {

    this._modalController.notification.subscribe((res)=>{

       if(res){

         if (res.professorsIds) {

          this.subjectProfessorsIds = res.professorsIds;

          this.getProfessors()
         }

       }
    })
  }

  getProfessors(){

    this._professorServices.getProfessors(this.token).subscribe((professors)=>{

     for(let professor of professors){

      if(this.subjectProfessorsIds.indexOf(professor._id)<0){

        this.professors.push(professor)
      }
     }
    })
  }

  addProfessor(professorId:string){
    
    this._subjectServices.addOrDeleteProfessor(this._modalController.id,professorId,this.token).subscribe((res:any)=>{

      console.log(res)

      let id = res.profesorActualizado._id;

      this.professors = this.professors.filter((professor)=>{ return professor._id != id })

      if (this.professors === []) { this._modalController.hideModal() }

      this._modalController.notification.emit()

    })     
  }

  hideModal(){

    this.professors = [];
    this.subjectProfessorsIds = []

    this._modalController.hideModal()
  }

  searchProfessors(input:string){

    this._professorServices.searchProfessors(input,this.token).subscribe((professors)=>{

      this.professors = professors
    })
  }

}
