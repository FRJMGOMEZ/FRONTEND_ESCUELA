import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { User } from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { UploadFilesModalController } from '../../modals/upload-files-modal/uploadFilesModalController';
import { PasswordModalController } from '../../modals/password/passwordModalController.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  userOnline:User

  constructor(private _userServices:UserServices, private _uploadFilesModal:UploadFilesModalController, private _passwordModalController:PasswordModalController) {
   }

  ngOnInit() {

    this.userOnline = this._userServices.userOnline;

    this._uploadFilesModal.notification.subscribe(()=>{

      console.log(this._userServices.userOnline)

      this.userOnline = this._userServices.userOnline;
    })
  }

  saveChanges(form:NgForm){

    if(form.valid){

      let user = new User(form.value.nombre,form.value.email)
 
      this._userServices.updateUser(this.userOnline._id,user).subscribe(()=>{

        this.userOnline = this._userServices.userOnline;
      })
    }
  }

  openImgModal(){
    this._uploadFilesModal.showModal(this.userOnline._id)

  }

  openPasswordModal(){
   this._passwordModalController.showModal(this.userOnline._id)
  }
}
