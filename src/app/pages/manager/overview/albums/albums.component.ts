import { Component,ViewChild, ElementRef, Input} from '@angular/core';
import { ManagerService } from '../../../../providers/manager.service';
import { AlbumModalController } from '../../../../modals/album-modal/albumModalController';
import { TrackModalController } from '../../../../modals/track-modal/trackModalController';
import { SwalService } from 'src/app/providers/swal.service';
import Swal from 'sweetalert2';
import { OverviewComponent } from '../overview.component';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['../overview.component.scss']
})
export class AlbumsComponent  {

  @ViewChild('input') input: ElementRef

  @Input('albumId') albumId: string

  constructor(public _managerServices:ManagerService,
              private _albumModalController:AlbumModalController,
              public overviewComponent:OverviewComponent,
              public _trackModalController:TrackModalController,
              private _swalService:SwalService) { }

  putAlbum(){
   this._albumModalController.showModal(this.albumId)
   this._albumModalController.notification.emit()
  }

  deleteAlbum() {
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "Los tracks del album que no tengan asignaciones a artistas se eliminarán",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._managerServices.deleteAlbum(this.albumId).subscribe()
      }
    })
  }

  pushTrack() {
    this._trackModalController.showModal()
    this._trackModalController.notification.emit()
  }

  putTrack(trackId: string) {
    this._trackModalController.showModal(trackId)
    this._trackModalController.notification.emit()
  }

  pullTrack(trackId: string) {
    this._swalService.confirmDelete().then((res:boolean) => {
      if(res){
        this._managerServices.deleteTrack(trackId).subscribe()
      }
    })
  }

  changeFrom(number: number) {
    if (this._managerServices.from + number >= 0) {
      this._managerServices.from += number;
    }
    this._managerServices.getOrSearch('albums')
  }

}
