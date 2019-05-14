import { Component, OnInit } from '@angular/core';
import { TrackModalController } from './trackModalController';
import { Track } from 'src/app/models/track.model';
import { ManagerService } from '../../providers/manager.service';
import { Artist } from 'src/app/models/artist.model';
import { Assignation } from '../../models/track.model';

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

      this.track = new Track('',[],undefined,100)
      if(this._modalController.id){
        if(this._managerServices.tracks.length > 0){
          let tracks = this._managerServices.tracks;   
          this.track = tracks.filter((track: Track) => {
            return track._id === this._modalController.id
          })[0]  
        }
          let tracks:any[] = await this._managerServices.album.tracks;
          this.track = tracks.filter((track) => {
           return track._id === this._modalController.id
          })[0]
      }else{
        this.track.album = this._managerServices.album
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
    this._managerServices.postTrack(this.track).subscribe((track:Track)=>{
      this.track = track;
      this.hideModal()
    })
  }

  putTrack(){
    this.track.assignations=[];
    this._managerServices.putTrack(this.track,this._modalController.id).subscribe(()=>{
      this.hideModal() 
    })
  }

  assignation:Assignation
  newAssignation (){
      this.assignation = {artist:'',percent:0}
  }

  postAssignation(){
    this._managerServices.postAssignation(this.assignation).subscribe((assignation:Assignation)=>{
              this.track.assignations.push(assignation)
              this.track.percent-=assignation.percent;
    })
  }

  removeAssignation(assignationId:string){
    this._managerServices.removeAssignation(assignationId).subscribe((assignationRemoved:Assignation)=>{
              this.track.assignations = this.track.assignations.filter((assignation:Assignation)=>{return assignation._id != assignationId})
              this.track.percent+=assignationRemoved.percent;
    })
  }

  hideModal(){
    this._modalController.hideModal()
    this.artists = []
    if(!this.track._id){
     this.track.assignations.forEach((assignation:Assignation)=>{
       this._managerServices.removeAssignation(assignation._id).subscribe()
     })
    }
    this.track = undefined;
  }
}
