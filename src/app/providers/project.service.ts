import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Project, ProjectOrder } from '../models/project.model';
import { UserServices } from './user.service';
import { Subject } from 'rxjs';
import { User} from '../models/user.model';
import { Task, TaskOrder} from '../models/task.model';
import { Socket } from "ngx-socket-io";
import { FileModel } from '../models/file.model';
import { UploadFilesServices } from './upload-files.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectServices {

  headers:HttpHeaders

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

  public textFiles: any[] = [];
  public imageFiles: any[] = [];

  projectsSource = new Subject<ProjectOrder>();
  projects$ = this.projectsSource.asObservable()

  taskSource = new Subject<TaskOrder>();
  tasks$ = this.taskSource.asObservable() 

  constructor(private http:HttpClient,
              private _userServices: UserServices,
              private socket:Socket,
              private _uploadFilesServices:UploadFilesServices) { 
                
   this.headers = new HttpHeaders().set("token",localStorage.getItem('token'))}


  getProjects() {
    let url = `${URL_SERVICES}/projects`
    return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
        this.projects = res.projects
    }))
  }

  postProject(project: Project) {
    let url = `${URL_SERVICES}/project`
    return this.http.post(url, project, { headers: this.headers }).pipe(map((res: any) => {
      this._userServices.saveInStorage(res.user._id, res.user, this._userServices.token)
      this.projects.push(res.project)
    }))
  }

  getProjectById(id: string) {
    let url = `${URL_SERVICES}/searchById/project/${id}`
    return this.http.get(url, { headers: this.headers }).pipe(map((res: any) => {
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
    return this.http.put(url, project, { headers: this.headers }).pipe(map((res: any) => {
      this.projects.forEach((project,index)=>{
        if(project._id === res.project._id){
          this.projects[index]= res.project;
        }
      })
      this.name = res.project.name;
      this.description = res.project.description;
    }))
  }

  deleteProject(id:string){
    let url = `${URL_SERVICES}/project/${id}`
    return this.http.delete(url,{headers:this.headers}).pipe(map((res:any)=>{
      res.files.forEach((file)=>{
        this._uploadFilesServices.deleteFile(file,'projectFiles').subscribe()
      })
    }))
  }

  changeProjectStatus(id:string){
    let url = `${URL_SERVICES}/project/changeStatus/${id}`
    return this.http.put(url,{},{headers:this.headers}).pipe(map((res:any)=>{
      this.status = res.project.status;
      this.projects.forEach((project,index)=>{
        if(project._id === res.project._id){
          this.projects[index].status = res.project.status;
        }
      })
    }))
  }
  /////// Users ////////////////

  lastConnection() {
    let url = `${URL_SERVICES}/lastConnection/${this.projectSelectedId}`
    return this.http.put(url,{},{ headers: this.headers }).pipe(map((res: any) => {
      this._userServices.saveInStorage(res.user._id,res.user, this._userServices.token)
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
    return this.http.put(url, body, { headers: this.headers }).pipe(map((res: any) => {
      let participantsIds = this.participants.map((user)=>{return user._id})
      if(participantsIds.indexOf(res.participant._id)<0){
        this.participants.push(res.participant)
        this._userServices.users = this._userServices.users.filter((user) => { return user._id != userId })
      }else{
        this.participants = this.participants.filter((participant)=>{return participant._id != res.participant._id})
        this._userServices.users.push(res.participant)
      }
    }))
  }

  addOrRemoveAdmin(userId: string) {
    let url = `${URL_SERVICES}/pullOrPushAdmin/${this.projectSelectedId}`;
    let body = { participant: userId };
    return this.http.put(url, body, { headers: this.headers }).pipe(map((res: any) => {
      let adminsIds = this.administrators.map((user) => { return user._id })
      if (adminsIds.indexOf(res.administrator._id) < 0) {
        this.administrators.push(res.administrator)
        this._userServices.users = this._userServices.users.filter((user) => { return user._id != userId })
      } else {
        this.administrators = this.administrators.filter((administrators) => { return administrators._id != res.administrator._id })
        this._userServices.users.push(res.administrator)
      }
    }))
  }

  //////// Tasks ////////

  getTasks(){
    let url = `${URL_SERVICES}/tasks`
    return this.http.get(url,{headers:this.headers}).pipe(map((res:any)=>{
      return res.tasks
    }))
  }

  taskChecked(taskId:string){
    let url = `${URL_SERVICES}/checkTask/${taskId}`
    return this.http.put(url,{},{headers: this.headers })
  }

  taskDone(taskId:string){
    let url = `${URL_SERVICES}/taskDone/${taskId}`
    return this.http.put(url,{},{ headers: this.headers }).pipe(map((res:any)=>{
        this.myTasks.forEach((task, index) => {
          if (res.task._id === task._id) {
            this.myTasks[index].ok = true;
          }
        })
    }))
  }

  postTask(task:Task){
    let url = `${URL_SERVICES}/task`
    return this.http.post(url,task,{headers:this.headers}).pipe(map((res:any)=>{
      if (res.task.user._id === this._userServices.userOnline._id) {
        this.taskChecked(res.task._id).subscribe()
        res.task.checked=true;
          this.myTasks.push(res.task)
      } else {
          this.groupTasks.push(res.task)
      }
    }))
  }

  putTask(taskId:string,task:Task){
    let url = `${URL_SERVICES}/task/${taskId}`;
    return this.http.put(url,task,{headers:this.headers}).pipe(map((res:any)=>{
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
    }))
  }

  deleteTask(taskId:string){
    let url = `${URL_SERVICES}/task/${taskId}`
    return this.http.delete(url,{headers:this.headers})
  }

  emitProject(projectOrder: ProjectOrder) {
    this.socket.emit('projectOrder', projectOrder)
  }

  projectsSocket() {
    return this.socket.fromEvent('projectOrder').pipe(map((res: any) => {
      this.projectsSource.next(res.projectOrder)
    }))
  }
}
