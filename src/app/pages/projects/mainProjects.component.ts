import { Component, OnInit} from '@angular/core';
import { ProjectModalController } from '../../modals/project-modal/projectModalController';
import { ProjectServices } from '../../providers/project.service';
import * as _ from 'underscore';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mainProjects',
  templateUrl: './mainProjects.component.html',
  styleUrls: ['./mainProjects.component.css']
})
export class MainProjectsComponent implements OnInit {

  usersSocket: Subscription = null;
  projectsSocket:Subscription=null;

  constructor(private _projectModalController:ProjectModalController,
              public _projectServices:ProjectServices,
              private router:Router) {
   }

  ngOnInit() { 
        this._projectServices.getProjects().subscribe(() => {
          this.projectsSocket=this._projectServices.projectsSocket().subscribe()
          this.usersSocket=this._projectServices.usersSocket().subscribe()
        })
  }

  toProject(id:string){
    this.router.navigate(['/projects',id]).then(()=>{
      this._projectServices.projectSelectedId = id;
    })
  }

  newProject(){
    this._projectModalController.showModal()
  }

  changeProjectStatus(id:string){
    this._projectServices.changeProjectStatus(id).subscribe()
  }

  ngOnDestroy(): void {
   this._projectServices.projects=[]
   this.projectsSocket.unsubscribe()
   this.usersSocket.unsubscribe()
       
  }
}
