import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProjectServices } from '../../../providers/project.service';
import { UserServices } from 'src/app/providers/user.service';
import { Project } from '../../../models/project.model';
import { User } from 'src/app/models/user.model';
import { ProjectModalController } from '../../../modals/project-modal/projectModalController';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  token:string
  userOnline:User

  projects:Project[]
  project:Project

  constructor(private _userServices:UserServices,
              private router:Router,
              private aRoute:ActivatedRoute,
              private _projectServices:ProjectServices,
              private _projectModalController:ProjectModalController) {
    
    this.userOnline = this._userServices.userOnline
    this.token = this._userServices.token;

    this.aRoute.params.subscribe((params) => {

      this.getProject(params['id'])
    })

    this._userServices.searchUsersById(this.userOnline._id).subscribe((user) => {

      this.projects = user.proyectos.filter((project)=>{return project._id != this.project._id})
    })
   }

  ngOnInit() {

    this._projectModalController.notification.subscribe((res)=>{

      if(!res){
        this.getProject(this.project._id)
      }
    })
  }

  getProject(id:string){

    this._projectServices.searchProjectById(id, this.token).subscribe((project) => {

      this.project = project
    })
  }

  editProject(id:string){

    this._projectModalController.notification.emit({id})
    this._projectModalController.showModal()
  }

  changeProject(id:string){

    this.router.navigate(['/project',id])
  }

  addUser(id){

    
  }

  deleteUser(){}
}
