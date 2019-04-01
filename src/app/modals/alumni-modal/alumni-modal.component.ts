import { Component, OnInit } from '@angular/core';
import { AlumnniModalController } from './alumniModal.controller';
import { AlumniServices } from '../../providers/alumni.service';
import { SubjectServices } from '../../providers/subject.service';
import { SubjectModel } from 'src/app/models/subject.model';

@Component({
  selector: 'app-alumni-modal',
  templateUrl: './alumni-modal.component.html',
  styles: []
})
export class AlumniModalComponent implements OnInit {
  
  subject:SubjectModel

  from:number = 0;

  constructor(public _modalController:AlumnniModalController,
             public _alumniServices:AlumniServices,
             private _subjectServices:SubjectServices ) {
}

  ngOnInit() {
    this._modalController.notification.subscribe(()=>{
         this.subject = this._subjectServices.subjects.filter((subject)=>{return subject._id === this._modalController.id})[0];
         this._alumniServices.getAlumnis(this.from,10).subscribe(()=>{
           let subjectAlumnisIds = this.subject.alumnis;
           subjectAlumnisIds = subjectAlumnisIds.map((alumni:any)=>{return alumni._id});
           this._alumniServices.alumnis = this._alumniServices.alumnis.filter((alumni)=>{
              if(subjectAlumnisIds.indexOf(alumni._id)<0){
                  return alumni
              }
           })
         })
    })
  } 

 addAlumni(id:string){
  this._subjectServices.addOrDeleteAlumni(this._modalController.id,id).subscribe(()=>{
    this._alumniServices.alumnis = this._alumniServices.alumnis.filter((alumni)=>{return alumni._id != id})
    if (this._alumniServices.alumnis === []) { this._modalController.hideModal() }
  })
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
   this._modalController.notification.emit()
  }

  searchAlumnis(input: string) {
    this._alumniServices.searchAlumnis(input).subscribe()
  }

  hideModal(){
    this.from = 0;
    this.subject = undefined;
    this._alumniServices.alumnis = [];
    this._modalController.hideModal()
  }
}
