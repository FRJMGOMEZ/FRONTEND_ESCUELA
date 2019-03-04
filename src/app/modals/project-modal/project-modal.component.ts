import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProjectModalController } from './projectModalController';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project, ProjectOrder } from '../../models/project.model';
import { ProjectServices } from '../../providers/project.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styles: []
})
export class ProjectModalComponent implements OnInit {

  form:FormGroup
  
  token:string

  project:any

  constructor(private _userServices:UserServices,
              public _modalController:ProjectModalController,
              private _projectServices:ProjectServices) { 
  }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })

    this._modalController.notification.subscribe(()=>{
      this.form.setValue({
        name: '',
        description: ''
      })
    })

    this._projectServices.projects$.subscribe((projectOrder:ProjectOrder)=>{
      if(projectOrder.order === 'getOne' || projectOrder.order === 'put'){
        this.project = projectOrder.project;
        this.form.setValue({
          name: this.project.name,
          description: this.project.description || ''
        })
      }
    })
  }

  newProject(){
    if(this.form.valid){
      let project = new Project(this.form.value.name,[],[],this.form.value.description)
      this._projectServices.postProject(project).subscribe((user:User)=>{
         this._userServices.saveInStorage(user._id,user,this._userServices.token);
        this._modalController.hideModal();
        })
    }
  }

  updateProject(){
    if(this.form.valid){
      let project = new Project(this.form.value.name,[],[],this.form.value.description)
      this._projectServices.updateProject(this._modalController.id, project).subscribe(()=>{
          this._modalController.hideModal()
        })
    }
  }

  hideModal() {
    this._modalController.hideModal()
    this.form.setValue({
      name: this.project.name,
      description: this.project.description || ''
    })
  }  
}