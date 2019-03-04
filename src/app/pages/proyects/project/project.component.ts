import { Component, OnInit, EventEmitter} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProjectServices } from '../../../providers/project.service';
import { UserServices } from 'src/app/providers/user.service';
import { Project, ProjectOrder } from '../../../models/project.model';
import { User } from 'src/app/models/user.model';
import { ProjectModalController } from '../../../modals/project-modal/projectModalController';
import { UploadFilesModalController } from 'src/app/modals/upload-files-modal/uploadFilesModalController';
import { UserModalController } from '../../../modals/users-modal/userModalController';
import * as _swal from "sweetalert";
import { SweetAlert } from "sweetalert/typings/core";
import { UserOrder } from '../../../models/user.model';
import { MessagesService } from '../../../providers/messages.service';
import { MessageOrder } from '../../../models/message.model';

const swal: SweetAlert = _swal as any;

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})

export class ProjectComponent implements OnInit {

  userOnline:User

  public project: Project;

  public notification = new EventEmitter<any>();

  public page:string = 'chat'

  constructor(
    public _userServices: UserServices,
    private router: Router,

    public _projectServices: ProjectServices,
    private _projectModalController: ProjectModalController,
    private _uploadFilesModalController:UploadFilesModalController,
    private _usersModalController: UserModalController,
    private activatedRoute:ActivatedRoute,
    private _messagesServices:MessagesService
  ) {
    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

   this._projectServices.projects$.subscribe((projectOrder:ProjectOrder)=>{
     if(projectOrder.order === 'getOne'){
       this.project = projectOrder.project;
       this.project.participants = this.project.participants.filter((user:User)=>{return user._id != this._userServices.userOnline._id})
     }
     if(projectOrder.order === 'put'){
       this.project.name = projectOrder.project.name;
       this.project.description = projectOrder.project.description;
     }
   })
    
   this._projectServices.users$.subscribe((userOrder:UserOrder)=>{
     if(userOrder.user._id != this.userOnline._id){
    if(userOrder.order === 'participant'){
      let projectIds = this.project.participants.map((participant: User) => { return participant._id })
      if (projectIds.indexOf(userOrder.user._id) < 0) {
        this.project.participants.push(userOrder.user)
      } else {
        this.project.participants = this.project.participants.filter((participant: User) => { return participant._id != userOrder.user._id })
      }
    }else if(userOrder.order === 'admin'){
      let projectIds = this.project.administrators.map((admin: User) => { return admin._id })
      if (projectIds.indexOf(userOrder.user._id) < 0) {
        this.project.administrators.push(userOrder.user)
      } else {
        this.project.administrators = this.project.administrators.filter((admin: User) => { return admin._id != userOrder.user._id })
      }
    }
  }
})

   this._messagesServices.messages$.subscribe((messageOrder:MessageOrder)=>{
      if(messageOrder.order==='push'){
        if(messageOrder.message.img){
          let image = {title:messageOrder.message.title,image:messageOrder.message.img}
          this.project.images.push(image)
        }
        if (messageOrder.message.file) {
          let file = { title: messageOrder.message.title, file: messageOrder.message.file }
          this.project.files.push(file)
        }
      }
   })

    this.activatedRoute.params.subscribe((params)=>{
      this._projectServices.getProjectById(params['id']).subscribe()
    }) 
  }

  putProject() {
    this._projectModalController.showModal(this.project._id);
  }

  toOtherProject(id: string) {
    this.router.navigate(['/project', id])
  }

  addUser() {
    this._usersModalController.showModal('participant')
    this._usersModalController.notification.emit()
  }

  deleteUser(id: string) {
    this._projectServices.addOrRemoveUser(this.project._id,id).subscribe()
  }

  addAdmin(id:string) {
    this._usersModalController.notification.emit({ id })
    this._usersModalController.showModal('admin')
  }

  getOut(){
    this._projectServices.addOrRemoveUser(this.project._id, this._userServices.userOnline._id).subscribe(() => {
      this.project.participants = this.project.participants.filter((participant: User) => { return participant._id != this._userServices.userOnline._id })
      this._projectServices.addOrRemoveAdmin(this.project._id, this._userServices.userOnline._id).subscribe(() => {
        this.project.administrators = this.project.administrators.filter((admin:User)=>{return admin._id != this._userServices.userOnline._id })
          this.userOnline.projects = this.userOnline.projects.filter((project:string)=>{return project != this.project._id})
          this.router.navigate(['/projects'])
          this._userServices.saveInStorage(this.userOnline._id,this.userOnline,this._userServices.token)
      })
    })
  }

  openFilesUploadModal(id: string) {
    this._uploadFilesModalController.showModal(id, "projects");
  }
}
