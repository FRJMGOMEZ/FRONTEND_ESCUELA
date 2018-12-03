import { Component, OnInit } from '@angular/core';
import { ProjectServices } from '../../providers/project.service';
import { Project } from '../../models/project.model';
import { UserServices } from '../../providers/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProyectsComponent implements OnInit {

  projects:any[]
  token:string

  constructor(private _userServices:UserServices, private _projectServices:ProjectServices) {

    this.token = this._userServices.token;
    this.projects = this._userServices.userOnline.proyectos;

   }

  ngOnInit() {

    console.log(this.projects)
  }

}
