import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { ManagerService } from '../../../providers/manager.service';
import { IndexcardModalController } from 'src/app/modals/index-card-modal/indexcardModalController';
import { TrackModalController } from '../../../modals/track-modal/trackModalController';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  @ViewChild('input') input: ElementRef
  @Input('trackId') trackId: string
  
  constructor(public _managerServices:ManagerService,
             private _indexcardModalController:IndexcardModalController,
             private _trackModalController:TrackModalController) { }

  putArtist(id:string){
    this._indexcardModalController.showModal(id)
    this._indexcardModalController.notification.emit('ARTIST')
  }

  changeFrom(number: number) {
    if (this._managerServices.from + number >= 0) {
      this._managerServices.from += Number(number);
    }
    this._managerServices.getOrSearch('artists')
  }

  pushAssignation(trackId:string){
    console.log(trackId)
      this._trackModalController.showModal(trackId)
      this._trackModalController.notification.emit()
  }
}
