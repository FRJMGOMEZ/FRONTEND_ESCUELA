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
  }

  hideModal(){
    this._modalController.hideModal()
  }

  newProject(){

    if(this.form.valid){

      let project = new Project(this.form.value.nombre,this.form.value.descripcion)

      this._projectServices.createProject(project,this.token).subscribe((res:any)=>{

         this._userServices.saveInStorage(res.user._id,res.user,this.token)

           this._modalController.notification.emit()

           this._modalController.hideModal()

        })
    }
  }
}
