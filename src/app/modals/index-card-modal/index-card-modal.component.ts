import { Component, OnInit } from '@angular/core';
import { IndexCardModalController } from './indexCardModalController';
import { IndexCardServices } from '../../providers/indexCard.service';
import { UserServices } from '../../providers/user.service';
import { IndexCard } from '../../models/indexCard.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
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
  indexCardId:string
  indexCard:IndexCard
  token:string;

  constructor(private _userServices:UserServices,
              public _modalController:IndexCardModalController,
              private _indexCardServices:IndexCardServices,
              private _alumniServices:AlumniServices,
              private _professorServices:ProfessorsServices) {

    this.token = this._userServices.token;
   }

  ngOnInit() {

    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl(''),
      email: new FormControl('', Validators.email),
      movil: new FormControl(''),
      telefonoCasa: new FormControl(''),
      domicilio: new FormControl('')
    })

    this._modalController.notification.subscribe((id)=>{

      if(id){

        this._indexCardServices.searchIndexCardById(id,this.token).subscribe((indexCard)=>{

          this.indexCardId = indexCard._id

          this.indexCard = indexCard;

          this.form.setValue({
            nombre: this.indexCard.nombre,
            apellido: this.indexCard.apellido || '',
            email: this.indexCard.email || '',
            movil: this.indexCard.movil || '',
            telefonoCasa: this.indexCard.casa || '',
            domicilio: this.indexCard.domicilio || ''
          })
        })
      }

      else {

        this.form.setValue({
          nombre: 'profesor',
          apellido: 'profesorez',
          email: 'profesor@gmail.com',
          movil:'',
          telefonoCasa:'',
          domicilio:''
        })
      }
    })
  }

  updateIndexCard(){

     if(this.form.valid){

       let value = this.form.value;
       let indexCard = new IndexCard(value.nombre, value.apellido, value.email, value.movil, value.telefonoCasa, value.domicilio) 
       
       this._indexCardServices.updateIndexCard(indexCard,this.indexCardId,this.token).subscribe(()=>{

        this._modalController.notification.emit()
       })
     }
  }

  registration(){
   
    if (this.form.valid) {

      let value = this.form.value;
      let indexCard = new IndexCard(value.nombre, value.apellido, value.email, value.movil, value.telefonoCasa, value.domicilio) 

      this._indexCardServices.createIndexCard(indexCard,this.token).subscribe((res:any)=>{

        if(res.fichaDb){
          swal('El nombre ya está siendo utlizado, por favor elija otro');
          return
        }

        if(this._modalController.type==='professor' ){

          let professor = new Professor(res.fichaSaved.nombre, res.fichaSaved._id)

          this._professorServices.createProfessor(professor, this.token).subscribe(() => {

            this._modalController.hideModal()

            this._modalController.notification.emit()
          })
        }

        else if(this._modalController.type==='alumni'){

          let alumni = new Alumni(res.fichaSaved.nombre, res.fichaSaved._id)

          this._alumniServices.createAlumni(alumni, this.token).subscribe((res) => {

            this._modalController.hideModal()

            this._modalController.notification.emit()
          })
        }
      })     
    }
  }

  hideModal(){
    this.indexCardId=''
    this.indexCard = undefined
    this._modalController.hideModal()
  }

}
