import { Component, OnInit } from '@angular/core';
import { AlumnniModalController } from './alumniModal.controller';
import { Alumni } from 'src/app/models/alumni.model';
import { AlumniServices } from '../../providers/alumni.service';
import { UserServices } from '../../providers/user.service';
import { SubjectServices } from '../../providers/subject.service';

@Component({
  selector: 'app-alumni-modal',
  templateUrl: './alumni-modal.component.html',
  styles: []
})
export class AlumniModalComponent implements OnInit {

  token:string

  alumnis:Alumni[]=[]
  subjectAlumnisId:string[]=[]

  constructor(private _userServices:UserServices,
             public _modalController:AlumnniModalController,
             private _alumniServices:AlumniServices,
             private _subjectServices:SubjectServices ) {

    this.token = this._userServices.token;
   }

  ngOnInit() {

    this._modalController.notification.subscribe((res:any)=>{

      if(res){

        if(res.alumnisId){

          this.subjectAlumnisId = res.alumnisId;

          this.getAlumnis()
        }
      }
    })
  }

  getAlumnis(){

    this._alumniServices.getAlumnis(this.token).subscribe((alumnis)=>{

      this.alumnis = []

      for(let alumni of alumnis){

        if(this.subjectAlumnisId.indexOf(alumni._id) < 0){

           this.alumnis.push(alumni)
        }
      }
    })  
  }

  addAlumni(id:string){

  this._subjectServices.addOrDeleteAlumni(this._modalController.id,id,this.token).subscribe((res:any)=>{

    let id = res.alumnoActualizado._id;

    this.alumnis = this.alumnis.filter((alumni) => { return alumni._id != id });

    if (this.alumnis === []) { this._modalController.hideModal() }

    this._modalController.notification.emit()
    
  })
  }

  searchAlumnis(input: string) {

    this._alumniServices.searchAlumnis(input, this.token).subscribe((alumnis) => {

      this.alumnis = alumnis
    })
  }
  

  hideModal(){
    this.alumnis = []
    this._modalController.hideModal()
  }

}
