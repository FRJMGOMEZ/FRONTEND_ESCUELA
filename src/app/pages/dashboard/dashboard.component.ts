import { Component, OnInit} from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { Project } from '../../models/project.model';
import { CalendarService } from '../../providers/calendar.service';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { DashboardService } from '../../providers/dashboard.service';
import { Subscription, timer } from 'rxjs';
import { ProjectServices } from '../../providers/project.service';
import { DemoService } from '../../providers/demo.service';
import { SpinnerService } from 'src/app/providers/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit {

  dashboardSubscription:Subscription=null;
  projectsUsersSocket:Subscription = null;

  constructor(
    public _userServices:UserServices,
    private _calendarServices:CalendarService,
    private router:Router,
    public _dashboardServices:DashboardService,
    private _projectServices:ProjectServices,
    public _demoServices:DemoService,
    public _spinnerServices:SpinnerService) {}

async ngOnInit() {
    //////// USER IN DASHBOARD ROOM ///////
    this._dashboardServices.dashboardIn()

    ///////// GETTING USER PROJECTS ////////
    this._dashboardServices.userProjects = await JSON.parse(localStorage.getItem('user')).projects.map((project) => { return project._id })
  

    ///////  UPDATING USER PROJECTS /////////
    this.projectsUsersSocket = this._projectServices.usersSocket().subscribe(() => {
      if (this._dashboardServices.userProjects != JSON.parse(localStorage.getItem("user")).projects.map(project => { return project._id; })) {
        this.getTasksAndLastMessages();
        this._dashboardServices.userProjects = JSON.parse(localStorage.getItem('user')).projects.map((project) => { return project._id })
      }
    })
    
    /////// UPDATING NOTIFICATIONS ////
    this.dashboardSubscription = this._dashboardServices.dashboardSocket().subscribe()
    
     //////// GETTING NOTIFICATIONS /////
    this.getTasksAndLastMessages();
    this._dashboardServices.getEvents().subscribe()
  }



  /////// LOGIC FUNCTIONS //////
  getTasksAndLastMessages() {
    this._dashboardServices.getTasks().subscribe()
    timer(300).subscribe(() => {
      this._dashboardServices.getLastMessages().subscribe()
    })
  }


  /////// ROUTER FUNCTIONS //////
  toProject(projectId:Project){
     this.router.navigate(['/projects',projectId])
  }

  toEvent(date?:Date){
    date =new Date(date);
    if(date.getTime()< new Date().getTime()){
      let numberOfWeeks = 10000;
      let today = new Date();
      for (let i = 0; i <= numberOfWeeks;i++){
        date = new Date(date.getTime() + 604800000);
        if (new Date().getTime() <= date.getTime() ){
          date = new Date(date.getTime());
          break;
        }
      }
    }
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 6, 0, 0, 0);
    console.log(date)
    this._calendarServices.getDayByDate(date.getTime()).subscribe((res) => {
      if(res === 'no-day'){
        this._calendarServices.postWeek(date).subscribe(()=>{
          this.router.navigate(['/calendar', this._calendarServices.currentWeek._id,'']).then(() => {
          })
        })
      }else{
        this._calendarServices.getWeekByDay(this._calendarServices.currentDay._id, new Date(this._calendarServices.currentDay.date).getDay()).subscribe(() => {
          this.router.navigate(['/calendar', this._calendarServices.currentWeek._id, this._calendarServices.currentDay._id]).then(() => {
          })
        })
      }
    })
  }
 
  
  /////// RENDER FUNCTIONS //////
  hi() {
    let today = new Date();
    if (today.getHours() >= 21 && today.getHours() < 5) {
      return `BUENAS NOCHES`
    } else if (today.getHours() > 5 && today.getHours() < 15) {
      return `BUENOS DÍAS`
    } else {
      return `BUENAS TARDES`
    }
  }

  checkTasksNumber(tasks: number, type: string) {
    if (type === 'pending') {
      if (tasks === 1) {
        return ` Tienes 1 tarea pendiente`
      } else {
        return `Tienes ${tasks} tareas pendientes`
      }
    } else if (type === 'unchecked') {
      if (tasks === 1) {
        return ` Tienes 1 tarea nueva`
      } else {
        return `Tienes ${tasks} tareas nuevas`
      }
    }
  }


  ngOnDestroy(): void {
    this._dashboardServices.dashboardOut()
    this.dashboardSubscription.unsubscribe()
    this.projectsUsersSocket.unsubscribe()
    this._dashboardServices.uncheckedTasks=false;
    this._dashboardServices.unreadMessages=false;
    this._dashboardServices.pendingTasks=false;
    this._dashboardServices.projects=[];
    this._dashboardServices.eventsComming=[];
    this._dashboardServices.eventsToday=[];
    this._dashboardServices.eventsOnCourse=[];
    this._dashboardServices.userProjects = []
  }
}
