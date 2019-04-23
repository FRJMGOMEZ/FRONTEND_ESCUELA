import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserServices } from './user.service';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { EventModel } from '../models/event.model';


@Injectable({
  providedIn: "root"
})
export class DashboardService {
  
  projects: any[] = []

  unreadMessages: boolean = false;
  uncheckedTasks: boolean = false;
  pendingTasks: boolean = false;

  eventsComming: EventModel[] = []
  eventsToday: EventModel[] = []
  eventsOnCourse: EventModel[] = []

  userProjects:string[]

  constructor(
    private socket: Socket,
    private _userServices: UserServices,
    private http: HttpClient
  ){}

  dashboardIn() {
    let payload = { user: this._userServices.userOnline._id };
    this.socket.emit("dashboardIn", payload);
  }

  getLastMessages() {
    let url = `${URL_SERVICES}lastMessages`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map(async(res: any) => {
        await this.projects.forEach((project)=>{
          project.messages = []
        })
        if(res.messages === 0){
        this.unreadMessages=false;
        }
        res.messages.forEach((message: any) => {
          message.project.messages = [];
          if (this.projects.length === 0) {
            message.project.messages.push(message.message)
            this.unreadMessages = true;
            this.projects.push(message.project);
          } else {
            if (this.projects.map((project: any) => { return project._id }).indexOf(message.project._id) < 0) {
              message.project.messages.push(message.message);
              this.unreadMessages = true;
              this.projects.push(message.project)
            } else {
              let index = this.projects.map((project: any) => { return project._id }).indexOf(message.project._id);
              if (this.projects[index].messages === undefined) {
                this.projects[index].messages = [];
                this.projects[index].messages.push(message.message);
                this.unreadMessages = true;
              } else {
                this.projects[index].messages.push(message.message);
                this.unreadMessages = true;
              }
            }
          }
        })
      })
    );
  }

  getTasks() {
    let url = `${URL_SERVICES}tasks`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map(async(res: any) => {
        await this.projects.forEach((project) => {
          project.uncheckedTasks = []
          project.pendingTasks = []
        })
        if(res.tasks.length === 0){
          this.uncheckedTasks = false;
          this.pendingTasks = false;
        }
        res.tasks.forEach((task: any) => {
          if (this.projects.length === 0) {
            if (!task.checked) {
              task.project.uncheckedTasks = [];
              task.project.uncheckedTasks.push(task.description);
              this.uncheckedTasks = true;
              this.projects.push(task.project)
            } else {
              task.project.pendingTasks = [];
              task.project.pendingTasks.push(task.description);
              this.pendingTasks = true;
              this.projects.push(task.project);
            }
          } else {
            if (this.projects.map((project: any) => { return project._id }).indexOf(task.project._id) < 0) {
              if (!task.checked) {
                task.project.uncheckedTasks = [];
                task.project.uncheckedTasks.push(task.description);
                this.uncheckedTasks = true;
                this.projects.push(task.project)
              } else {
                task.project.pendingTasks = [];
                task.project.pendingTasks.push(task.description);
                this.pendingTasks = true;
                this.projects.push(task.project);
              }
            } else {
              let index = this.projects.map((project: any) => { return project._id }).indexOf(task.project._id);
              if (!task.checked) {
                if (this.projects[index].uncheckedTasks.length === 0) {
                  this.projects[index].uncheckedTasks = [];
                  this.uncheckedTasks = true;
                  this.projects[index].uncheckedTasks.push(task.description)
                } else {
                  this.projects[index].uncheckedTasks.push(task.description)
                }
              } else {
                if (this.projects[index].pendingTasks.length === 0) {
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
    )
  }

  getEvents() {
    let url = `${URL_SERVICES}events`;
    return this.http.get(url, { headers: this._userServices.headers }).pipe(
      map((res: any) => {
        this.eventsToday = []
        this.eventsOnCourse=[];
        this.eventsComming = [];
          res.events.forEach((event) => {
            if (new Date(event.startDate).getDate() === new Date().getDate() && new Date(event.startDate).getMonth() === new Date().getMonth()) {
              this.eventsToday.push(event)
            } else {
              if (new Date(event.startDate).getTime() > new Date().getTime()) {
                this.eventsComming.push(event)
              } else if (new Date(event.startDate).getTime() < new Date().getTime() && new Date(event.endDate).getTime() > new Date().getTime()) {
                this.eventsOnCourse.push(event)
              }
            }
          })
      })
    );
  }

  dashboardSocket() {
    return this.socket.fromEvent("dashboard").pipe(
      map((payload: any) => {
        if (payload.item === "event") {
          this.getEvents().subscribe()
        } else if (payload.item === "task") {
          if (this.userProjects.indexOf(payload.room) >= 0) {
            this.getTasks().subscribe()
          }
        } else if (payload.item === "message") {
          if (this.userProjects.indexOf(payload.room) >= 0) {
            this.getLastMessages().subscribe()
          }
        }
      })
    );
  }

  dashboardOut() {
    let payload = { user: this._userServices.userOnline._id };
    this.socket.emit("dashboardOut", payload);
  }
}
