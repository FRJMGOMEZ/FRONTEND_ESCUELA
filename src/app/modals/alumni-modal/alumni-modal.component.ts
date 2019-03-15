import { Component, OnInit } from '@angular/core';
import { AlumnniModalController } from './alumniModal.controller';
import { Alumni } from 'src/app/models/alumni.model';
import { AlumniServices } from '../../providers/alumni.service';
import { SubjectServices } from '../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';
import { Subscription } from 'rxjs';
import { SubjectOrder } from '../../models/subject.model';
import { AlumniOrder } from '../../models/alumni.model';

@Component({
  selector: 'app-alumni-modal',
  templateUrl: './alumni-modal.component.html',
  styles: []
})
export class AlumniModalComponent implements OnInit {

  alumnis:Alumni[]=[]
  
  subject:Subject

  from:number = 0;

  subjectsSubscription:Subscription= null;
  alumnisSubscription:Subscription=null;

  constructor(public _modalController:AlumnniModalController,
             private _alumniServices:AlumniServices,
             private _subjectServices:SubjectServices ) {
}

  ngOnInit() {
    this._modalController.notification.subscribe(()=>{
         this.subjectsSubscription = this._subjectServices.subjects$.subscribe((subjectOrder:SubjectOrder)=>{
          if(subjectOrder.order === 'getById'){
              this.subject = subjectOrder.subject;
              this.alumnisSubscription = this._alumniServices.alumnis$.subscribe((alumniOrder:AlumniOrder)=>{
                if(alumniOrder.order === 'get'){
                  if(this.subject.alumnis.indexOf(alumniOrder.alumni._id)<0){
                      this.alumnis.push(alumniOrder.alumni)
                  }
                }
              })
              this._alumniServices.getAlumnis(this.from).subscribe()
          }
         })
         this._subjectServices.getSubjectById(this._modalController.id).subscribe()
    })
  } 

 addAlumni(id:string){
  this._subjectServices.addOrDeleteAlumni(this._modalController.id,id).subscribe(()=>{
    this.alumnis = this.alumnis.filter((alumni) => { return alumni._id != id });
    if (this.alumnis.length === 0) { 
      this._modalController.hideModal()
    }
  })
  }

  searchAlumnis(input: string) {
    this.alumnis = [];
    this._alumniServices.searchAlumnis(input).subscribe()
  }

  hideModal(){
    this.alumnis = []
    if (this.alumnisSubscription != null) { this.alumnisSubscription.unsubscribe();}
    if (this.subjectsSubscription != null) { this.subjectsSubscription.unsubscribe();}
    this._modalController.hideModal()
  }

}
