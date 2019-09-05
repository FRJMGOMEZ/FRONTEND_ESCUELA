import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacilitiesService } from '../../providers/facilities.service';
import { Facilitie } from '../../models/facilitie.model';
import { FacilitiesModalController } from '../../modals/facilities-modal/facilities-modalController';
import { SwalService } from '../../providers/swal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-facilities',
  templateUrl: "./facilities.component.html", styles: ['table { table-layout: fixed; }', 'div.scrollable {width: 100%;height: 100%;margin: 0;padding: 0;overflow: auto;}']
})
export class FacilitiesComponent implements OnInit,OnDestroy {

  facilities:Facilitie[] = []
  facilitiesSocket:Subscription=null;

  from:number = 0;

  constructor(public _facilitieServices:FacilitiesService,
              public _facilitiesModalController:FacilitiesModalController,
              private _swalServices:SwalService) {
   }

  ngOnInit() {
    this._facilitieServices.getFacilities().subscribe();
    this.facilitiesSocket = this._facilitieServices.facililiteSocket().subscribe()
  }

  putFacilitie(id:string){
    this._facilitiesModalController.showModal(id)
    this._facilitiesModalController.notification.emit()
  }

  changeStatus(facilitie:Facilitie){
    if(facilitie.status){
      facilitie.status=false
    }else{
      facilitie.status=true
    }
    this._facilitieServices.putFacilitie(facilitie._id,facilitie).subscribe()
  }

  changeFrom(number: number) {
    if (this.from + number >= 0) {
      this.from += number;
    }
    this._facilitieServices.facilities = [];
    this._facilitieServices.getFacilities(this.from).subscribe()
  }

  deleteFacilitie(id:string){
      this._swalServices.confirmDelete().then((res)=>{
        if(res){
          this._facilitieServices.deleteFacilitie(id).subscribe(()=>{
            this._facilitieServices.getFacilities(this.from).subscribe()
          })
        }
    })
  }

  postFacilitie(){
    this._facilitiesModalController.showModal();
    this._facilitiesModalController.notification.emit();
  }

  ngOnDestroy(){
    this._facilitieServices.facilities=[]
    this.facilitiesSocket.unsubscribe()
  }
}
