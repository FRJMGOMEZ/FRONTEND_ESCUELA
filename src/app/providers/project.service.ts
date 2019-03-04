import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';
import { Project, ProjectOrder } from '../models/project.model';
import { UserServices } from './user.service';
import { Subject } from 'rxjs';
import { UserOrder, User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectServices {

  headers:HttpHeaders

  projectsSource = new Subject<ProjectOrder>();
  projects$ = this.projectsSource.asObservable()

  usersSource = new Subject<UserOrder>();
  users$ = this.usersSource.asObservable()

  projects:Project[]=[]

  constructor(private http:HttpClient,
              private _userServices: UserServices) { 
    this.headers = new HttpHeaders().set("token", this._userServices.token);          
   }

  getProjects(){
    let url = `${URL_SERVICES}/projects`
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      this.projects = res.projects;
      res.projects.forEach((project)=>{
        let projectOrder = new ProjectOrder(project,'get')
        this.projectsSource.next(projectOrder);
      })
    }))
  } 
  
  postProject(project:Project){
    let url = `${URL_SERVICES}/project`
    return this.http.post(url,project,{headers:this.headers}).pipe(map((res:any)=>{
      let projectOrder = new ProjectOrder(res.project,'push')
      this.projects.push(res.project)
      this.projectsSource.next(projectOrder)
     return res.user
    }))
  }

  getProjectById(id:string){
    let url = `${URL_SERVICES}/searchById/project/${id}`
    return this.http.get(url, {headers:this.headers}).pipe(map((res:any)=>{
      let projectOrder = new ProjectOrder(res.project,'getOne')
       this.projectsSource.next(projectOrder)
    }))
  }

  addOrRemoveUser(projectId:string,participantId:string){
    let url = `${URL_SERVICES}/pullOrPushOutParticipant/${projectId}`;
    let body = {participant:participantId};
    return this.http.put(url,body,{headers:this.headers}).pipe(map((res:any)=>{
      let userOrder = new UserOrder(res.user,'participant')
      this.usersSource.next(userOrder)
    }))
  }

  addOrRemoveAdmin(projectId:string,userId:string){
    let url = `${URL_SERVICES}/pullOrPushAdmin/${projectId}`;
    let body = {participant:userId};
    return this.http.put(url,body,{headers:this.headers}).pipe(map((res:any)=>{
      let userOrder = new UserOrder(res.user,'admnin')
      this.usersSource.next(userOrder)
    }))
  }

  updateProject(id:string,project:Project){
    let url = `${URL_SERVICES}/project/${id}`
    return this.http.put(url,project,{headers:this.headers}).pipe(map((res:any)=>{
      let projectOrder = new ProjectOrder(res.project,'put')
      this.projectsSource.next(projectOrder)
    }))
  }

  changeStatus(id:string){
    let url = `${URL_SERVICES}/changeStatus/${id}`
    return this.http.put(url,{headers:this.headers}).pipe(map((res:any)=>{
      return res.project
    }))
  }
}
