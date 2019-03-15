import { Component, OnInit } from '@angular/core';
import { ProjectServices } from '../../providers/project.service';
import { UserServices } from '../../providers/user.service';
import { User } from 'src/app/models/user.model';
import { ProjectOrder, Project } from '../../models/project.model';
import { CalendarService } from '../../providers/calendar.service';
import { EventOrder, EventModel } from '../../models/event.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { TaskOrder, Task } from '../../models/task.model';
import { Day } from 'src/app/models/day.model';
import { Week } from 'src/app/models/week.model';
import { Message } from 'src/app/models/message.model';
import { DayOrder } from '../../models/day.model';
import { WeekOrder } from '../../models/week.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  userOnline:User
  projects:Project[]=[]
  eventsComming:EventModel[]=[]
  eventsOnCourse:EventModel[]=[]
  eventsToday:EventModel[]=[]

  eventSubscription:Subscription=null;
  projectSubscription:Subscription=null;
  taskSubscription:Subscription=null;
  daySubscription :Subscription = null;
  weekSubscription:Subscription = null;

  tasksToDo:Task[]=[]
  uncheckedTasks:Task[]=[]

  unreadMessages:number=0;

  today:Date = new Date()

  constructor(
    public _userServices:UserServices,
    private _projectServices:ProjectServices,
    private _calendarServices:CalendarService,
    private router:Router ) {

    this.userOnline = this._userServices.userOnline
     }

  ngOnInit() {

    this.daySubscription = this._calendarServices.day$.subscribe((dayOrder:DayOrder)=>{
      if(dayOrder.order === 'getByDate'){
        let dayOfTheWeek = new Date(dayOrder.day.date).getDay();
        this.weekSubscription = this._calendarServices.weeks$.subscribe((weekOrder:WeekOrder)=>{
          if(weekOrder.order === 'getByDay'){
            this.router.navigate(['/day', weekOrder.week._id, dayOrder.day._id])
          }
        })
        this._calendarServices.getWeekByDay(dayOrder.day._id, dayOfTheWeek).subscribe()
      }
    })

    this.taskSubscription=this._projectServices.tasks$.subscribe((taskOrder:TaskOrder)=>{
      if(taskOrder.order === 'get'){
        if(!taskOrder.task.checked){
            this.uncheckedTasks.push(taskOrder.task)
        }else{
          if(!taskOrder.task.ok){
            this.tasksToDo.push(taskOrder.task)
          }
        }
      }
    })

    this.eventSubscription=this._calendarServices.events$.subscribe((eventOrder:EventOrder)=>{
      if(eventOrder.order === 'get' || eventOrder.order === 'push'){
        this.today = new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate(),0,0,0,0);
        if (new Date(eventOrder.event.startDate) < this.today){
          if (new Date(eventOrder.event.endDate) === undefined || new Date(eventOrder.event.endDate) > this.today){
          this.eventsOnCourse.push(eventOrder.event);
          this.eventsOnCourse = _.sortBy(this.eventsOnCourse,(event)=>{
            return new Date(event.startDate)
          }).reverse()
          }
        }
        if (new Date(eventOrder.event.startDate)>this.today){
          if (this.today.getDate() === new Date(eventOrder.event.startDate).getDate() && 
              this.today.getMonth() === new Date(eventOrder.event.startDate).getMonth() &&
              this.today.getFullYear() === new Date(eventOrder.event.startDate).getFullYear()){
               this.eventsToday.push(eventOrder.event)
               this.eventsToday = _.sortBy(this.eventsToday,(event)=>{
                 return event.position;
               }).reverse()
             }else{
            this.eventsComming.push(eventOrder.event)
            this.eventsComming = _.sortBy(this.eventsComming, (event) => {
              return new Date(event.startDate)
            })
          }
        }
      }
    })

    this.projectSubscription=this._projectServices.projects$.subscribe((projectOrder:ProjectOrder)=>{
      if(projectOrder.order === 'get'){
        let messages = []
        projectOrder.project.messages.forEach((message:any)=>{
          let timeStamp = message.toString().substring(0, 8);
          let date = new Date(parseInt(timeStamp, 16) * 1000);
          if(date > new Date(this.userOnline.lastCheck)){
             messages.push(message._id);
            this.unreadMessages++      
          }
        })
        projectOrder.project.messages = messages;
        this.projects.push(projectOrder.project);
        this._projectServices.getTasks(projectOrder.project._id).subscribe()
      }
    })
    this._calendarServices.getEvents().subscribe()
    this._projectServices.getProjects().subscribe()
  }

  toProject(projectId:Project){
     this.router.navigate(['/project',projectId])
  }

  hi(){
    if(this.today.getHours() >= 21 && this.today.getHours() < 5){
      return `BUENAS NOCHES`
    } else if (this.today.getHours() > 5 && this.today.getHours() < 15){
      return `BUENAS TARDES`
    }else{
      return `BUENOS DIAS`
    }
  }

  checkTask(tasks:Task[],projectId?:string){
    if(projectId){
      if(tasks.length > 0){
      let taskCount = 0;
      tasks.forEach((task) => {
        if (task.project === projectId) {
          taskCount++
        }
      });
      if (taskCount === 1) {
        if (tasks[0].checked) {
          return ` Tienes 1 tarea pendiente`
        } else {
          return `Tienes 1 tarea nueva`
        }
      } else {
        if (tasks[0].checked) {
          return `Tienes ${taskCount} tareas pendientes`
        } else {
          return `Tienes ${taskCount} tareas nuevas`
        }
      }
    }else{
     return}
    }else{
      if (tasks.length > 0) {
        if (tasks[0].checked) {
          if (tasks.length === 1) {
            return `Tienes 1 tarea pendiente`
          } else {
            return `Tienes ${tasks.length} tareas pendientes`
          }
        } else {
          if (tasks.length > 1) {
            return `Tienes 1 tarea nueva`
          } else {
            `Tienes ${tasks.length} tareas nuevas`
          }
        }
      }else{return}
    
    }
    
  }

  toEvent(date?:Date){
    if(!date){
      date=new Date();
      date = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0)
    }
    this._calendarServices.getDayByDate(date).subscribe((res:any)=>{
      if (res === 'no-day') {
        this.router.navigate(['/day','no-week',date.getTime()])
      }
    })
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe()
    this.projectSubscription.unsubscribe()
    this.taskSubscription.unsubscribe()
    if (this.weekSubscription != null) { this.weekSubscription.unsubscribe()}
    this.daySubscription.unsubscribe()
  }
}
