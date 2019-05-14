import { Component, OnInit } from '@angular/core';
import { AlbumModalController } from './albumModalController';
import { ManagerService } from '../../providers/manager.service';
import { Album } from 'src/app/models/album.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent implements OnInit {

  album:Album

  constructor(public _modalController:AlbumModalController,
              public _managerServices:ManagerService,
              private _router:Router) { }

  ngOnInit() {
     this._modalController.notification.subscribe(()=>{       
      if(this._modalController.id){
        let album =  this._managerServices.albums.filter((album)=>{
          if(album._id === this._modalController.id){
            return album
          }})[0]
        this.album = new Album(album.title,album.tracks,album.date)   
      }else{
        this.album = new Album('',[],new Date())
      }
     })
  }

  postAlbum(){
    this._managerServices.postAlbum(this.album).subscribe(()=>{
    this._managerServices.getOrSearch('albums')
    this.hideModal()
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
