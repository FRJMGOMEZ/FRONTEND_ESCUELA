
import { Component, OnInit } from '@angular/core';
import { TrackModalController } from './trackModalController';
import { Track } from 'src/app/models/track.model';
import { ManagerService } from '../../providers/manager.service';
import { Artist } from 'src/app/models/artist.model';
import { Assignation } from '../../models/track.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-track-modal',
  templateUrl: './track-modal.component.html',
  styleUrls: ['./track-modal.component.scss']
})
export class TrackModalComponent implements OnInit {

  track:Track

  artists:Artist[]=[]

  constructor(public _modalController:TrackModalController,
             public _managerServices:ManagerService) { }

  ngOnInit() {
    this._modalController.notification.subscribe(async()=>{

      if(this._modalController.id){

        let track:Track;
        if(this._managerServices.track){
          if(this._managerServices.track._id === this._modalController.id){
            track = this._managerServices.track;
          }else{
            let tracks = [];
            await this._managerServices.album.tracks.forEach((track: Track) => {
              tracks.push(track)
            })
            track = tracks.filter((track: Track) => {
              return track._id === this._modalController.id
            })[0]
          }
        }else{
          let tracks = [];
          this._managerServices.album.tracks.forEach((track: Track) => {
            tracks.push(track)
          })
          track = tracks.filter((track:Track) => {
            return track._id === this._modalController.id
          })[0]
        }

        let assignations =[]
        track.assignations.forEach(assignation => {
            assignations.push(assignation)
        });

        this.track = new Track(track.title,assignations, track.album, track.percent, track._id)

      }else{
        this.track = new Track('',[],this._managerServices.album,100)
      }

      this._managerServices.getItems(0, 100, 'artists').subscribe((artists: Artist[]) => {
        let artistInTrack = this.track.assignations.map((assignation: Assignation) => {
          return assignation.artist['_id']
        })
        this.artists = artists.filter((artist) => {
          if(artistInTrack.indexOf(artist._id)<0){
             return artist
          }
        })
      })
    })
  }

  postTrack(){
    if(this.track.title){
      this.track.assignations.forEach((assignation, index) => {
        this.track.assignations[index].artist = this.track.assignations[index].artist['_id']
      })
      this._managerServices.postTrack(this.track).subscribe((track: Track) => {
        this.track = track;
        this.hideModal()
      })
    }else{
     Swal.fire({
       text:'Debes de asignar un nombre a la pista',
       showCloseButton:true
     })
    }
  }

 async putTrack(){
    if(this.track.title){
    this._managerServices.putTrack(this.track,this._modalController.id).subscribe(()=>{
       this.hideModal()
    })}else{
      Swal.fire({
        text: 'Debes de asignar un nombre a la pista',
        showCloseButton: true
      })
    }
  }

  assignation:Assignation

  newAssignation (){
      this.assignation = {artist:undefined,percent:0,album:this.track.album['_id']||this.track.album}
  }

  postAssignation(){
    if(this.assignation.percent > this.track.percent || this.assignation.percent === 0){
      Swal.fire({
        text:`La asignación debe ser mayor a 0 e igual o menor a ${this.track.percent}`,
        showCloseButton:true
      })
    }else if(!this.assignation.artist){
      Swal.fire({
        text:'Escoge un artista',
        showCloseButton:true
      })
    }else{
      this.assignation.artist = this.artists.filter((artist)=>{return artist._id === this.assignation.artist})[0];
      let newAssignation = new Assignation(this.assignation.artist,this.assignation.percent,this.assignation.album);
      this.track.assignations.push(newAssignation);
      this.track.percent -= newAssignation.percent;
      this.artists = this.artists.filter((artist: Artist) => {
        return artist._id != this.assignation.artist['_id'];
      })
    }
  }

  removeAssignation(artistId:string){
    let assignation = this.track.assignations.filter((assignation:Assignation)=>{return assignation.artist['_id']=== artistId})[0];
    this.track.assignations = this.track.assignations.filter((assignation:Assignation)=>{return assignation.artist['_id'] != artistId})
    this.track.percent+=assignation.percent;
    let artist = new Artist(assignation.artist['indexcard'],assignation.artist['payments'],assignation.artist['user'])
    this.artists.push(artist)
    }


  hideModal(){
    this.assignation = undefined;
    this.artists = []
    this._modalController.hideModal()
    this.track = undefined;
  }
}
