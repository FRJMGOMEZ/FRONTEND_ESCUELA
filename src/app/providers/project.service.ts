import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Project, ProjectOrder } from '../models/project.model';
import { UserServices } from './user.service';
import { Subject } from 'rxjs';
import { User, UserOrder} from '../models/user.model';
import { Task, TaskOrder} from '../models/task.model';
import { Socket } from "ngx-socket-io";
import { FileModel } from '../models/file.model';
import { UploadFilesServices } from './upload-files.service';
import * as _ from 'underscore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProjectServices {

  projects:Project[] = []

  projectSelectedId:string
  name: string;
  description: string
  projectImage: FileModel;
  status:boolean;

  administrators:User[] = []
  participants:User[] = []
  groupTasks:Task[]
  myTasks:Task[]

  messagesCount:number=0;

  public textFiles: any[] = [];
  public imageFiles: any[] = [];

  projectsSource = new Subject<ProjectOrder>();
  projects$ = this.projectsSource.asObservable()

  taskSource = new Subject<TaskOrder>();
  tasks$ = this.taskSource.asObservable();

  constructor(private http:HttpClient,
              private _userServices: UserServices,
              private socket:Socket,
              private _uploadFilesServices:UploadFilesServices,
              private router:Router) {}

  getProjects() {
    let url = `${URL_SERVICES}/projects`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
        this.projects = res.projects
    }))
  }

  emitProject(projectOrder: ProjectOrder) {
    this.socket.emit('project', projectOrder)
  }

  projectsSocket() {
    return this.socket.fromEvent('project').pipe(map((projectOrder:ProjectOrder) => {
      if(projectOrder.order === 'delete'){
        if(this.projectSelectedId === projectOrder.project._id){
          this.projectSelectedId = undefined;
        }
        this.projects = this.projects.filter((project)=>{return project._id != projectOrder.project._id})
      }else if(projectOrder.order === 'put'){
        if(this.projects.map((project)=>{return project._id}).indexOf(projectOrder.project._id)>=0){
          if (this.projects[this.projects.map((project) => { return project._id }).indexOf(projectOrder.project._id)].name != projectOrder.project.name){
            if(projectOrder.project._id === this.projectSelectedId ){
              this.name = projectOrder.project.name;
              this.description = projectOrder.project.description;
            }
              this.projects.forEach((project, index) => {
                if (project._id === projectOrder.project._id) {
                  this.projects[index].name = projectOrder.project.name;
                  this.projects[index].description = projectOrder.project.description;
                }
              })
          }else{
            if (projectOrder.project._id === this.projectSelectedId) {
              if (!projectOrder.project.status) {
                if(this.administrators.map((user)=>{return user._id}).indexOf(this._userServices.userOnline._id)<0){
                  this.router.navigate(['/projects']).then(()=>{
                    this.getProjects().subscribe()
                  })
                }else{
                  this.status = false;
                }
              } else {
                this.status=true;
              }
            }
              this.projects.forEach((project, index) => {
                if (project._id === projectOrder.project._id) {
                  this.projects[index].status= projectOrder.project.status;
                }
              })
          }
        }else{
         if(projectOrder.project.participants.indexOf(this._userServices.userOnline._id)>=0){
              this.projects.push(projectOrder.project)
         }
        }
      }
    }))
  }

  postProject(project: Project) {
    let url = `${URL_SERVICES}/project`
    return this.http.post(url, project, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this._userServices.saveInStorage(res.user._id, res.user, this._userServices.token)
      this.projects.push(res.project)
    }))
  }

  getProjectById(id: string) {
    let url = `${URL_SERVICES}/searchById/project/${id}`
    return this.http.get(url, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.projectSelectedId = res.project._id
      this.administrators = res.project.administrators;
      this.participants = res.project.participants;
      this.name = res.project.name;
      this.description = res.project.description;
      this.projectImage = res.project.img;
      this.status = res.project.status;
      this.textFiles = [];
      this.imageFiles = []; 
      res.project.messages.forEach((message:any) => {
        this.messagesCount ++
        if (message.file) {
          if (this._uploadFilesServices.textFormats.indexOf(message.file.format) >= 0) {
            this.textFiles.push(message.file)
          } else if (this._uploadFilesServices.imgFormats.indexOf(message.file.format) >= 0) {
            this.imageFiles.push(message.file)
          }
        }
      })
      this.myTasks = [];
      this.groupTasks = [];
      res.project.tasks.forEach((task:any)=>{
        if(this._userServices.userOnline._id === task.user._id){
          this.myTasks.push(task);
        }else{
          this.groupTasks.push(task)
        }
      })
      this._userServices.userOnline.projects.forEach((project,index)=>{
        if(project._id === this.projectSelectedId){
          this._userServices.userOnline.projects[index].lastConnection = null;
        }
      })
    }))
  }

  putProject(id: string, project: Project) {
    let url = `${URL_SERVICES}/project/${id}`
    return this.http.put(url, project, { headers: this._userServices.headers }).pipe(map((res: any) => {
      this.projects.forEach((project,index)=>{
        if(project._id === res.project._id){
          this.projects[index]= res.project;
        }
      })
      this.name = res.project.name;
      this.description = res.project.description;
      let projectOrder = new ProjectOrder(res.project,'put')
      this.emitProject(projectOrder)
    }))
  }

  deleteProject(id:string){
    let url = `${URL_SERVICES}/project/${id}`
    return this.http.delete(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      res.files.forEach((file)=>{
        this._uploadFilesServices.deleteFile(file,'projectFiles').subscribe()
      })
      let projectOrder = new ProjectOrder(res.project,'delete')
      this.emitProject(projectOrder)
    }))
  }

  changeProjectStatus(id:string){
    let url = `${URL_SERVICES}/project/changeStatus/${id}`
    return this.http.put(url,{},{headers:this._userServices.headers}).pipe(map((res:any)=>{
      this.status = res.project.status;
      this.projects.forEach((project,index)=>{
        if(project._id === res.project._id){
          this.projects[index].status = res.project.status;
        }
      })
      let projectOrder = new ProjectOrder(res.project, 'put')
      this.emitProject(projectOrder)
    }))
  }
  /////// Users ////////////////
  
  usersConnected(){
    return this.socket.fromEvent('usersOnline').pipe(map((usersOnline:string[])=>{
      this.participants.forEach((user,index)=>{
        if(usersOnline.map((user:any)=>{return user.id}).indexOf(user._id)>=0){
          this.participants[index].connected = true;
        }else{
          this.participants[index].connected = undefined;
        }
      })
    }))
  }
  userIn() {
    let payload = {user:this._userServices.userOnline._id,room:this.projectSelectedId}
    this.socket.emit('userIn', payload,(usersOnline)=>{
      this.participants.forEach((user, index) => {
        if (usersOnline.map((user: any) => { return user.id }).indexOf(user._id) >= 0) {
          this.participants[index].connected = true;
        } else {
          this.participants[index].connected = undefined;
        }
      })
    })
  }
  userOut(){
    let payload = { user: this._userServices.userOnline._id, room: this.projectSelectedId }
    this.socket.emit('userOut',payload)
  }

  lastConnection() {
    let url = `${URL_SERVICES}/lastConnection/${this.projectSelectedId}`
    return this.http.put(url,{},{ headers: this._userServices.headers }).pipe(map((res: any) => {
      this._userServices.saveInStorage(res.user._id,res.user, this._userServices.token)
    }))
  }

  emitUsers(userOrder:UserOrder,projectId){
    let payload = {userOrder,projectId}
    this.socket.emit('projectUser',payload)
  }

  usersSocket(){

    return this.socket.fromEvent('projectUser').pipe(map((payload:any)=>{

      if(payload.userOrder.order === 'pushParticipant'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0) {
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].participants.push(payload.userOrder.user._id)
          if (this.projectSelectedId == payload.projectId) {
            this.participants.push(payload.userOrder.user)
          }
        } else {
          if (this._userServices.userOnline._id === payload.userOrder.user._id) {
            this.router.navigate(['/projects']).then(()=>{
              this.getProjects().subscribe(()=>{
                setTimeout(()=>{
                  let project = this.projects.filter((project: any) => { return project._id === payload.projectId })[0];
                  let user = this._userServices.userOnline
                  user.projects.push(project)
                  this._userServices.saveInStorage(user._id, user, this._userServices.token)
                })
              })
            })
          }
        }
      }else if (payload.userOrder.order === 'removeParticipant'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0) {
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].participants = 
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].participants.filter((user) => { user != payload.userOrder.user._id })
          this._userServices.userOnline.projects = this._userServices.userOnline.projects.filter((project)=>{return })
          if(this.projectSelectedId === payload.projectId){
            if(payload.userOrder.user._id === this._userServices.userOnline._id){
              this.router.navigate(['/projects']).then(()=>{
                this.getProjects().subscribe(()=>{
                  setTimeout(()=>{
                    let user = this._userServices.userOnline
                    user.projects = user.projects.filter((project)=>{return project._id != payload.projectId})
                    this._userServices.saveInStorage(user._id, user, this._userServices.token)
                  })
                })
              })
            }else{
              this.participants = this.participants.filter((user)=>{return user._id != payload.userOrder.user._id})
            }
          }
        }
      }else if(payload.userOrder.order === 'pushAdmin'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0) {
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].administrators.push(payload.userOrder.user._id)
          if(this.projectSelectedId === payload.projectId){
            this.administrators.push(payload.userOrder.user)
          }  
        }
      }else if (payload.userOrder.order === 'removeAdmin'){
        if (this.projects.map((project) => { return project._id }).indexOf(payload.projectId) >= 0){
          this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].administrators =
            this.projects[this.projects.map((project) => { return project._id }).indexOf(payload.projectId)].administrators.filter((user) => { user != payload.userOrder.user._id })
            if(this.projectSelectedId === payload.projectId){
              if (payload.userOrder.user._id === this._userServices.userOnline._id) {
                this.router.navigate(['/projects',payload.projectId]).then(()=>{
                  this.getProjectById(payload.projectId).subscribe()
                })
              } 
            this.administrators = this.administrators.filter((user) => { return user._id != payload.userOrder.user._id })  
          }
        }
      }
    }))
  }

  checkAdmin(id:string){
    if(this.projects.filter((project:any)=>{return project._id === id})[0].administrators.indexOf(this._userServices.userOnline._id)<0){
      return false
    }else{
      return true
    }
  }

  addOrRemoveParticipant( userId: string) {
    let url = `${URL_SERVICES}/pullOrPushOutParticipant/${this.projectSelectedId}`;
    let body = { participant: userId };
    return this.http.put(url, body, { headers: this._userServices.headers }).pipe(map((res: any) => {
      let participantsIds = this.participants.map((user)=>{return user._id})
      if(participantsIds.indexOf(res.participant._id)<0){
        this.participants.push(res.participant)
        this._userServices.users = this._userServices.users.filter((user) => { return user._id != userId })
        let userOrder = new UserOrder(res.participant, 'pushParticipant')
        this.emitUsers(userOrder,this.projectSelectedId)
      }else{
        this.participants = this.participants.filter((participant)=>{return participant._id != res.participant._id})
        this._userServices.users.push(res.participant)
        let userOrder = new UserOrder(res.participant, 'removeParticipant')
        this.emitUsers(userOrder,this.projectSelectedId)
      }
    }))
  }

  addOrRemoveAdmin(userId: string) {
    let url = `${URL_SERVICES}/pullOrPushAdmin/${this.projectSelectedId}`;
    let body = { participant: userId };
    return this.http.put(url, body, { headers: this._userServices.headers }).pipe(map((res: any) => {
      let adminsIds = this.administrators.map((user) => { return user._id })
      if (adminsIds.indexOf(res.administrator._id) < 0) {
        this.administrators.push(res.administrator)
        this._userServices.users = this._userServices.users.filter((user) => { return user._id != userId })
        let userOrder = new UserOrder(res.administrator, 'pushAdmin')
        this.emitUsers(userOrder,this.projectSelectedId)
      } else {
        this.administrators = this.administrators.filter((administrators) => { return administrators._id != res.administrator._id })
        this._userServices.users.push(res.administrator)
        let userOrder = new UserOrder(res.administrator, 'removeAdmin')
        this.emitUsers(userOrder,this.projectSelectedId)
      }
    }))
  }

  //////// Tasks ////////

  getTasks(){
    let url = `${URL_SERVICES}/tasks`
    return this.http.get(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      return res.tasks
    }))
  }

  emitTask(taskOrder){
    this.socket.emit('task',taskOrder)
  }

  taskSocket(){
    return this.socket.fromEvent('task').pipe(map((taskOrder:TaskOrder)=>{
      if(taskOrder.task.project === this.projectSelectedId){
      if (taskOrder && taskOrder.order === 'post') {
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this.taskChecked(taskOrder.task._id).subscribe(() => {
            taskOrder.task.checked = true;
            this.myTasks.push(taskOrder.task)
          })
        } else {
          this.groupTasks.push(taskOrder.task)
        }
      } else if(taskOrder.order === 'put'){
        if(taskOrder.task.user['_id'] === this._userServices.userOnline._id){
           this.myTasks.forEach((task,index)=>{
             if(task._id === taskOrder.task._id){
               this.myTasks[index] = taskOrder.task;
             }
           })
        }else{
          this.groupTasks.forEach((task, index) => {
            if (task._id === taskOrder.task._id) {
              this.groupTasks[index] = taskOrder.task;
            }
          })
        }
      }else if(taskOrder.order === 'delete'){
        if (taskOrder.task.user['_id'] === this._userServices.userOnline._id) {
          this.myTasks = this.myTasks.filter((task)=>{return task._id != taskOrder.task._id})
        } else {
          this.groupTasks = this.groupTasks.filter((task) => { return task._id != taskOrder.task._id })
        }
      }}
    }))
  }

  taskChecked(taskId:string){
    let url = `${URL_SERVICES}/checkTask/${taskId}`
    return this.http.put(url,{},{headers: this._userServices.headers }).pipe(map((res:any)=>{
      setTimeout(()=>{
         let taskOrder = new TaskOrder(this.myTasks.filter((task)=>{return task._id === taskId})[0],'put')
       this.emitTask(taskOrder)
      })
    }))
  }

  taskDone(taskId:string){
    let url = `${URL_SERVICES}/taskDone/${taskId}`
    return this.http.put(url,{},{ headers: this._userServices.headers }).pipe(map((res:any)=>{
      setTimeout(()=>{
        let taskOrder = new TaskOrder(this.myTasks.filter((task) => { return task._id === taskId })[0], 'put')
        this.emitTask(taskOrder)
      })
    }))
  }

  postTask(task:Task){
    let url = `${URL_SERVICES}/task`
    return this.http.post(url,task,{headers:this._userServices.headers}).pipe(map((res:any)=>{
      if (res.task.user._id === this._userServices.userOnline._id) {
        this.taskChecked(res.task._id).subscribe()
        res.task.checked=true;
          this.myTasks.push(res.task)
      } else {
          this.groupTasks.push(res.task) 
      }
      let taskOrder = new TaskOrder(res.task,'post')
      this.emitTask(taskOrder)
    }))
  }

  putTask(taskId:string,task:Task){
    let url = `${URL_SERVICES}/task/${taskId}`;
    return this.http.put(url,task,{headers:this._userServices.headers}).pipe(map((res:any)=>{
       if(this.myTasks.map((task)=>{return task._id}).indexOf(res.task._id)>=0){
         this.myTasks.forEach((task,index)=>{
           if(task._id===res.task._id){
             this.myTasks[index]=res.task;
           }
         })
       }else{
         this.groupTasks.forEach((task, index) => {
           if (task._id === res.task._id) {
             this.groupTasks[index] = res.task;
           }
         })
       } 
       let taskOrder = new TaskOrder(res.task,'put')   
       this.emitTask(taskOrder)         
    }))
  }

  deleteTask(taskId:string){
    let url = `${URL_SERVICES}/task/${taskId}`
    return this.http.delete(url,{headers:this._userServices.headers}).pipe(map((res:any)=>{
     let taskOrder = new TaskOrder(res.task,'delete')
     this.emitTask(taskOrder)
    }))
  }
}
