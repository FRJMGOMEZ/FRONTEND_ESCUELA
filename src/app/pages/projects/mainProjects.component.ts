import { Component, OnInit,OnDestroy, AfterContentChecked} from '@angular/core';
import { ProjectModalController } from '../../modals/project-modal/projectModalController';
import { ProjectServices } from '../../providers/project.service';
import { Subscription } from 'rxjs';
import { ProjectOrder, Project } from '../../models/project.model';
import * as _ from 'underscore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainProjects',
  templateUrl: './mainProjects.component.html',
  styleUrls: ['./mainProjects.component.css']
})
export class MainProjectsComponent implements OnInit, OnDestroy {

  projects:Project[] = []

  projectsSubscription:Subscription = null;

  projectSelectedId:string

  constructor(private _projectModalController:ProjectModalController,
              private _projectServices:ProjectServices,
              private router:Router) {
   }

  ngOnInit() { 
  
    this.projectsSubscription=this._projectServices.projects$.subscribe((projectOrder:ProjectOrder)=>{
      if(projectOrder.order === 'get'|| projectOrder.order === 'push'){
        this.projects.push(projectOrder.project)
        this.projects = _.sortBy(this.projects,(project)=>{
          let timeStamp = project._id.toString().substring(0, 8);
          let date = new Date(parseInt(timeStamp, 16) * 1000);
          return date          
        }).reverse()
      }
    })
    this._projectServices.getProjects().subscribe()
  }

  toProject(id:string){
    this.projectSelectedId = id;
    console.log(this.projects.length)
    this.router.navigate(['/projects',id])
  }
  
  newProject(){
    this._projectModalController.showModal()
    this._projectModalController.notification.emit()
  }
  
  ngOnDestroy(){
    this.projectsSubscription.unsubscribe()
  }  
}
