import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProjectServices } from '../../../providers/project.service';
import { UserServices } from 'src/app/providers/user.service';
import { Project } from '../../../models/project.model';
import { User } from 'src/app/models/user.model';
import { ProjectModalController } from '../../../modals/project-modal/projectModalController';
import { UploadFilesModalController } from 'src/app/modals/upload-files-modal/uploadFilesModalController';
import { UserModalController } from '../../../modals/users-modal/userModalController';
import { AdminModalController } from '../../../modals/admin/adminModal.controller';

import * as _swal from "sweetalert";
import { SweetAlert } from "sweetalert/typings/core";
const swal: SweetAlert = _swal as any;

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"]
})
export class ProjectComponent implements OnInit {
  
  token: string;

  public userOnline: User;
  admin:boolean=false
  projects: Project[]
  public project: Project;

  public notification = new EventEmitter<any>();

  constructor(
    private _userServices: UserServices,
    private router: Router,
    private aRoute: ActivatedRoute,
    private _projectServices: ProjectServices,
    private _projectModalController: ProjectModalController,
    private _uploadFilesController: UploadFilesModalController,
    private _usersModalController:UserModalController,
    private _adminModalController:AdminModalController
  ) {

    this.userOnline = this._userServices.userOnline;
    this.token = this._userServices.token;

    this.aRoute.params.subscribe(params => {
      
      this.getProject(params["id"])

      this._userServices
        .searchUsersById(this.userOnline._id)
        .subscribe((user: User) => {

          let proyectos = user.proyectos;

          this.projects = proyectos.filter((project) => {

            return project._id != params['id'];
          });
        });
    })
  }

  ngOnInit() {

    this._projectModalController.notification.subscribe(res => {
      if (!res) {

         if(this.project){

           this.getProject(this.project._id);
         }
      }
    })

    this._uploadFilesController.notification.subscribe((res)=>{
      
      if(!res){
        this.getProject(this.project._id)
      }
    })

    this._usersModalController.notification.subscribe((res)=>{

      if(!res){
        this.getProject(this.project._id)
      }
    })
  }

  getProject(id: string) {
    this._projectServices
      .searchProjectById(id, this.token)
      .subscribe(project => {

        if(project.administradores.length === 0){

         this.router.navigate(['/projects'])
        }else{

          project.participantes = project.participantes.filter((user: any) => { return user._id != this.userOnline._id })

          this.project = project;

          let admIds = this.project.administradores.map((user:any)=>{return user._id})

          if(admIds.indexOf(this.userOnline._id)<0){
            this.admin = false
          }else{
            this.admin = true
          }
          this.notification.emit()
        }
      });
  }
  
  editProject(id: string) {
    this._projectModalController.notification.emit({ id });
    this._projectModalController.showModal();
  }

  changeProject(id: string) {
    this._userServices
      .searchUsersById(this.userOnline._id)
      .subscribe((user: User) => {
       
        let proyectos = user.proyectos;

        this.projects = proyectos.filter(project => {
          return project._id != id;
        })
        this.router.navigate(["/project", id]);
      });
  }

  addUser(id: string) { 
    this._usersModalController.showModal(id)

    let usersIds = this.project.participantes.map((user:any)=>{return user._id})

    usersIds.push(this.userOnline._id)

    this._usersModalController.notification.emit({usersIds})
  }

  deleteUser(id:string) {

    this._projectServices.addOrRemoveUser(this.project._id,id, this.token).subscribe(()=>{

      this.getProject(this.project._id)
    })
  }

  openFilesUploadModal(id:string){
    this._uploadFilesController.showModal(id,'proyectos')
  }

  changeAdmin(){
    this._adminModalController.notification.emit({id:this.project._id});
    this._adminModalController.showModal()
  }

  getOut(){

    let admIds = this.project.administradores.map((user: any) => { return user._id })

    if(admIds.indexOf(this.userOnline._id)<0){

        this._projectServices.addOrRemoveUser(this.project._id,this.userOnline._id,this.token).subscribe(()=>{
         
          this.router.navigate(["/projects"]);          
        })
    }

    else{

      if (this.project.administradores.length === 1) {

        swal({
          title: "Estás seguro/a",
          text: 'Ya que eres el último admnistrador del projecto, este se desactivará con tu salida',
          icon: "warning",
          buttons: ["Cancelar", "Seguir adelante"],
          dangerMode: true,
        })
          .then((willDelete: any) => {
            if (willDelete) {

              this._projectServices.changeStatus(this.project._id, this.token).subscribe((res) => {

                this._projectServices.addOrRemoveAdmin(this.project._id, this.userOnline._id, this.token).subscribe(() => {

                  this.router.navigate(["/projects"]);
                })
              })
            }
          });
      }
      else {
        this._projectServices.addOrRemoveUser(this.project._id,this.userOnline._id,this.token).subscribe(()=>{

          this._projectServices.addOrRemoveAdmin(this.project._id, this.userOnline._id, this.token).subscribe(() => {

            this.router.navigate(['/projects'])
          })
        })
      }
    }
  }
}
