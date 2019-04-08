import { Component} from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { User} from '../../models/user.model';
import { NgForm } from '@angular/forms';
import { UploadFilesModalController } from '../../modals/upload-files-modal/uploadFilesModalController';
import { PasswordModalController } from '../../modals/password-modal/passwordModalController.service';
import { Subscription } from 'rxjs';
import { UploadFilesServices } from '../../providers/upload-files.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent {

  fileSubscription:Subscription = null;

  constructor(public _userServices:UserServices,
              private _uploadFilesModal:UploadFilesModalController,
              private _passwordModalController:PasswordModalController,
              private _filesUploadService:UploadFilesServices) {}

  saveChanges(form:NgForm){
    if(form.valid){
      let user:any = new User(form.value.name,form.value.email,'',null)
      this._userServices.putUser(this._userServices.userOnline._id,user).subscribe()
    }
  }
   
  changeImg(){
    this._uploadFilesModal.showModal(this._userServices.userOnline._id,'users')
    this.fileSubscription = this._filesUploadService.files$.subscribe((fileOrder) => {
      if (fileOrder.order === 'post') {
        if (fileOrder.file.type === 'users') {
          let user:any = this._userServices.userOnline;
          user.img = fileOrder.file._id;
          this._userServices.putUser(this._userServices.userOnline._id, this._userServices.userOnline).subscribe()
          this.fileSubscription.unsubscribe()
        }
      }
    })
  }
  openPasswordModal(){
   this._passwordModalController.showModal()
  }
}
