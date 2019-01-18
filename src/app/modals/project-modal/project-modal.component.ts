import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProjectModalController } from './projectModalController';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';
import { ProjectServices } from '../../providers/project.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styles: []
})
export class ProjectModalComponent implements OnInit {

  form:FormGroup
  
  token:string

  project:Project

  constructor(private _userServices:UserServices,
              public _modalController:ProjectModalController,
              private _projectServices:ProjectServices) { 

    this.token = this._userServices.token
  }

  ngOnInit() {

    this.form= new FormGroup({
      nombre:new FormControl('',Validators.required),
      descripcion:new FormControl('',Validators.required)
    })

      this._modalController.notification.subscribe((res)=>{

        if(res){
          if (res.id) {

            this._projectServices.searchProjectById(res.id, this.token).subscribe((project) => {

              this.project = project;

              this.form.setValue({
                nombre: project.nombre,
                descripcion: project.descripcion
              })
            })
          }
        }
    })
  }

  hideModal(){
    this._modalController.hideModal()
  }  

  newProject(){

    if(this.form.valid){

      let project = new Project(this.form.value.nombre,this.form.value.descripcion)

      this._projectServices.createProject(project,this.token).subscribe((res:any)=>{

        console.log(res)

        this._modalController.hideModal();

         this._userServices.saveInStorage(res.user._id,res.user,this.token)

           this._modalController.notification.emit()
        })
    }
  }

  updateProject(){

    if(this.form.valid){

      let project = new Project(this.form.value.nombre, this.form.value.descripcion)

      this._projectServices.updateProject(this.project._id, project, this.token).subscribe(()=>{

          this._modalController.notification.emit()

          this._modalController.hideModal()

        })
    }
  }
}