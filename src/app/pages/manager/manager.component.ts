import { Component, OnInit, ElementRef, OnDestroy, ViewChild,Renderer2, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../providers/manager.service';
import { AlbumModalController } from 'src/app/modals/album-modal/albumModalController';
import { IndexcardModalController } from '../../modals/index-card-modal/indexcardModalController';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit,OnDestroy,AfterViewChecked {

  @ViewChild('searchGetColumn') searchGetColumn: ElementRef
  @ViewChild('navigateColumn') navigateColumn:ElementRef
 
  constructor(private _ar:ActivatedRoute,
              public _managerServices:ManagerService,
              public _albumsModalController:AlbumModalController,
              private _indexcardModalController:IndexcardModalController,
              private renderer:Renderer2) { }              
  
  ngOnInit() {

      this._ar.params.subscribe((params)=>{

      let input = params['input']
        if (input === '#' ){
           input = ''
        }

      let item = params['item'];
        if (item === '#' ){
          item = ''
        }

      this._managerServices.item = item;

      let from = Number(params['from']);
      this._managerServices.from = from;

       if(input){
         this._managerServices.searchItems(input, item, from).subscribe()    
       }else{
         if (item){
           this._managerServices.getItems(from).subscribe()
         }
       }

        let albumId = params['albumId'];
        let trackId = params['trackId'];
        let artistId = params['artistId'];
        let paymentId = params['paymentId'];
      
        if (albumId != '#'){
          if(this._managerServices.album){if(this._managerServices.album._id != albumId){
            this._managerServices.getItemById(albumId, 'album').subscribe()
          }}else{
            this._managerServices.getItemById(albumId, 'album').subscribe()
          }
         }

        if (trackId != '#'){
          if(this._managerServices.track){if(this._managerServices.track._id != trackId){
            this._managerServices.getItemById(trackId, 'track').subscribe()
          }}else{
             this._managerServices.getItemById(trackId,'track').subscribe()
          }
         }
        
        if (artistId != '#'){
          if(this._managerServices.artist){
            if(this._managerServices.artist._id != artistId){
              this._managerServices.getItemById(artistId, 'artist').subscribe()
            }
          }else{
            this._managerServices.getItemById(artistId, 'artist').subscribe()
          }
         }

        if (paymentId != '#'){
          
          if(this._managerServices.payment){
            if(this._managerServices.payment._id != paymentId){
              this._managerServices.getItemById(paymentId, 'payment').subscribe()
            }
          }else{
            this._managerServices.getItemById(paymentId, 'payment').subscribe()
          }
          }
    
    }) 
}

  ngAfterViewChecked(): void {
    this.columnsSize()
  }

  columnsSize() {
    if (this.searchGetColumn && !this.navigateColumn) {
      this.renderer.addClass(this.searchGetColumn.nativeElement, 'col-12')
    } else if (this.navigateColumn && !this.searchGetColumn) {
      this.renderer.addClass(this.navigateColumn.nativeElement, 'col-12')
    } else {
      if (this.searchGetColumn && this.navigateColumn) {
        this.renderer.removeClass(this.searchGetColumn.nativeElement, 'col-12')
        this.renderer.removeClass(this.navigateColumn.nativeElement, 'col-12')
        this.renderer.addClass(this.searchGetColumn.nativeElement, 'col-4')
        this.renderer.addClass(this.navigateColumn.nativeElement, 'col-8')
      }
    }
  }

  placeHolderContent() {
    let message;
    switch (this._managerServices.item) {
      case 'artists': message = 'Buscar por artistas';
        break;
      case 'albums': message = 'Buscar por albumes';
        break;
      case 'tracks': message = 'Buscar por pistas';
        break;
      case 'payments': message = 'Buscar por fecha de liquidación con formato dd/mm/aaaa';
        break;
      default: message = 'Selecciona un criterio de búsqueda'
    }
    return message
  }

  postAlbum() {
    this._albumsModalController.notification.emit()
    this._albumsModalController.showModal()
  }

  postArtist() {
    this._indexcardModalController.showModal()
    this._indexcardModalController.notification.emit('ARTIST')
  }


ngOnDestroy(): void {

  if(!this._managerServices.dataStored){

    this._managerServices.album = undefined;
    this._managerServices.track = undefined;
    this._managerServices.artist = undefined;
    this._managerServices.payment = undefined;

    this._managerServices.albums = [];
    this._managerServices.tracks = [];
    this._managerServices.artists = [];
    this._managerServices.payments = [];

    this._managerServices.input = undefined;
    this._managerServices.from = 0;
  }
}
}

