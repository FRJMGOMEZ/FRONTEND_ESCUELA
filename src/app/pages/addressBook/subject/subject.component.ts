import { Component, Input, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { UserServices } from 'src/app/providers/user.service';
import { SubjectServices } from '../../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';
import { AlumnniModalController } from '../../../modals/alumni-modal/alumniModal.controller';
import { ProfessorModalController } from '../../../modals/professor-modal/professorModalController';
import { AddressBookComponent } from '../addressBook.component';
import { Subscription } from 'rxjs';


@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styles: []
})
export class SubjectComponent implements OnInit, OnDestroy  {

  token: string;
   subjects:Subject[] = [];
   subjectSelected: Subject;

  subjectsSubscription: Subscription = null;
 
  constructor(
    private _userServices: UserServices,
    public _subjectServices:SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _alumniModalController:AlumnniModalController,
    private _professorModalController:ProfessorModalController,
    public manteinanceComponent:AddressBookComponent
  ) {
    this.token = this._userServices.token;
  }

  ngOnInit(): void {

    this.subjectsSubscription = this._subjectServices.subjects$.subscribe((subjectOrder: any) => {

      if (subjectOrder.order === 'post') {
        if (this.subjects.length < 5) { this.subjects.push(subjectOrder.subject) }
      }
      if (subjectOrder.order === 'get') {
        this.subjects.push(subjectOrder.subject);
      }
      else if (subjectOrder.order === 'delete') {
        this.subjects = this.subjects.filter((subject) => { return subject._id != subjectOrder.subject._id })
      }
      else if (subjectOrder.order === 'update') {
        this.subjects.forEach((subject, index) => {
          if (subject._id === subjectOrder.subject._id) {
            this.subjects[index] = subjectOrder.subject;
            this.subjectSelected = this.subjects[index];
          }
        })
      } 
    })
    
    this._subjectServices.getSubjects(this.token).subscribe()
  }

  openSubjectModal(id?:string) {
    if(id){
      this._subjectModalController.showModal('ALUMNI',id);
      this._subjectModalController.notification.emit();
    }
    else { 
      this._subjectModalController.showModal('ALUMNI');
      this._subjectModalController.notification.emit();
    }   
  }

  addProfessor(id:string){
    this._professorModalController.showModal(id)
      this._professorModalController.notification.emit({message:'addProfessors'})
     
  }
  addAlumni(id:string) {
    this._alumniModalController.showModal(id)
      this._alumniModalController.notification.emit({message:'addAlumnis' })
  }

  ngOnDestroy(): void {
    this.subjectsSubscription.unsubscribe()
  }
}
