import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { UserModalController } from './userModalController';
import { User } from 'src/app/models/user.model';
import { ProjectServices } from '../../providers/project.service';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styles: []
})
export class UsersModalComponent implements OnInit {

  token:string

  users:User[]=[]

  constructor(private _userServices:UserServices,
              public _modalController:UserModalController,
              private _projectServices:ProjectServices) {

    this.token = this._userServices.token;
   }

  ngOnInit() {

    this._modalController.notification.subscribe((res)=>{

      if(res){

        if(res.usersIds){
          
          this.getUsers(res.usersIds)            
        }
      }
    })
  }

  getUsers(usersIds:string[]){

    this._userServices.getUsers().subscribe((users) => {

      for(let user of users){

        if(usersIds.indexOf(user._id) < 0){

          this.users.push(user)
        }
      }  
      this.users = this.users.filter((user) => { return user.status != false })
    })
  }


  hideModal(){
    this.users = []
    this._modalController.hideModal()
  }

  addUser(id:string){

    this._projectServices.addOrRemoveUser(this._modalController.id,id,this.token).subscribe(()=>{

    this.users = this.users.filter((user)=>{return user._id != id })

    this._modalController.notification.emit()
    })
  }
}
