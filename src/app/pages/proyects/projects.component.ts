import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProjectModalController } from '../../modals/project-modal/projectModalController';
import { ProjectServices } from '../../providers/project.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProjectOrder } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects:any[] = []

  projectsSubscription:Subscription = null;

  notification = new EventEmitter<number>()

  constructor(private _projectModalController:ProjectModalController,
              private _projectServices:ProjectServices,
              private router:Router) {
   }

  ngOnInit() {
    this._projectServices.getProjects().subscribe()
    this.projectsSubscription=this._projectServices.projects$.subscribe((projectOrder:ProjectOrder)=>{

      if(projectOrder.order != 'getOne'){
        this.projects.push(projectOrder.project)
      }
    })
    this._projectModalController.notification.subscribe((res)=>{
      if(!res){
      }
    })
  }
  newProject(){
    this._projectModalController.showModal()
    this._projectModalController.notification.emit()

  }
  toProject(id:string){
    this.router.navigate(['/project', id])
    this.notification.emit(this.projects.length)
  }
  ngOnDestroy(){
    this.projectsSubscription.unsubscribe()
  }  
}
