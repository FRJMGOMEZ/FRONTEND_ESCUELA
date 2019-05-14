import { Injectable } from '@angular/core';
import { Album } from '../models/album.models';
import { Track, Assignation } from '../models/track.model';
import { Artist } from '../models/artist.model';
import { Payment } from '../models/payment.model';
import { UserServices } from './user.service';
import { URL_SERVICES } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import { TrackModalController } from '../modals/track-modal/trackModalController';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  album:Album
  track:Track
  artist:Artist
  payment:Payment

  albumsCount:number
  tracksCount:number
  artistsCount:number
  paymentsCount:number

  albums:Album[]=[]
  tracks:Track[]=[]
  artists:Artist[]=[]
  payments:Payment[]=[]
  
  input: string=''
  from:number=0;
  item: string
  count:number=0

  dataStored:boolean=false

  constructor(public _userServices:UserServices,
             private http:HttpClient,
             private _errorHandler:ErrorHandlerService,
             private _router:Router,
             private _trackModalController:TrackModalController) {}

  getOrSearch(item?: string, input: string = '#') {

    if(this.item != item){this.from = 0}
    this.item = item || this.item;

    if(this.input != input){this.from = 0}
    
    this.input = input;
    
    let albumId;
    let trackId;
    let artistId;
    let paymentId;

    if (this.album) { albumId = this.album._id } else { albumId = '#'}
    if (this.track) { trackId = this.track._id } else { trackId = '#' }
    if (this.artist) { artistId = this.artist._id } else { artistId = '#' }
    if (this.payment) { paymentId = this.payment._id } else { paymentId = '#' }

    let currentUrl = this._router.url;
    let currentUrlArray = currentUrl.split('/');
    currentUrlArray.forEach((character,index)=>{
      if (character === '%23') { currentUrlArray[index] ='#'}
    })
    currentUrl = currentUrlArray.join('/');
 
    let url = `/manager/${this.item}/${input}/${this.from}/${albumId}/${trackId}/${artistId}/${paymentId}`;
   
    if(currentUrl != url){
      this.albums = [];
      this.artists = [];
      this.tracks = [];
      this.payments = [];
      this._router.navigate([url])
    }
  }

  idNavigation(id?:string,collection?:string) {

    let albumId;
    let trackId;
    let artistId;
    let paymentId;

    switch (collection) {
      case 'artist': artistId = id
        if (this.album) { albumId = this.album._id } else { albumId = '#' }
        if (this.track) { trackId = this.track._id } else { trackId = '#' }
        if (this.payment) { paymentId = this.payment._id } else { paymentId = '#' };
        break;
      case 'album': albumId = id
        if (this.track) { trackId = this.track._id } else { trackId = '#' }
        if (this.payment) { paymentId = this.payment._id } else { paymentId = '#' };
        if (this.artist) { artistId = this.artist._id } else { artistId = '#' }
        break;
      case 'track': trackId = id
        if (this.album) { albumId = this.album._id } else { albumId = '#' }
        if (this.payment) { paymentId = this.payment._id } else { paymentId = '#' };
        if (this.artist) { artistId = this.artist._id } else { artistId = '#' };
        break;
      case 'payment': paymentId = id
        if (this.album) { albumId = this.album._id } else { albumId = '#' }
        if (this.track) { trackId = this.track._id } else { trackId = '#' }
        if (this.artist) { artistId = this.artist._id } else { artistId = '#' };
      break;
      default:
        if (this.album) { albumId = this.album._id } else { albumId = '#' }
        if (this.track) { trackId = this.track._id } else { trackId = '#' }
        if (this.artist) { artistId = this.artist._id } else { artistId = '#' };
        if (this.payment) { albumId = this.payment._id } else { paymentId = '#' };
      break;
    }
    let item = this.item || '#';
    let from = this.from;
    let input = this.input || '#';
    let url = `/manager/${item}/${input}/${from}/${albumId}/${trackId}/${artistId}/${paymentId}`;
    this._router.navigate([url])
  }

  getItems(from: number = 0, limit: number = 6,item?:string){
    item = item || this.item;
    let url = `${URL_SERVICES}${item}?from=${from}&limit=${limit}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      switch (item) {
        case 'tracks': this.tracks = res.tracks; this.count = res.count;
          break;
        case 'albums':
        this.albums = res.albums; this.count = res.count;;
          break;
        case 'artists': 
        if(this._trackModalController.hidden){
          this.artists = res.artists;
          this.count = res.count;
        }else{
          return res.artists
        };
          break;
        case 'payments': this.payments = res.payments; this.count = res.count;
      }
    }),
      catchError(this._errorHandler.handleError))
  }

  getItemById(id: string, collection: string) {
    let url = `${URL_SERVICES}searchById/${collection}/${id}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      switch (collection) {
        case 'artist': this.artist = res.artist;
          break;
        case 'album': this.album = res.album;
          break;
        case 'track': this.track = res.track;
          break;
        case 'payment': this.payment = res.payment;
      }
    }),
      catchError(this._errorHandler.handleError))
  }

  searchItems(input: string, collection: string, from: number = 0, limit: number = 6) {

    if(collection === 'payments' ){
      let myDate = input.split('/').map((date) => { return Number(date) })
      input = String(new Date(myDate[2], myDate[1], myDate[0]).getTime());
    }
    
    let url = `${URL_SERVICES}search/${collection}/${input}?from=${from}&limit=${limit}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      switch (collection) {
        case 'tracks': this.tracks = res.tracks; this.count = res.count;
          break;
        case 'albums': this.albums = res.albums; this.count = res.count;
          break;
        case 'artists':
          if (this._trackModalController.hidden) {
            this.artists = res.artists;
            this.count = res.count;
          } else {
            return res.artists
          };
          break;
        case 'payments': this.payments = res.payments; this.count = res.count;
      }
    }),
      catchError(this._errorHandler.handleError))
  }

  postAlbum(album: Album) {
    let url = `${URL_SERVICES}album`;
    return this.http.post(url, album , { headers: this._userServices.headers }).pipe(map((res: any) => {
      if (this.albums.length < 6) {
        this.albums.push(res.album)
      }
      this.albumsCount++
    }),
    catchError(this._errorHandler.handleError))
  }

  postTrack(track: Track) {
    let url = `${URL_SERVICES}track`;
    return this.http.post(url, track, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.album = res.album;
      return res.track
    }),
      catchError(this._errorHandler.handleError))
  }

  postArtist(artist: Artist) {
    let url = `${URL_SERVICES}artist`;
    return this.http.post(url, artist, { headers: this._userServices.headers }).pipe(map((res: any) => {
      (res.artist)
      if (this.artists.length < 6) {
        (this.artists.length)
        this.artists.push(res.artist)
      }
    }),
      catchError(this._errorHandler.handleError))
  }

  putAlbum(album: Album, id: string) {
    let url = `${URL_SERVICES}album/${id}`;
    return this.http.put(url, album, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.albums.forEach((album:Album, index) => {
        if (album._id === res.album._id) {
          this.albums[index] = res.album;
        }
      })
    }),
    catchError(this._errorHandler.handleError))
  }

  putTrack(track: Track, id: string) {
    let url = `${URL_SERVICES}track/${id}`;
    return this.http.put(url, track, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.tracks.forEach((track: Track, index) => {
        if (track._id === res.track._id) {
          this.tracks[index] = res.track;
        }
      });
      this.album.tracks.forEach((track:Track,index)=>{
          if(track._id === id){
            this.album.tracks[index]=res.track
          }
      })
    }),
      catchError(this._errorHandler.handleError))
  }

  putArtist(artistUpdated: Artist) {
    this.artists.forEach((artist: Artist, index) => {
      if (artist._id === artistUpdated._id) {
        this.artists[index] = artistUpdated;
      }
    })
  }

  deleteAlbum(id: string) {
    let url = `${URL_SERVICES}album/${id}`
    return this.http.delete(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.albums = this.albums.filter((album:Album) => { return album._id != res.album })
      this.albumsCount--
    }),
    catchError(this._errorHandler.handleError))
  }

  deleteTrack(id: string) {
    let url = `${URL_SERVICES}track/${id}`
    return this.http.delete(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.tracks = this.tracks.filter((track: Track) => { return track._id != res.track })
      if(this.album){
        this.album.tracks = this.album.tracks.filter((track:any)=>{return track._id != id});
      }
    }),
    catchError(this._errorHandler.handleError))
  }

  deleteArtist(id:string){
    let url = `${URL_SERVICES}artist/${id}`
    return this.http.delete(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
        this.artists = this.artists.filter((artist:Artist)=>{return artist._id != res.artist})
    }),
    catchError(this._errorHandler.handleError))
  }

  postAssignation(assignation:Assignation){
    let url = `${URL_SERVICES}assignation`
    return this.http.post(url,assignation).pipe(map((res:any)=>{
      return res.assignation
    }))
  }

  removeAssignation(id:string){
    let url = `${URL_SERVICES}assignation/${id}`
     return this.http.delete(url).pipe(map((res:any)=>{
          return res.assignation
      }))
  }


}
