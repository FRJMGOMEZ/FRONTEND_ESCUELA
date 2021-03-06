import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectServices } from '../../../providers/project.service';
import { UserServices } from 'src/app/providers/user.service';
import { User } from 'src/app/models/user.model';
import { ProjectModalController } from '../../../modals/project-modal/project-modal-controller.service';
import { UploadFilesModalController } from 'src/app/modals/upload-files-modal/upload-files-modal-controller.service';
import { UserModalController } from '../../../modals/users-modal/userModalController';
import Swal from "sweetalert2";
import { MainProjectsComponent } from '../mainProjects.component';
import { Subscription } from 'rxjs';
import { FilesServices } from 'src/app/providers/files.service';
import { FileOrder } from 'src/app/models/file.model';
import { DemoService } from 'src/app/providers/demo.service';
import { TasksService } from 'src/app/providers/tasks.service';

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})

export class ProjectComponent implements OnInit {

  userOnline:User

  public page:string;

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
    private ar:ActivatedRoute,
    public _uploadFilesModalController:UploadFilesModalController,
    private _filesService:FilesServices,
    public _demoServices:DemoService,
    public _taskServices:TasksService
  ) {
    this.userOnline = this._userServices.userOnline;
  }

  ngOnInit() {

    this._demoServices.oneProjectPopup()

    this.usersSocket = this._projectServices.usersConnected().subscribe()

    this.ar.params.subscribe((params) => {
      this._projectServices.getProjectById(params['id']).subscribe(() => {
         this._projectServices.userIn()
         this.page = 'chat';
         this._projectServices.projectSelectedId = params['id'];
      })
    });

    this.filesSocket = this._filesService.filesSocket().subscribe()
    this.filesSubscription=this._filesService.files$.subscribe((fileOrder: FileOrder) => {
      if (fileOrder.order === 'delete') {
        if (this._filesService.textFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.textFiles = this._projectServices.textFiles.filter((file) => { return file._id != fileOrder.file._id })
        } else if (this._filesService.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.imageFiles = this._projectServices.imageFiles.filter((file) => { return file._id != fileOrder.file._id })
        }
      }else if(fileOrder.order === 'post'){
        if (this._filesService.textFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.textFiles.push(fileOrder.file)
        } else if (this._filesService.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.imageFiles.push(fileOrder.file)
        }
      }else if(fileOrder.order === 'push'){
        if (this._filesService.textFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.textFiles.push(fileOrder.file)
        } else if (this._filesService.imgFormats.indexOf(fileOrder.file['format']) >= 0) {
          this._projectServices.imageFiles.push(fileOrder.file)
        }
      }
    })

    this.tasksSocket = this._taskServices.taskSocket().subscribe()
  }
  
  ngAfterViewChecked(){
    this._projectServices.userIn();
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

   async toOtherProject(id: string) {
    this.page = await null
    this.router.navigate(['/projects', id])
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
            this.userOnline.projects = this.userOnline.projects.filter((project: string) => { return project != this._projectServices.projectSelectedId})
            this._userServices.saveInStorage(this.userOnline._id, this.userOnline, this._userServices.token)
            this._projectServices.projects = this._projectServices.projects.filter((project) => { return project._id != this._projectServices.projectSelectedId })
            setTimeout(()=>{
              this.router.navigate(['projects'])
            })
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
          this.router.navigate(['/projects']).then(()=>{
            this._projectServices.getProjects()
          })
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
    this._projectServices.userOut()
    this._projectServices.administrators = [];
    this._projectServices.participants = [];
    this._projectServices.name = undefined;
    this._projectServices.description = undefined;
    this._projectServices.projectImage = undefined;
    this._projectServices.groupTasks = [];
    this._projectServices.myTasks = [];
    this._projectServices.textFiles = [];
    this._projectServices.imageFiles = [];
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

