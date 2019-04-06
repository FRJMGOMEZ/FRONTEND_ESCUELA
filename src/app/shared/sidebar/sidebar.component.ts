import { Component} from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProjectServices } from '../../providers/project.service';
import { Router } from '@angular/router';
import { CalendarService } from '../../providers/calendar.service';
import { DemoService } from '../../providers/demo.service';

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
              public _demoServices:DemoService) {}

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