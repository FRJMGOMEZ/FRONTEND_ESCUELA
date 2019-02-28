import { Component, OnInit } from '@angular/core';
import { IndexCardModalController } from './indexCardModalController';
import { IndexcardServices } from '../../providers/indexcard.service';
import { Indexcard } from '../../models/indexcard.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumniServices } from 'src/app/providers/alumni.service';
import { Alumni } from '../../models/alumni.model';
import { Professor } from '../../models/professor.model';
import { ProfessorsServices } from '../../providers/professor.service';

@Component({
  selector: 'app-index-card-modal',
  templateUrl: './index-card-modal.component.html',
  styles: []
})
export class IndexCardModalComponent implements OnInit {

  form:FormGroup
  indexcardId:string

  role:string

  constructor(public _modalController:IndexCardModalController,
              private _indexcardServices:IndexcardServices,
              private _alumniServices:AlumniServices,
              private _professorServices:ProfessorsServices) {
   }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl(''),
      email: new FormControl('', Validators.email),
      mobile: new FormControl(null),
      home: new FormControl(null),
      address: new FormControl('')
    })

    this._modalController.notification.subscribe((res)=>{
      if(res){
      if(res.id){
        this._indexcardServices.searchIndexcardById(res.id).subscribe((indexcard)=>{
          console.log(indexcard)
          this.form.setValue({
            name: indexcard.name,
            surname: indexcard.surname || '',
            email: indexcard.email || '',
            mobile: indexcard.mobile || '',
            home: indexcard.home || '',
            address: indexcard.address || ''
          })
         console.log(this.form.value.mobile)
          this.indexcardId = indexcard._id
        })
      }
      else {
        this.role = this._modalController.role;
      }}
    })
  }

  updateIndexCard(){
     if(this.form.valid){
       let value = this.form.value;
       let indexcard = new Indexcard(this._modalController.role,value.name, value.surname, value.email, value.mobile, value.home, value.address); 
       this._indexcardServices.updateIndexcard(indexcard,this.indexcardId).subscribe((res)=>{

        if(res){
          if (res.item) {
            if (res.indexcard.role === 'PROFESSOR') {
              this._professorServices.updateProfessor(res.item)
              this._modalController.hideModal()
            }
            if (res.indexcard.role === 'ALUMNI') {
              this._alumniServices.updateAlumni(res.item);
              this._modalController.hideModal()
            }
          } else {
            this._modalController.hideModal()
          }
        }        
       })
     }
  }

  registration(){   
    if (this.form.valid) {
      let value = this.form.value;
      let indexCard = new Indexcard(this.role,value.name, value.surname, value.email, value.mobile, value.home, value.address); 
      this._indexcardServices.createIndexcard(indexCard).subscribe((res:any)=>{

          if (!res.professor && this._modalController.role==='PROFESSOR' ){
         
          let professor = new Professor(res.indexcard.name, res.indexcard._id)
          this._professorServices.createProfessor(professor).subscribe(() => {
            this._modalController.hideModal()
          })
        }
          else if (!res.alumni && this._modalController.role==='ALUMNI'){
          let alumni = new Alumni(res.indexcard.name, res.indexcard._id)
          this._alumniServices.createAlumni(alumni).subscribe(() => {
            this._modalController.hideModal()
          })
        }
      })     
    }
  }
  hideModal(){
    this.form.setValue({
      name: "",
      surname: "",
      email: "",
      mobile: null,
      home: null,
      address: ""
    });
    this.indexcardId=''
    this._modalController.hideModal()
  }
}
