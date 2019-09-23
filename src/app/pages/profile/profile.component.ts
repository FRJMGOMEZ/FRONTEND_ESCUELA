import { Component} from '@angular/core';
import { UserServices } from '../../providers/user.service';
import { UploadFilesModalController } from '../../modals/upload-files-modal/uploadFilesModalController';
import { PasswordModalController } from '../../modals/password-modal/passwordModalController.service';
import { Subscription } from 'rxjs';
import { FilesServices } from '../../providers/files.service';
import { User } from 'src/app/models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  fileSubscription:Subscription = null;

  constructor(public _userServices:UserServices,
              private _uploadFilesModal:UploadFilesModalController,
              private _passwordModalController:PasswordModalController,
              private _filesService:FilesServices,
              ) {}

  editUser(){
    const user = new User(this._userServices.userOnline.name, this._userServices.userOnline.email);
    this._userServices.putUser(this._userServices.userOnline._id,user).subscribe(()=>{
             Swal.fire({
               text:"Cambios guardados",
               showCloseButton:true,
               type:"success"
             })
    })
  }

  changeImg(){
    this._uploadFilesModal.showModal(this._userServices.userOnline._id,'User')
    this.fileSubscription = this._filesService.files$.subscribe((fileOrder) => {
      if (fileOrder.order === 'post') {
        if (fileOrder.file.type === 'User') {
          const user:any = this._userServices.userOnline;
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
