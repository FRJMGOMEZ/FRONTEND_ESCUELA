import { Component, OnInit } from '@angular/core';
import { IndexCardModalController } from './indexCardModalController';
import { IndexcardServices } from '../../providers/indexcard.service';
import { UserServices } from '../../providers/user.service';
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
  indexcard:Indexcard
  token:string;

  role:string

  constructor(private _userServices:UserServices,
              public _modalController:IndexCardModalController,
              private _indexcardServices:IndexcardServices,
              private _alumniServices:AlumniServices,
              private _professorServices:ProfessorsServices) {

    this.token = this._userServices.token;
   }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl(''),
      email: new FormControl('', Validators.email),
      mobile: new FormControl(''),
      home: new FormControl(''),
      address: new FormControl('')
    })

    this._modalController.notification.subscribe((res)=>{
      if(res){
      if(res.id){
        this._indexcardServices.searchIndexcardById(res.id,this.token).subscribe((indexcard)=>{
          this.indexcardId = indexcard._id
          this.indexcard = indexcard;
          this.form.setValue({
            name: this.indexcard.name,
            surname: this.indexcard.surname || '',
            email: this.indexcard.email || '',
            mobile: this.indexcard.mobile || '',
            home: this.indexcard.home || '',
            address: this.indexcard.address || ''
          })
        })
      }
      else {
        this.role = this._modalController.role;
        this.form.setValue({
          name: '',
          surname: '',
          email: '',
          mobile:'',
          home:'',
          address:''
        })
      }}
    })
  }

  updateIndexCard(){
     if(this.form.valid){
       let value = this.form.value;
       let indexcard = new Indexcard(this._modalController.role,value.name, value.surname, value.email, value.mobile, value.home, value.address); 
       this._indexcardServices.updateIndexcard(indexcard,this.indexcardId,this.token).subscribe((res)=>{
         if (this.indexcard.role === 'PROFESSOR'){
           this._professorServices.updateProfessor(res.item)
           this._modalController.hideModal()
         }
         if (this.indexcard.role === 'ALUMNI') {
           this._alumniServices.updateAlumni(res.item);
           this._modalController.hideModal()
         }
       })
     }
  }

  registration(){   
    if (this.form.valid) {
      let value = this.form.value;
      let indexCard = new Indexcard(this.role,value.name, value.surname, value.email, value.mobile, value.home, value.address); 
      this._indexcardServices.createIndexcard(indexCard,this.token).subscribe((res:any)=>{

          if (!res.professor && this._modalController.role==='PROFESSOR' ){
         
          let professor = new Professor(res.indexcard.name, res.indexcard._id)
          this._professorServices.createProfessor(professor, this.token).subscribe(() => {
            this._modalController.hideModal()
          })
        }
          else if (!res.alumni && this._modalController.role==='ALUMNI'){
          let alumni = new Alumni(res.indexcard.name, res.indexcard._id)
          this._alumniServices.createAlumni(alumni, this.token).subscribe(() => {
            this._modalController.hideModal()
          })
        }
      })     
    }
  }
  hideModal(){
    this.indexcardId=''
    this.indexcard = undefined
    this._modalController.hideModal()
  }
}
