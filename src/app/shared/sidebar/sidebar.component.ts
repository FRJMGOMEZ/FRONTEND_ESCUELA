import { Component} from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProjectServices } from '../../providers/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CalendarService } from '../../providers/calendar.service';
import { DemoService } from '../../providers/demo.service';
import { ManagerService } from '../../providers/manager.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(public _userServices:UserServices,
              private _projectServices:ProjectServices,
              private router:Router,
              private _calendarServices:CalendarService,
              public _demoServices:DemoService,
              public _router:Router,
              public _ar:ActivatedRoute,
              private _managerServices:ManagerService) {}

  toManagerOverview(){

    let item;
    let input = this._managerServices.input || '#';
    let from=this._managerServices.from;
   
    let albumId;
    let trackId;
    let artistId;

    if (this._managerServices.album) { albumId = this._managerServices.album._id } else { albumId = '#' }
    if (this._managerServices.track) { trackId = this._managerServices.track._id } else { trackId = '#' }
    if (this._managerServices.artist) { artistId = this._managerServices.artist._id } else { artistId = '#' }

    if (this._managerServices.albums.length !=0) { item = 'albums'}
    else if (this._managerServices.tracks.length != 0) { item = 'tracks'}
    else if (this._managerServices.artists.length != 0) { item = 'artists'}
    else { item = '#'}

    if (item === '#' ){
      item = 'albums';
    }

    let url = `/overview/${item}/${input}/${from}/${albumId}/${trackId}/${artistId}`
    this._router.navigate([url])
  }           

  logOut(){
    setTimeout(()=>{
      this._userServices.logout()
    },1000)
  }

  toProjects(){
    this._projectServices.projectSelectedId = undefined;
     this.router.navigate(['/projects'])
  }

  toCalendar(){
    if(this._calendarServices.currentDay){
      this.router.navigate(['/calendar',this._calendarServices.currentWeek._id,this._calendarServices.currentDay._id])
    }else{
      this.router.navigate(['/calendar'])
    }
  }
}