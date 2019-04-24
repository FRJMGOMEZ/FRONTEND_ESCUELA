import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { UserModalController } from './userModalController';
import { User} from 'src/app/models/user.model';
import { ProjectServices } from '../../providers/project.service';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styles: []
})
export class UsersModalComponent implements OnInit {

  participants:any[]
  admins:any[]

  constructor(public _userServices:UserServices,
              public _modalController:UserModalController,
              private _projectServices:ProjectServices) {}

  ngOnInit() {
    this._modalController.notification.subscribe(() => {
      this.participants = this._projectServices.participants;
      this.admins = this._projectServices.administrators;
      this._userServices.getUsers(0,1000).subscribe(()=>{
        if (this._modalController.type === 'participant') {
          let participantsIds = this.participants.map((participant: User) => { return participant._id })
          this._userServices.users = this._userServices.users.filter((user) => { return user._id != this._userServices.userOnline._id })
          this._userServices.users = this._userServices.users.filter((user) => { return user.status === true })
          this._userServices.users = this._userServices.users.filter((user) => { return participantsIds.indexOf(user._id) < 0 });
        }
        if (this._modalController.type == 'admin') {
          let adminsIds = this.admins.map((adm: User) => { return adm._id })
          let participantsIds = this.participants.map((participant: User) => { return participant._id })
          this._userServices.users = this._userServices.users.filter((user) => { return user._id != this._userServices.userOnline._id })
          this._userServices.users = this._userServices.users.filter((user) => { return user.status === true })
          this._userServices.users = this._userServices.users.filter((user) => { return adminsIds.indexOf(user._id) < 0 });
          this._userServices.users = this._userServices.users.filter((user) => { return participantsIds.indexOf(user._id) >= 0 });
        }
      })
  })
  }
  
  addUser(id: string) {
    if(this._modalController.type === 'participant'){  
      this._projectServices.addOrRemoveParticipant(id).subscribe(() => {
        this.hideModal()
      })
    }else if (this._modalController.type === 'admin'){
      this._projectServices.addOrRemoveAdmin(id).subscribe(() => {
        this.hideModal()
      })
    }   
  }

  hideModal(){
    this._userServices.users = [];
    this.admins = [];
    this.participants = [];
    this._modalController.hideModal()
  }
}
