import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { SubjectServices } from '../../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';
import { AlumnniModalController } from '../../../modals/alumni-modal/alumniModal.controller';
import { ProfessorModalController } from '../../../modals/professor-modal/professorModalController';
import { Subscription } from 'rxjs';
import { SwalService } from '../../../providers/swal.service';
import { SubjectOrder } from '../../../models/subject.model';


@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styles: []
})
export class SubjectComponent implements OnInit, OnDestroy  {

   subjects:Subject[] = [];
   subjectSelected: Subject;

  subjectsSubscription: Subscription = null;

  uploading:boolean=true;
 
  constructor(
    public _subjectServices:SubjectServices,
    private _subjectModalController: SubjectModalController,
    private _alumniModalController:AlumnniModalController,
    private _professorModalController:ProfessorModalController,
    private _swalServices:SwalService
  ) {
  }

  ngOnInit(){

    this.subjectsSubscription = this._subjectServices.subjects$.subscribe((subjectOrder:SubjectOrder) => {
      if (subjectOrder.order === 'post') {
        if (this.subjects.length < 5) { this.subjects.push(subjectOrder.subject) }
      }else if (subjectOrder.order === 'get') {
        this.subjects.push(subjectOrder.subject);
      }else if (subjectOrder.order === 'delete') {
        this.subjects = this.subjects.filter((subject) => { return subject._id != subjectOrder.subject._id })
      }else if (subjectOrder.order === 'put') {
        this.subjects.forEach((subject, index) => {
          if (subject._id === subjectOrder.subject._id) {
            this.subjects[index] = subjectOrder.subject;
            this.subjectSelected = this.subjects[index];
          }
        })
      } 
    })
    
    this._subjectServices.getSubjects().subscribe()
  }
  selectSubject(id:string){
    this.subjectSelected = this.subjects.filter((subject)=>{return subject._id === id})[0];
    this.uploading = false;
  }

  postSubject(){
    this._subjectModalController.showModal();
    this._subjectModalController.notification.emit();
  }

  putSubject(id:string){
    this._subjectModalController.showModal(id);
    this._subjectModalController.notification.emit();
  }

  deleteSubject(id:string){
    this._swalServices.confirmDelete().then((res)=>{
      if(res){
        this._subjectServices.deleteSubject(id).subscribe(()=>{
          this.subjectSelected=null;
        })
      }
    })
  }

  addProfessor(id:string){
    this._professorModalController.showModal(id)
      this._professorModalController.notification.emit()
  }
  addAlumni(id:string) {
    this._alumniModalController.showModal(id)
      this._alumniModalController.notification.emit()
  }

  ngOnDestroy(): void {
    this.subjectsSubscription.unsubscribe()
  }
}
