import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubjectModalController } from '../../../modals/subject-modal/subjectModalController';
import { SubjectServices } from '../../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';
import { AlumnniModalController } from '../../../modals/alumni-modal/alumniModal.controller';
import { ProfessorModalController } from '../../../modals/professor-modal/professorModalController';
import { SwalService } from '../../../providers/swal.service';

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styles: []
})
export class SubjectComponent implements OnInit, OnDestroy  {

  subjects:Subject[] = [];

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
    this._subjectServices.getSubjects().subscribe()
  }
  selectSubject(id:string){
    this._subjectServices.subjectSelected = this._subjectServices.subjects.filter((subject)=>{return subject._id === id})[0];
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
          this._subjectServices.getSubjects().subscribe()
          this._subjectServices.subjectSelected=undefined;
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
    this._subjectServices.subjects=[]
    this._subjectServices.subjectSelected=undefined;
  }
}
