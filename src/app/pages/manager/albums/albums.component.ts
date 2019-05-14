import { Component,ViewChild, ElementRef} from '@angular/core';
import { ManagerService } from '../../../providers/manager.service';
import { AlbumModalController } from '../../../modals/album-modal/albumModalController';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent  {

  @ViewChild('input') input: ElementRef

  constructor(public _managerServices:ManagerService,
              private _albumModalController:AlbumModalController) { }

  putAlbum(id:string){
   this._albumModalController.showModal(id)
   this._albumModalController.notification.emit()
  }

  changeFrom(number: number) {
    if (this._managerServices.from + number >= 0) {
      this._managerServices.from += number;
    }
    this._managerServices.getOrSearch('albums')
  }
}
