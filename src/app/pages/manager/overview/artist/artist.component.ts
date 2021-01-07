import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { ManagerService } from '../../../../providers/manager.service';
import { IndexcardModalController } from 'src/app/modals/index-card-modal/indexcard-modal-controller.service';
import { TrackModalController } from '../../../../modals/track-modal/track-modal-controller.service';
import * as _ from 'underscore'
import { AssignationsModalController } from '../../../../modals/assignations-modal/assignations-modal-controller.service';
import { OverviewComponent } from '../overview.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['../overview.component.scss']
})
export class ArtistComponent implements OnInit {

  @ViewChild('input') input: ElementRef

  @Input('artistId') artistId: string

  ngOnInit(): void {
    if(this.artistId){
    this._managerServices.artist.payments =  _.sortBy(this._managerServices.artist.payments,(payment)=>{
       return payment.track
    })
    }
  }

  constructor(public _managerServices:ManagerService,
             private _indexcardModalController:IndexcardModalController,
             private _trackModalController:TrackModalController,
             public overviewComponent:OverviewComponent,
             public _assignationsModalController:AssignationsModalController) { }


  changeFrom(number: number) {
    if (this._managerServices.from + number >= 0) {
      this._managerServices.from += Number(number);
    }
    this._managerServices.getOrSearch('artists')
  }

  putArtist(id: string) {
    this._indexcardModalController.showModal(id)
    this._indexcardModalController.notification.emit('ARTIST')
  }

  deleteArtist(){
     this._managerServices.deleteArtist(this.artistId).subscribe()
  }

  showAssignations(){
        this._assignationsModalController.showModal(this.artistId);
        this._assignationsModalController.notification.emit();
  }
}
