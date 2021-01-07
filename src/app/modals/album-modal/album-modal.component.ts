import { Component, OnInit } from '@angular/core';
import { AlbumModalController } from './album-modal-controller.service';
import { ManagerService } from '../../providers/manager.service';
import { Album } from 'src/app/models/album.models';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/providers/swal.service';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent implements OnInit {

  album:Album

  constructor(public _modalController:AlbumModalController,
              public _managerServices:ManagerService,
              public _swalServices:SwalService) { }

  ngOnInit() {
     this._modalController.notification.subscribe(()=>{
       if(!this._modalController.hidden){
         if (this._modalController.id) {
           let album = this._managerServices.albums.filter((album) => {
             if (album._id === this._modalController.id) {
               return album
             }
           })[0]
           this.album = new Album(album.title, album.tracks, album.date)
         } else {
           this.album = new Album('', [], new Date())
         }
       }
     })
  }

  postAlbum(){
    this._managerServices.postAlbum(this.album).subscribe((album:Album)=>{
    this.hideModal()
    this._modalController.notification.emit(album._id);
    this._swalServices.itsCreated("album",album.title);
    })
  }

  putAlbum(){
    this._managerServices.putAlbum(this.album,this._modalController.id).subscribe(()=>{
      this.hideModal()
    })
  }

  hideModal(){
    this.album = undefined;
    this._modalController.hideModal()
  }
}
