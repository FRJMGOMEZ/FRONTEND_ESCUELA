import { Component, OnInit } from '@angular/core';
import { ProjectModalController } from './project-modal-controller.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project} from '../../models/project.model';
import { ProjectServices } from '../../providers/project.service';


@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styles: []
})
export class ProjectModalComponent implements OnInit {

  form:FormGroup
  
  token:string

  constructor(public _modalController:ProjectModalController,
              private _projectServices:ProjectServices) {}

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('')
    })

    this._modalController.notification.subscribe((res:any)=>{
        this.form.setValue({
          name: this._projectServices.name,
          description: this._projectServices.description || ''
        })
    })
  }

  newProject(){
    if(this.form.valid){
      let project = new Project(this.form.value.name,[],[],this.form.value.description)
      this._projectServices.postProject(project).subscribe(()=>{
        this.hideModal()
      })
    }
  }

  putProject(){
    if(this.form.valid){
      let project = new Project(this.form.value.name,[],[],this.form.value.description)
      this._projectServices.putProject(this._modalController.id, project).subscribe(()=>{
          this._modalController.hideModal()
        })
    }
  }

  hideModal() {
    this._modalController.hideModal()
    this.form.setValue({
      name: '',
      description: ''
    })
  }
}