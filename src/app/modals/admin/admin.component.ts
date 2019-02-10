import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { AdminModalController } from './adminModal.controller';
import { ProjectServices } from '../../providers/project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles:[]
})
export class AdminComponent implements OnInit {

  token:string

  usersAdm:any[]=[]
  usersNoAdm:any[]=[]
  projectId:string

  constructor(private _userServices:UserServices,
              public _modalController:AdminModalController,
              private _projectServices:ProjectServices) {

    this.token = this._userServices.token;
   }

  ngOnInit() {
    this._modalController.notification.subscribe((res)=>{
      if(res){
        if(res.id){
          this.projectId = res.id;
          this._projectServices.searchProjectById(res.id,this.token).subscribe((project:any)=>{
            this.usersAdm = project.administrators;
            for (let user of project.participants){
              if(this.usersAdm.indexOf(user)<0){
                this.usersNoAdm.push(user)
              }
            }
          })          
        }
      }
    })
  }
  addOrRemoveAdmin(user:any){
    this._projectServices.addOrRemoveAdmin(this.projectId,user._id,this.token).subscribe((res)=>{
           if(this.usersAdm.indexOf(user)< 0){
            this.usersNoAdm = this.usersNoAdm.filter((userNoAdm)=>{return userNoAdm != user })
            this.usersAdm.push(user)
           }else{
            this.usersNoAdm.push(user)
             this.usersAdm = this.usersAdm.filter((userAdm) => { return userAdm != user })
           }        
    })
  }
  hideModal(){
    this._modalController.hideModal()
    this.usersAdm = [];
    this.usersNoAdm = [];
  }

}
