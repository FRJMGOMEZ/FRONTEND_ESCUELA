import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { UserModalController } from './userModalController';
import { User, UserOrder } from 'src/app/models/user.model';
import { ProjectServices } from '../../providers/project.service';
import { ProjectOrder } from '../../models/project.model';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styles: []
})
export class UsersModalComponent implements OnInit {

  users:any[]=[]
  projectId:string
  participants:any[]
  admins:any[]

  constructor(public _userServices:UserServices,
              public _modalController:UserModalController,
              private _projectServices:ProjectServices) {}

  ngOnInit() {
    this._projectServices.projects$.subscribe((projectOrder:ProjectOrder)=>{
      if(projectOrder.order === 'getById'){
        this.projectId = projectOrder.project._id
        this.participants = projectOrder.project.participants;
        this.admins = projectOrder.project.administrators;
      }
    })
    
    this._modalController.notification.subscribe(() => {
      this._userServices.getUsers().subscribe((users) => {
        this.users = users;
      if (this._modalController.type === 'participant') {
        let participantsIds = this.participants.map((participant: User) => { return participant._id })
        this.users = this.users.filter((user) => { return user._id != this._userServices.userOnline._id })
        this.users = this.users.filter((user) => { return user.status === true })
          this.users = this.users.filter((user) => { return participantsIds.indexOf(user._id) < 0 });
      }
      if (this._modalController.type == 'admin') {
          this.users = users;
        let adminsIds = this.admins.map((adm: User) => { return adm._id })
        this.users = this.users.filter((user) => { return user._id != this._userServices.userOnline._id })
        this.users = this.users.filter((user) => { return user.status === true })
        this.users = this.users.filter((user) => { return adminsIds.indexOf(user._id) < 0 });
    }
    })
  })

    this._projectServices.users$.subscribe((userOrder:UserOrder)=>{
      if (userOrder.user._id != this._userServices.userOnline._id) {
        if (userOrder.order === 'participant') {
          let projectIds = this.participants.map((participant: User) => { return participant._id })
          if (projectIds.indexOf(userOrder.user._id) < 0) {
            this.participants.push(userOrder.user)
          } else {
            this.participants= this.participants.filter((user: User) => { return user._id != userOrder.user._id })
          }
        } else if (userOrder.order === 'admin') {
          let projectIds = this.admins.map((admin: User) => { return admin._id })
          if (projectIds.indexOf(userOrder.user._id) < 0) {
            this.admins.push(userOrder.user)
          } else {
            this.admins = this.admins.filter((admin: User) => { return admin._id != userOrder.user._id })
          }
        }
      }
    })
  }
  searchUsers(input:string){
        this._userServices.searchUsers(input).subscribe((users)=>{
          this.users = users.filter((user) => { return user._id != this._userServices.userOnline._id })
          this.users = this.users.filter((user) => { return user.status === true })
        })        
  }
  addUser(id: string) {
   this._projectServices.addOrRemoveParticipant(this.projectId, id).subscribe(()=>{
     this.hideModal()
   })
  }
  hideModal(){
    this._modalController.hideModal()
  }
}
