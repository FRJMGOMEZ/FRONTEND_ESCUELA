import { Component, OnInit } from '@angular/core';
import { FacilitiesModalController } from './facilities-modal-controller.service';
import { Facilitie } from '../../models/facilitie.model';
import { FacilitiesService } from '../../providers/facilities.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-facilities-modal',
  templateUrl: './facilities-modal.component.html',
  styleUrls: ['./facilities-modal.component.scss']
})
export class FacilitiesModalComponent implements OnInit {

  creation:boolean=false;
  edition:boolean=false;

  facilitie:Facilitie

  constructor(public _modalController:FacilitiesModalController,
              private _facilitieServices:FacilitiesService) {}
  ngOnInit() {
    this._modalController.notification.subscribe(()=>{
      if(this._modalController.id){
        let newFacilitie = this._facilitieServices.facilities.filter((facilitie) => { return facilitie._id === this._modalController.id })[0];
        this.facilitie = new Facilitie(newFacilitie.name, newFacilitie.status, newFacilitie._id);
        this.edition = true;
        this.creation = false;
      }else{
        this.facilitie = new Facilitie('');
        this.creation=true;
        this.edition = false;
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
    this.facilitie=undefined;
    this.creation = true;
    this.edition = false;
    this._modalController.hideModal()
  }
}
