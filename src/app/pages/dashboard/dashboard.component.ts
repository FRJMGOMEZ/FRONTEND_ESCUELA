import { Component, OnInit } from '@angular/core';
import { ProjectServices } from '../../providers/project.service';
import { UserServices } from '../../providers/user.service';
import { Project } from '../../models/project.model';
import { CalendarService } from '../../providers/calendar.service';
import { EventModel } from '../../models/event.model';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { ChatServices } from '../../providers/chat.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  projects: any[] = []

  unreadMessages: boolean = false;
  uncheckedTasks: boolean = false;
  pendingTasks: boolean = false;
 
  eventsComming:EventModel[]=[]
  eventsToday:EventModel[]=[]
  eventsOnCourse:EventModel[]=[]

  constructor(
    public _userServices:UserServices,
    private _projectServices:ProjectServices,
    private _calendarServices:CalendarService,
    private _chatServices:ChatServices,
    private router:Router ) {
     }

  ngOnInit() {

    this._projectServices.getTasks().subscribe((tasks)=>{
       tasks.forEach((task)=>{
         if(this.projects.length === 0){
           if(!task.checked){
             task.project.uncheckedTasks = [];
             task.project.uncheckedTasks.push(task.description);
             this.uncheckedTasks=true;
             this.projects.push(task.project)
           }else {
             task.project.pendingTasks = [];
             task.project.pendingTasks.push(task.description);
             this.pendingTasks=true;
             this.projects.push(task.project);
           }
         }else{
           if(this.projects.map((project:any)=>{return project._id}).indexOf(task.project._id)<0){
             if(!task.checked){
               task.project.uncheckedTasks = [];
               task.project.uncheckedTasks.push(task.description);
               this.uncheckedTasks = true;
               this.projects.push(task.project)
             }else{
               task.project.pendingTasks = [];
               task.project.pendingTasks.push(task.description);
               this.pendingTasks = true;
               this.projects.push(task.project);
             }
           }else{
             let index = this.projects.map((project: any) => { return project._id }).indexOf(task.project._id);
             if(!task.checked){
               if (this.projects[index].uncheckedTasks === undefined) {
                 this.projects[index].uncheckedTasks = [];
                 this.uncheckedTasks = true;
                 this.projects[index].uncheckedTasks.push(task.description)
               }else{
                 this.projects[index].uncheckedTasks.push(task.description)
               }
             }else{
               if (this.projects[index].pendingTasks === undefined) {
                 this.projects[index].pendingTasks = [];
                 this.projects[index].pendingTasks.push(task.description)
                 this.pendingTasks = true;
               } else {
                 this.projects[index].pendingTasks.push(task.description)
               }
             }
           }
         }
       })
    })

    this._chatServices.getLastMessages().subscribe((messages)=>{ 
      messages.forEach((message)=>{
        if(this.projects.length === 0){
          message.project.messages = [];
          message.project.messages.push(message.message)
          this.unreadMessages=true;
          this.projects.push(message.project);
        }else{
          if (this.projects.map((project:any) => { return project._id }).indexOf(message.project._id) < 0) {
          message.project.messages.push(message.message);
          this.unreadMessages = true;
          this.projects.push(message.project)
        }else{
            let index = this.projects.map((project: any) => { return project._id }).indexOf(message.project._id);
            if(this.projects[index].messages === undefined){
              this.projects[index].messages = [];
              this.projects[index].messages.push(message.message);
              this.unreadMessages = true;
            }else{
              this.projects[index].messages.push(message.message);
              this.unreadMessages = true;
            }
        }
        }
      })
    })

    this._calendarServices.getEvents().subscribe((events)=>{
      events.forEach((event)=>{
        if(new Date(event.startDate).getDate()=== new Date().getDate()){
          this.eventsToday.push(event)
        }else{
          if(new Date(event.startDate).getTime()>new Date().getTime()){
          this.eventsComming.push(event)
          }else if(new Date(event.startDate).getTime()<new Date().getTime() && new Date(event.endDate).getTime()>new Date().getTime()){
            this.eventsOnCourse.push(event)
          }
        }
      })
    })
  }

  toProject(projectId:Project){
     this.router.navigate(['/projects',projectId])
  }

  hi(){
    let today = new Date()
    if(today.getHours() >= 21 && today.getHours() < 5){
      return `BUENAS NOCHES`
    } else if (today.getHours() > 5 && today.getHours() < 15){
      return `BUENOS DÍAS`
    }else{
      return `BUENAS TARDES`
    }
  }

  checkTasksNumber(tasks:number,type:string){
      if(type==='pending'){
        if (tasks === 1) {
            return ` Tienes 1 tarea pendiente`
        } else {
            return `Tienes ${tasks} tareas pendientes`       
        }
      }else if (type==='unchecked'){
        if (tasks === 1) {
          return ` Tienes 1 tarea nueva`
        } else {
          return `Tienes ${tasks} tareas nuevas`
        }
      }
  }

  toEvent(date?:Date){
    let daySubscription = this._calendarServices.day$.subscribe((order:string)=>{
      if (order === "getByDate") {
        daySubscription.unsubscribe()
        let dayOfTheWeek = new Date(this._calendarServices.currentDay.date).getDay();
        let weekSubscription = this._calendarServices.weeks$.subscribe((order:any)=>{
          if(order === 'getByDay')
          weekSubscription.unsubscribe()
          this.router.navigate(['./day', this._calendarServices.currentWeek._id, this._calendarServices.currentDay._id])
        })
        this._calendarServices.getWeekByDay(this._calendarServices.currentDay._id,dayOfTheWeek).subscribe();
      }
    })
    date = new Date()
    this._calendarServices.getDayByDate(date.getTime()).subscribe()
  }

  ngOnDestroy(): void {
    this.uncheckedTasks=false;
    this.unreadMessages=false;
    this.pendingTasks=false;
    this.projects=[];
    this.eventsComming=[];
    this.eventsToday=[];
    this.eventsOnCourse=[];
  }
}
