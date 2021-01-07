import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from '../../../../providers/manager.service';
import { TrackModalController } from '../../../../modals/track-modal/trackModalController';
import { IndexcardModalController } from 'src/app/modals/index-card-modal/indexcard-modal-controller';
import { SwalService } from 'src/app/providers/swal.service';
import { OverviewComponent } from '../overview.component';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['../overview.component.scss']
})

export class TracksComponent implements OnInit {

  @Input('trackId') trackId: string

  constructor(public _managerServices:ManagerService,
              private _trackModalController:TrackModalController,
              public overviewComponent:OverviewComponent,
              private _indexcardModalController:IndexcardModalController,
              private _swalServices:SwalService) { }

  ngOnInit() {
  }

  changeFrom(number: number) {
    if (this._managerServices.from + number >= 0) {
      this._managerServices.from += number;
    }
      this._managerServices.getOrSearch('tracks')
  }

  putTrack(trackId: string) {
    this._trackModalController.showModal(trackId)
    this._trackModalController.notification.emit()
  }

  deleteTrack(){
    this._swalServices.confirmDelete().then((res:boolean)=>{
      if(res){
        this._managerServices.deleteTrack(this.trackId).subscribe()
      }
    })
  }

  pushAssignation(trackId: string) {
    this._trackModalController.showModal(trackId)
    this._trackModalController.notification.emit()
  }
}
