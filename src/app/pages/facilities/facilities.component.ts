import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { UserServices } from 'src/app/providers/user.service';
import { FacilitiesService } from '../../providers/facilities.service';
import { Facilitie } from '../../models/facilitie.model';
import { FacilitiesModalController } from '../../modals/facilities-modal/facilities-modalController';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  token:string

  facilities:Facilitie[];

  from:number = 0;

  constructor(private _userServices:UserServices,
              private _facilitieService:FacilitiesService,
              private _facilitiesModalController:FacilitiesModalController) {
    this.token = this._userServices.token;
   }

  ngOnInit() {
    this.getFacilities()
    this._facilitieService.facilities$.subscribe((facilities)=>{
      this.facilities = facilities;
    })
  }

  getFacilities(){
    this._facilitieService.getFacilities(this.token,this.from).subscribe((facilities) => {})}

  postFacilitie(){
    this._facilitiesModalController.showModal()
  }

  putFacilicite(id:string){
    this._facilitiesModalController.showModal(id)
    this._facilitiesModalController.notification.emit()
  }

  changeStatus(facilitie:Facilitie){
    switch(facilitie.status){
      case true: facilitie.status = false; 
      break;
      case false: facilitie.status = true; 
      break;
    }
    this._facilitieService.putFacilitie(facilitie._id,facilitie,this.token).subscribe(()=>{})
  }

  editFacilitie(id:string){
    this._facilitiesModalController.showModal()
    this._facilitiesModalController.notification.emit({id})
  }

  deleteFacilitie(id:string){
    this._facilitieService.deleteFacilitie(id,this.token).subscribe(()=>{})
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    this.getFacilities()
  }
}
