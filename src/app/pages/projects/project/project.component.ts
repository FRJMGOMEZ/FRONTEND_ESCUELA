import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectServices } from '../../../providers/project.service';
import { UserServices } from 'src/app/providers/user.service';
import { User } from 'src/app/models/user.model';
import { ProjectModalController } from '../../../modals/project-modal/projectModalController';
import { UploadFilesModalController } from 'src/app/modals/upload-files-modal/uploadFilesModalController';
import { UserModalController } from '../../../modals/users-modal/userModalController';
import Swal from "sweetalert2";
import { MainProjectsComponent } from '../mainProjects.component';
import { Subscription } from 'rxjs';
import { UploadFilesServices } from 'src/app/providers/upload-files.service';
import { FileOrder } from 'src/app/models/file.model';

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})

export class ProjectComponent implements OnInit {

  userOnline:User

  public page: string

  public filesSocket:Subscription = null;
  public filesSubscription:Subscription=null;
  private usersSocket:Subscription=null;
  private tasksSocket:Subscription = null;

  constructor(
    public _userServices: UserServices,
    private router: Router,
    public mainProjectsComponent:MainProjectsComponent,
    public _projectServices: ProjectServices,
    public _projectModalController: ProjectModalController,
    private _usersModalController: UserModalController,
    private _ar:ActivatedRoute,
    public _uploadFilesModalController:UploadFilesModalController,
    private _filesUploadServices:UploadFilesServices
  ) {
    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

    this.usersSocket = this._projectServices.usersConnected().subscribe()
    this._ar.params.subscribe(params => {
      this._projectServices.getProjectById(params['id']).subscribe(() => {
        this.page = 'chat';
        this._projectServices.userIn()
      })
    });

    this.filesSocket = this._filesUploadServices.filesSocket().subscribe()
    this.filesSubscription=this._filesUploadServices.files$.subscribe((fileOrder: FileOrder) => {
      if (fileOrder.order === 'delete') {
        if (this._filesUploadServices.textFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.textFiles = this._projectServices.textFiles.filter((file) => { return file._id != fileOrder.file._id })
        } else if (this._filesUploadServices.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.imageFiles = this._projectServices.imageFiles.filter((file) => { return file._id != fileOrder.file._id })
        }
      }else if(fileOrder.order === 'post'){
        if (this._filesUploadServices.textFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.textFiles.push(fileOrder.file)
        } else if (this._filesUploadServices.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.imageFiles.push(fileOrder.file)
        }
      }else if(fileOrder.order === 'push'){
        if (this._filesUploadServices.textFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.textFiles.push(fileOrder.file)
        } else if (this._filesUploadServices.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.imageFiles.push(fileOrder.file)
        }
      }
    })

    this.tasksSocket = this._projectServices.taskSocket().subscribe()   
  }

  ngAfterContentChecked(): void {
    setTimeout(()=>{
      if (this._projectServices.status === false && this._projectServices.administrators.map((user) => { return user._id }).indexOf(this._userServices.userOnline._id) < 0) {
        this.router.navigate(['/projects'])
      }
    })
  }

  putProject(id:string){
    this._projectModalController.showModal(id)
    this._projectModalController.notification.emit()
  }

  addParticipant() {
    this._usersModalController.showModal('participant')
    this._usersModalController.notification.emit()
  }

  checkUserRole(id:string){
    if(this._projectServices.administrators.map((user)=>{return user._id}).indexOf(id)<0){
      return false
    }else{
      return true
    }
  }

  removeParticipant(id:string){

    Swal.fire({
      title: '¿Estás seguro/a?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.value){
        this._projectServices.addOrRemoveParticipant(id).subscribe()
      }
    })
  }

  addAdmin() {
    this._usersModalController.notification.emit()
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
        this._projectServices.addOrRemoveParticipant(this._userServices.userOnline._id).subscribe(() => {
          this._projectServices.addOrRemoveAdmin(this._userServices.userOnline._id).subscribe(() => {
            this._projectServices.projects = this._projectServices.projects.filter((project)=>{return project._id != this._projectServices.projectSelectedId})
            this.userOnline.projects = this.userOnline.projects.filter((project: string) => { return project != this._projectServices.projectSelectedId})
            this.router.navigate(['projects'])
            this._userServices.saveInStorage(this.userOnline._id, this.userOnline, this._userServices.token)
          })
        })
      }
    })
  }

  deleteProject(id:string){
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "Este cambio no se podrá revertir, además, si eliminas el projecto, también eliminarás toda la información almacenada en el mismo, puedes revisar la opción de DESACTIVAR, si quieres que los usuarios no admnistradores no puedan acceder al projecto durante el tiempo que determines.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Entiendo, y quiero eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.value){
        this._projectServices.deleteProject(id).subscribe(() => {
          this._projectServices.projects = this._projectServices.projects.filter((project) => { return project._id != id })
          this.router.navigate(['/projects'])
        })

      }
    })
  }

  changeProjectStatus(){
    Swal.fire({
      title: '¿Estás seguro/a?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result)=>{
       if(result.value){
         this._projectServices.changeProjectStatus(this._projectServices.projectSelectedId).subscribe()
       }
    })
  }

  ngOnDestroy(): void { 
    this._projectServices.administrators = [];
    this._projectServices.participants = [];
    this._projectServices.name = undefined;
    this._projectServices.description = undefined;
    this._projectServices.projectImage = undefined;
    this._projectServices.groupTasks = [];
    this._projectServices.myTasks = [];
    this._projectServices.textFiles = [];
    this._projectServices.imageFiles = [];
    this._projectServices.messagesCount = 0;
    this._projectServices.userOut()
    this.usersSocket.unsubscribe()
    this.filesSocket.unsubscribe()
    this.filesSubscription.unsubscribe()
    this.tasksSocket.unsubscribe()
    this._userServices.userOnline.projects.forEach((project,index)=>{
      if(project._id === this._projectServices.projectSelectedId){
        this._projectServices.lastConnection().subscribe(()=>{
          this._projectServices.projectSelectedId = undefined;
        })
      }
    })
  }
}

