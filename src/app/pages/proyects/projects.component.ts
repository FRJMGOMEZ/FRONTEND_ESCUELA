import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProjectModalController } from '../../modals/project-modal/projectModalController';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProyectsComponent implements OnInit {

  projects:any[] = []
  token:string
  userOnline:User

  constructor(private _userServices:UserServices,
              private _projectModalController:ProjectModalController,
              private router:Router) {

    this.userOnline = this._userServices.userOnline
    this.token = this._userServices.token;

   }

  ngOnInit() {

    this.searchProjects()

    this._projectModalController.notification.subscribe((res)=>{

      if(!res){

        this.searchProjects()
      }
    })
  }

  newProject(){

    this._projectModalController.showModal(this._userServices.userOnline._id)
  }

  searchProjects(){

    this.projects = []

    this._userServices.searchUsersById(this.userOnline._id).subscribe((user) => {

      for(let project of user.proyectos){

        if(project.activo === true){

          this.projects.push(project)
        }


      }
    })
  }

  toProject(id:string){
     
    this.router.navigate(['/project',id])

  }
}
