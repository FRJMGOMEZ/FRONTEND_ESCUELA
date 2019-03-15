import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Project, ProjectOrder } from '../models/project.model';
import { UserServices } from './user.service';
import { Subject } from 'rxjs';
import { UserOrder} from '../models/user.model';
import { Task,TaskOrder } from '../models/task.model';
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class ProjectServices {

  headers:HttpHeaders

  projectSelected:Project

  projectsSource = new Subject<ProjectOrder>();
  projects$ = this.projectsSource.asObservable()

  usersSource = new Subject<UserOrder>();
  users$ = this.usersSource.asObservable();

  taskSource = new Subject<TaskOrder>();
  tasks$ = this.taskSource.asObservable() 

  constructor(private http:HttpClient,
              private _userServices: UserServices,
              private socket:Socket) { 
                
this.headers = new HttpHeaders().set("token", this._userServices.token);          
   }

  getProjects(){
    let url = `${URL_SERVICES}/projects`
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      res.projects.forEach((project)=>{
        let projectOrder = new ProjectOrder(project,'get')
        this.projectsSource.next(projectOrder);
      })
    }))
  } 

  postProject(project:Project){
    let url = `${URL_SERVICES}/project`
    return this.http.post(url,project,{headers:this.headers}).pipe(map((res:any)=>{
      let userOnline = this._userServices.userOnline;
      userOnline.projects.push(res.project._id);
      this._userServices.saveInStorage(userOnline._id,userOnline,this._userServices.token)
      let projectOrder = new ProjectOrder(res.project,'push')
      this.projectsSource.next(projectOrder)
      this.emitProject(projectOrder)
    }))
  }

  getProjectById(id:string){
    let url = `${URL_SERVICES}/searchById/project/${id}`
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      this.projectSelected = res.project;
      let projectOrder = new ProjectOrder(res.project,'getById')
       this.projectsSource.next(projectOrder)
    }))
  }

  putProject(id:string,project:Project){
    let url = `${URL_SERVICES}/project/${id}`
    return this.http.put(url,project,{headers:this.headers}).pipe(map((res:any)=>{
      let projectOrder = new ProjectOrder(res.project,'put')
      this.projectsSource.next(projectOrder)
      this.emitProject(projectOrder)
    }))
  }

  emitProject(projectOrder:ProjectOrder){
    this.socket.emit('projectOrder',projectOrder)
  }

  projectsSocket(){
    return this.socket.fromEvent('projectOrder').pipe(map((res:any)=>{
      this.projectsSource.next(res.projectOrder)
    }))
  }

  changeStatus(id:string){
    let url = `${URL_SERVICES}/changeStatus/${id}`
    return this.http.put(url,{headers:this.headers}).pipe(map((res:any)=>{
      return res.project
    }))
  }

  /////// Users ////////////////

  addOrRemoveParticipant(projectId: string, participantId: string) {
    let url = `${URL_SERVICES}/pullOrPushOutParticipant/${projectId}`;
    let body = { participant: participantId };
    return this.http.put(url, body, { headers: this.headers }).pipe(map((res: any) => {
      let userOrder = new UserOrder(res.user, 'participant')
      this.usersSource.next(userOrder)
    }))
  }
  addOrRemoveAdmin(projectId: string, userId: string) {
    let url = `${URL_SERVICES}/pullOrPushAdmin/${projectId}`;
    let body = { participant: userId };
    return this.http.put(url, body, { headers: this.headers }).pipe(map((res: any) => {
      let userOrder = new UserOrder(res.user, 'admnin')
      this.usersSource.next(userOrder)
    }))
  }

  getParticipantsByProject(id:string){
    let url = `${URL_SERVICES}/project/participants/${id}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      res.participants.forEach((participant) => {
        let userOrder = new UserOrder(participant,'getByProject')
        this.usersSource.next(userOrder)
      });
    }))

  }

  getAdministratorsByProject(id: string) {
    let url = `${URL_SERVICES}/project/administrators/${id}`
    return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
      res.administrators.forEach((administrators) => {
        let userOrder = new UserOrder(administrators, 'getByProject')
        this.usersSource.next(userOrder)
      });
    }))

  }

  //////// Tasks ////////

  getTasks(projectId:string){
    let url = `${URL_SERVICES}/project/tasks/${projectId}`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      res.tasks.forEach((task)=>{
        let taskOrder = new TaskOrder(task,'get');
        this.taskSource.next(taskOrder)
      })
    }))
  }
  taskChecked(taskId:string){
    let url = `${URL_SERVICES}/checkTask/${taskId}`
    return this.http.put(url,{headers:this.headers})
  }

  taskDone(taskId:string){
    let url = `${URL_SERVICES}/taskDone/${taskId}`
    return this.http.put(url, { headers: this.headers }).pipe(map((res:any)=>{
        let taskOrder = new TaskOrder(res.task,'done')
        this.taskSource.next(taskOrder)
    }))
  }
  postTasks(task:Task){
    let url = `${URL_SERVICES}/task`
    return this.http.post(url,task,{headers:this.headers}).pipe(map((res:any)=>{
      let taskOrder = new TaskOrder(res.task,'push')
      this.taskSource.next(taskOrder)
    }))
  }
}
