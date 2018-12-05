import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { ProjectModalController } from '../../modals/project-modal/projectModalController';
import { User } from 'src/app/models/user.model';

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
              private _projectModalController:ProjectModalController,) {

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

    this._userServices.searchUsersById(this.userOnline._id).subscribe((user) => {

      this.projects = user.proyectos;

    })
  }
}
