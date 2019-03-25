import { Component, OnInit} from '@angular/core';
import { ProjectModalController } from '../../modals/project-modal/projectModalController';
import { ProjectServices } from '../../providers/project.service';
import * as _ from 'underscore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainProjects',
  templateUrl: './mainProjects.component.html',
  styleUrls: ['./mainProjects.component.css']
})
export class MainProjectsComponent implements OnInit {


  constructor(private _projectModalController:ProjectModalController,
              public _projectServices:ProjectServices,
              private router:Router) {
   }

  ngOnInit() { 
   this._projectServices.getProjects().subscribe(()=>{
     this._projectServices.projects.forEach((project,index)=>{
     })
   }) 
  }

  toProject(id:string){
    this._projectServices.projectSelectedId = id;
    this.router.navigate(['/projects',id])
  }

  newProject(){
    this._projectModalController.showModal()
  }

  changeProjectStatus(){
    this._projectServices.changeProjectStatus(this._projectServices.projectSelectedId).subscribe()
  }

  ngOnDestroy(): void {
   this._projectServices.projects=[]
  }
}
