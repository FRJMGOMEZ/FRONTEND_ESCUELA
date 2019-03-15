import { Component, OnInit } from '@angular/core';
import { FacilitiesModalController } from './facilities-modalController';
import { Facilitie, FacilitieOrder } from '../../models/facilitie.model';
import { FacilitiesService } from '../../providers/facilities.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-facilities-modal',
  templateUrl: './facilities-modal.component.html',
  styleUrls: ['./facilities-modal.component.scss']
})
export class FacilitiesModalComponent implements OnInit {

  creation:boolean=true;
  edition:boolean=false;

  facilitie:Facilitie=new Facilitie('',undefined)

  facilitieSubscription:Subscription = null;

  constructor(public _modalController:FacilitiesModalController,
              private _facilitieServices:FacilitiesService) {}
  ngOnInit() {

    this._modalController.notification.subscribe(()=>{
        this.facilitieSubscription = this._facilitieServices.facilities$.subscribe((faciliteOrder: FacilitieOrder) => {
          if (faciliteOrder.order === 'getById') {
            this.facilitie = faciliteOrder.facilitie;
            this.edition = true;
            this.creation = false;
          }
        })
        this._facilitieServices.getFacilitieById(this._modalController.id).subscribe()
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
    if (this.facilitieSubscription != null) {this.facilitieSubscription.unsubscribe()}
    this._modalController.hideModal()
  }
}
