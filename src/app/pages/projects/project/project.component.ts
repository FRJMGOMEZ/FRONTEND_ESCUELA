import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectServices } from '../../../providers/project.service';
import { UserServices } from 'src/app/providers/user.service';
import { User } from 'src/app/models/user.model';
import { ProjectModalController } from '../../../modals/project-modal/projectModalController';
import { UploadFilesModalController } from 'src/app/modals/upload-files-modal/uploadFilesModalController';
import { UserModalController } from '../../../modals/users-modal/userModalController';
import { UserOrder } from '../../../models/user.model';
import Swal from "sweetalert2";
import { FileModel, FileOrder } from '../../../models/file.model';
import { MainProjectsComponent } from '../mainProjects.component';
import { Subscription } from 'rxjs';
import { UploadFilesServices } from '../../../providers/upload-files.service';
import { Project } from 'src/app/models/project.model';


@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})

export class ProjectComponent implements OnInit {

  userOnline:User

  public page: string

  public administrators:User[]
  public participants:User[]
  public name:string
  public description:string
  public projectImage:FileModel
  public messagesCount:number = 0;

  public textFiles:any[]=[]
  public imageFiles:any[]=[]
  textFormats: string[] = ['pdf'];
  imgFormats: string[] = ['png', 'jpg', 'gif', 'jpeg'];

  filesSubscription:Subscription = null;
  projectsSubscription:Subscription=null;
  usersSubscription:Subscription=null;

  constructor(
    public _userServices: UserServices,
    private router: Router,
    public mainProjectsComponent:MainProjectsComponent,
    public _projectServices: ProjectServices,
    public _projectModalController: ProjectModalController,
    private _usersModalController: UserModalController,
    private _ar:ActivatedRoute,
    public _uploadFilesModalController:UploadFilesModalController,
    private _uploadFilesServices:UploadFilesServices
  ) {
    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

   this.projectsSubscription=this._projectServices.projects$.subscribe((projectOrder:any)=>{
     if(projectOrder.order === 'getById'){
       let project = projectOrder.project
       this.administrators = project.administrators;
       this.participants = project.participants.filter((user)=>{return user._id != this.userOnline._id})
       this.name = project.name;
       this.description = project.description;
       this.projectImage = project.img;
       this.textFiles = [];
       this.imageFiles = [];
       this.messagesCount = projectOrder.project.messages.length;
       projectOrder.project.messages.forEach((message)=>{
         if(message.file){
           if (this.textFormats.indexOf(message.file.format) >= 0) {
             this.textFiles.push(message.file)
           } else if (this.imgFormats.indexOf(message.file.format) >= 0) {
             this.imageFiles.push(message.file)
           }
         }
       })
     }else if(projectOrder.order === 'put'){
      if(projectOrder.project._id === this.mainProjectsComponent.projectSelectedId){
         this.name = projectOrder.project.name;
         this.description = projectOrder.project.description;
      }
          this.mainProjectsComponent.projects.forEach((project,index)=>{
            if(project._id === projectOrder.project._id){
              this.mainProjectsComponent.projects[index] = projectOrder.project;
            }
          })
     }
   })
    
  this.usersSubscription=this._projectServices.users$.subscribe((userOrder:UserOrder)=>{
     if(userOrder.user._id != this.userOnline._id){
    if(userOrder.order === 'participant'){
      let participantsIds = this.participants.map((participant: User) => { return participant._id })
      if (participantsIds.indexOf(userOrder.user._id) < 0) {
        this.participants.push(userOrder.user)
      } else {
        this.participants = this.participants.filter((participant: User) => { return participant._id != userOrder.user._id })
      }
    }else if(userOrder.order === 'admin'){
      let admIds = this.administrators.map((admin: User) => { return admin._id })
      if (admIds.indexOf(userOrder.user._id) < 0) {
        this.administrators.push(userOrder.user)
      } else {
        this.administrators = this.administrators.filter((admin: User) => { return admin._id != userOrder.user._id })
      }
    }
  }
})
  this.filesSubscription = this._uploadFilesServices.files$.subscribe((fileOrder:FileOrder)=>{
    if(fileOrder.order === 'push'){
      if(fileOrder.file.type=== 'projects'){
        this.projectImage = fileOrder.file;
      }else if (fileOrder.file.type === 'projectFiles'){
        if(this.textFormats.indexOf(fileOrder.file.format)>=0){
          this.textFiles.push(fileOrder.file)
        }else if (this.imgFormats.indexOf(fileOrder.file.format)>=0){
          this.imageFiles.push(fileOrder.file)
        }
      }
    }else if (fileOrder.order === 'delete'){
      if (this.textFormats.indexOf(fileOrder.file.format) >= 0) {
        this.textFiles = this.textFiles.filter((file)=>{return file._id != fileOrder.file._id})
      } else if (this.imgFormats.indexOf(fileOrder.file.format) >= 0) {
        this.imageFiles = this.imageFiles.filter((file)=>{return file._id != fileOrder.file._id})
      }
    }
   })

    this._ar.params.subscribe(params => {
      this._projectServices.getProjectById(params['id']).subscribe(() => {
        this.page = 'chat';
        this.mainProjectsComponent.projectSelectedId = params['id'];
      })
    });
  }

  putProject(id:string){
    this._projectModalController.showModal(id)
    this._projectModalController.notification.emit({name:this.name,description:this.description})
  }

  addUser() {
    this._usersModalController.showModal('participant')
    this._usersModalController.notification.emit()
  }
  addAdmin() {
    this._usersModalController.notification.emit({id:this.mainProjectsComponent.projectSelectedId})
    this._usersModalController.showModal('admin')
  }

  switchPage(page: string) {
    this.page = page;
  }

  toOtherProject(id: string) {
    this.page = null;
    setTimeout(()=>{
      this.router.navigate(['/projects', id])
    })
  }

  getOut(){
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "No podrás volver al projecto a no ser que otro admnistrador te vuelva a incluir",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.value) {
        this._projectServices.addOrRemoveParticipant(this.mainProjectsComponent.projectSelectedId, this._userServices.userOnline._id).subscribe(() => {
          this.participants = this.participants.filter((participant: User) => { return participant._id != this._userServices.userOnline._id })
          this._projectServices.addOrRemoveAdmin(this.mainProjectsComponent.projectSelectedId, this._userServices.userOnline._id).subscribe(() => {
            this.administrators = this.administrators.filter((admin: User) => { return admin._id != this._userServices.userOnline._id })
            this.userOnline.projects = this.userOnline.projects.filter((project: string) => { return project != this.mainProjectsComponent.projectSelectedId})
            this.router.navigate(['projects'])
            this._userServices.saveInStorage(this.userOnline._id, this.userOnline, this._userServices.token)
          })
        })
      }
    })
  }

  ngOnDestroy(): void { 
    this.mainProjectsComponent.projectSelectedId=null;
    this.filesSubscription.unsubscribe()
    this.projectsSubscription.unsubscribe()
    this.usersSubscription.unsubscribe() 
  }
}
