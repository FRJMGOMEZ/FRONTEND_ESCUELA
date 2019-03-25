import { Component, OnInit } from '@angular/core';
import { FacilitiesModalController } from './facilities-modalController';
import { Facilitie } from '../../models/facilitie.model';
import { FacilitiesService } from '../../providers/facilities.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-facilities-modal',
  templateUrl: './facilities-modal.component.html',
  styleUrls: ['./facilities-modal.component.scss']
})
export class FacilitiesModalComponent implements OnInit {

  creation:boolean=true;
  edition:boolean=false;

  facilitie:Facilitie=new Facilitie('',undefined)

  constructor(public _modalController:FacilitiesModalController,
              private _facilitieServices:FacilitiesService) {}
  ngOnInit() {
    this._modalController.notification.subscribe(()=>{
        this.facilitie = this._facilitieServices.facilities.filter((facilitie)=>{return facilitie._id === this._modalController.id})[0];
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
    this.facilitie.name = '';
    this.creation = true;
    this.edition = false;
    this._modalController.hideModal()
  }
}
