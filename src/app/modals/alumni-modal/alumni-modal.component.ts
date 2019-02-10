import { Component, OnInit } from '@angular/core';
import { AlumnniModalController } from './alumniModal.controller';
import { Alumni } from 'src/app/models/alumni.model';
import { AlumniServices } from '../../providers/alumni.service';
import { UserServices } from '../../providers/user.service';
import { SubjectServices } from '../../providers/subject.service';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-alumni-modal',
  templateUrl: './alumni-modal.component.html',
  styles: []
})
export class AlumniModalComponent implements OnInit {

  token:string

  alumnis:Alumni[]=[]
  
  subject:Subject

  from:number = 0;

  constructor(private _userServices:UserServices,
             public _modalController:AlumnniModalController,
             private _alumniServices:AlumniServices,
             private _subjectServices:SubjectServices ) {
    this.token = this._userServices.token;
   }

  ngOnInit() {
    this._modalController.notification.subscribe((res:any)=>{
      if(res){
        if(res.message && res.message ==='addAlumnis' ){

          this._subjectServices.getSubjectById(this._modalController.id,this.token).subscribe((subject:Subject)=>{
             this.subject = subject;

            this.getAlumnis().then((res:any) => {
              this.alumnis = []
              for (let alumni of res.alumnis) {
                if (subject.alumnis.indexOf(alumni._id) < 0) {
                  this.alumnis.push(alumni)
                }
              }
            })
          })
        }
      }
    })
  }

 getAlumnis(){
   return new Promise((resolve,reject)=>{
     this._alumniServices.getAlumnis(this.token, this.from).subscribe((alumnis) => {
       resolve({alumnis})
     })
   })
 }  

 addAlumni(id:string){
  this._subjectServices.addOrDeleteAlumni(this._modalController.id,id,this.token).subscribe(()=>{
    this.alumnis = this.alumnis.filter((alumni) => { return alumni._id != id });
    if (this.alumnis.length === 0) { 
      this._modalController.hideModal()
    }
  })
  }

  searchAlumnis(input: string) {
    this._alumniServices.searchAlumnis(input, this.token).subscribe((alumnis:any) => {
      this.alumnis = [];
      alumnis.forEach(alumni => {
        if(this.subject.alumnis.indexOf(alumni._id) < 0){
          this.alumnis.push(alumni)
        }
      });
    })
  }

  hideModal(){
    this.alumnis = []
    this._modalController.hideModal()
  }

}
