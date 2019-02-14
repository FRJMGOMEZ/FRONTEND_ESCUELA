import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { User, UserOrder } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { UploadFilesModalController } from '../../modals/upload-files-modal/uploadFilesModalController';
import { PasswordModalController } from '../../modals/password/passwordModalController.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  userOnline:User

  userSubscription:Subscription

  constructor(private _userServices:UserServices,
              private _uploadFilesModal:UploadFilesModalController,
              private _passwordModalController:PasswordModalController) {
   }

  ngOnInit() {

    this.userOnline = this._userServices.userOnline;
    
    this._userServices.users$.subscribe((userOrder:UserOrder)=>{
      if(userOrder.user._id === this.userOnline._id){
        this.userOnline = userOrder.user;
      }
    })
  }

  saveChanges(form:NgForm){
    if(form.valid){
      let user = new User(form.value.name,form.value.email)
      this._userServices.updateUser(this.userOnline._id,user).subscribe()
    }
  }

  openImgModal(){
    this._uploadFilesModal.showModal(this.userOnline._id,'users')
  }

  openPasswordModal(){
   this._passwordModalController.showModal(this.userOnline._id)
  }
}
