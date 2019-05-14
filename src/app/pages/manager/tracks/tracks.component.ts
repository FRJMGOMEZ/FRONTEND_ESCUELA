import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from '../../../providers/manager.service';
import { TrackModalController } from '../../../modals/track-modal/trackModalController';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})

export class TracksComponent implements OnInit {

  @Input('albumId') albumId:string

  constructor(public _managerServices:ManagerService,
              private _trackModalController:TrackModalController) { }

  ngOnInit() {
  }

  changeFrom(number: number) {
    if (this._managerServices.from + number >= 0) {
      this._managerServices.from += number;
    }
      this._managerServices.getOrSearch('tracks')
  }

  pushTrack(){
     this._trackModalController.showModal()
     this._trackModalController.notification.emit()
  }

  putTrack(trackId:string){
    this._trackModalController.showModal(trackId)
    this._trackModalController.notification.emit()
  }

  pullTrack(trackId:string){
    this._managerServices.deleteTrack(trackId).subscribe()
  }

}
