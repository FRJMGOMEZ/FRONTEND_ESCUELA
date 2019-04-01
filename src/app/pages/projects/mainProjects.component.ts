import { Component, OnInit} from '@angular/core';
import { ProjectModalController } from '../../modals/project-modal/projectModalController';
import { ProjectServices } from '../../providers/project.service';
import * as _ from 'underscore';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { UserServices } from '../../providers/user.service';


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
              private router:Router,
              private _userServices:UserServices) {
   }

  ngOnInit() { 
        this._projectServices.getProjects().subscribe(() => {
          if(this._userServices.socket){
            this.projectsSocket = this._projectServices.projectsSocket().subscribe()
            this.usersSocket = this._projectServices.usersSocket().subscribe()
          }
        })
  }

  toProject(id:string){
    this._projectServices.projectSelectedId = id;
    setTimeout(()=>{
      this.router.navigate(['/projects', this._projectServices.projectSelectedId]).then(() => {
      })
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
