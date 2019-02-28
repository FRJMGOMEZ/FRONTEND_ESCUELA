import { Component, OnInit } from '@angular/core';
import { FacilitiesModalController } from './facilities-modalController';
import { Facilitie } from '../../models/facilitie.model';
import { FacilitiesService } from '../../providers/facilities.service';
import { UserServices } from '../../providers/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-facilities-modal',
  templateUrl: './facilities-modal.component.html',
  styleUrls: ['./facilities-modal.component.scss']
})
export class FacilitiesModalComponent implements OnInit {

  creation:boolean=true;
  edition:boolean=false;

  facilitie:Facilitie=new Facilitie('',[],undefined)

  constructor(public _modalController:FacilitiesModalController,
              private _facilitieServices:FacilitiesService) {
               }

  ngOnInit() {
    this._modalController.notification.subscribe((res)=>{
   if(res){
     if(res.message && res.message === 'updateFacilitie'){
      this._facilitieServices.getFacilitieById(this._modalController.id).subscribe((facilitie)=>{          
        this.facilitie = facilitie;
        this.edition = true;
        this.creation = false;
      })
     }
    }
  })
  }

  postFacilitie(form:NgForm){
    this.facilitie.name = form.value.facilitieName;
   this._facilitieServices.postFacilitie(this.facilitie).subscribe(()=>{
   this._modalController.hideModal()
   })
  }

  putFacilitie(form:NgForm){
    this.facilitie.name = form.value.facilitieName;
   this._facilitieServices.putFacilitie(this.facilitie._id,this.facilitie).subscribe(()=>{
     this._modalController.hideModal()
   })
  }
  
  hideModal() {
    this.facilitie = null;
    this.creation = true;
    this.edition = false;
    this._modalController.hideModal()
  }
}
