import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../../providers/manager.service';
import { AlbumModalController } from 'src/app/modals/album-modal/albumModalController';
import { IndexcardModalController } from '../../../modals/index-card-modal/indexcardModalController';
import { DemoService } from '../../../providers/demo.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit,AfterViewInit {

  @ViewChild('searchGetColumn') searchGetColumn: ElementRef
  @ViewChild('navigateColumn') navigateColumn: ElementRef

  @ViewChild('albumCollapseControl') albumCollapseControl: ElementRef;
  @ViewChild('trackCollapseControl') trackCollapseControl: ElementRef;
  @ViewChild('artistCollapseControl') artistCollapseControl: ElementRef;

  constructor(private _ar: ActivatedRoute,
    public _managerServices: ManagerService,
    public _albumsModalController: AlbumModalController,
    private _indexcardModalController: IndexcardModalController,
    private renderer: Renderer2,
    public _demoServices:DemoService) { }

  ngOnInit() {

    this._ar.params.subscribe(async(params) => {

      let input = params['input']
      if (input === '#') {
        input = ''
      }

      let item = params['item'];
      if (item === '#') {
        item = ''
      }

      this._managerServices.item = item;

      let from = Number(params['from']);
      this._managerServices.from = from;

      if (input) {
        await this._managerServices.searchItems(input, item, from).subscribe()
      } else {
        if (item) {
          await this._managerServices.getItems(from).subscribe()
        }
      }

      let albumId = params['albumId'];
      let trackId = params['trackId'];
      let artistId = params['artistId'];

      if (albumId != '#') {
        if (this._managerServices.album) {
          if (this._managerServices.album._id != albumId) {
           await this._managerServices.getItemById(albumId, 'album').subscribe(()=>{
             this.collapseAcordions('album')
           })
          }
        } else {
         await this._managerServices.getItemById(albumId, 'album').subscribe(()=>{
           this.collapseAcordions('album')
         })
        }
      }

      if (trackId != '#') {
        if (this._managerServices.track) {
          if (this._managerServices.track._id != trackId) {
           await this._managerServices.getItemById(trackId, 'track').subscribe(()=>{
             this.collapseAcordions('track')
           })
          }
        } else {
          await this._managerServices.getItemById(trackId, 'track').subscribe(()=>{
            this.collapseAcordions('track')
          })
        }
      }

      if (artistId != '#') {
        if (this._managerServices.artist) {
          if (this._managerServices.artist._id != artistId) {
            await this._managerServices.getItemById(artistId, 'artist').subscribe(()=>{
              this.collapseAcordions('artist')
            })
          }
        } else {
         await this._managerServices.getItemById(artistId, 'artist').subscribe(()=>{
           this.collapseAcordions('artist')
         })
        }
      }
    })

    this._albumsModalController.notification.subscribe((id) => {
      if (this._albumsModalController.hidden) {
        if (!this._managerServices.album) {
          this.idNavigation(id, 'album');
        }
      }

    })

    this._indexcardModalController.notification.subscribe((id) => {
      if (this._indexcardModalController.hidden) {
        if (!this._managerServices.artist) {
          this.idNavigation(id, 'artist');
        }
      }
    })
  }

  ngAfterViewInit(){
    this._demoServices.managerOverviewPopup();
  }

  ngAfterViewChecked(): void {
    this.columnsSize()

  }

  async idNavigation(id?: string, collection?: string) {
    await this._managerServices.idNavigation(id, collection);
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
        this.renderer.addClass(this.searchGetColumn.nativeElement, 'col-3')
        this.renderer.addClass(this.navigateColumn.nativeElement, 'col-9')
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
      default: message = 'Selecciona un criterio de búsqueda'
    }
    return message
  }

  collapseAcordions(type: string) {
    timer(500).subscribe(()=>{
      switch (type) {
        case 'artist':
          this.renderer.addClass(this.artistCollapseControl.nativeElement, 'show')
          if (this.albumCollapseControl) { this.renderer.removeClass(this.albumCollapseControl.nativeElement, 'show'); this.renderer.addClass(this.albumCollapseControl.nativeElement, 'hide'); }
          if (this.trackCollapseControl) { this.renderer.removeClass(this.trackCollapseControl.nativeElement, 'show'); this.renderer.addClass(this.trackCollapseControl.nativeElement, 'hide'); }
          break;
        case 'album':
          this.renderer.addClass(this.albumCollapseControl.nativeElement, 'show')
          if (this.artistCollapseControl) { this.renderer.removeClass(this.artistCollapseControl.nativeElement, 'show'); this.renderer.addClass(this.artistCollapseControl.nativeElement, 'hide'); }
          if (this.trackCollapseControl) { this.renderer.removeClass(this.trackCollapseControl.nativeElement, 'show'); this.renderer.addClass(this.trackCollapseControl.nativeElement, 'hide'); }
          break;
        case 'track':
          this.renderer.addClass(this.trackCollapseControl.nativeElement, 'show')
          if (this.albumCollapseControl) { this.renderer.removeClass(this.albumCollapseControl.nativeElement, 'show'); this.renderer.addClass(this.albumCollapseControl.nativeElement, 'hide'); }
          if (this.artistCollapseControl) { this.renderer.removeClass(this.artistCollapseControl.nativeElement, 'show'); this.renderer.addClass(this.artistCollapseControl.nativeElement, 'hide'); }
          break;
      }
    })
  }

  postAlbum() {
    this._albumsModalController.showModal()
    this._albumsModalController.notification.emit()
  }

  postArtist() {
    this._indexcardModalController.showModal()
    this._indexcardModalController.notification.emit('ARTIST');
  }


  ngOnDestroy(): void {

    if (!this._managerServices.dataStored) {

      this._managerServices.album = undefined;
      this._managerServices.track = undefined;
      this._managerServices.artist = undefined;

      this._managerServices.albums = [];
      this._managerServices.tracks = [];
      this._managerServices.artists = [];

      this._managerServices.input = undefined;
      this._managerServices.from = 0;
    }
  }

}
