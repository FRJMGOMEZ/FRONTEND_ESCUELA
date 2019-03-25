import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UploadFilesModalController } from './uploadFilesModalController';
import { UploadFilesServices } from '../../providers/upload-files.service';
import { UserServices } from '../../providers/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-files-modal',
  templateUrl: './upload-files-modal.component.html',
  styles: []
})
export class UploadFilesModalComponent {

  userOnline:User
  token: string
  imgUpload: File
  temporaryImg:any

  constructor(public _modalService: UploadFilesModalController,
              private _uploadFilesServices:UploadFilesServices,
              private _userServices:UserServices) {

    this.userOnline = this._userServices.userOnline;
    this.token = this._userServices.token;
  }

  uploadImg() {
    let id = this._modalService.id;
    let type = this._modalService.type;
    this._uploadFilesServices.uploadFile(this.imgUpload, type, id)
    this.hideModal()
  }

  selectImg(file: File) {
    if (!file) { this.imgUpload = null; return }
    if (file.type.indexOf('image') < 0) {
      file = null;
      this.imgUpload=null;
      Swal.fire({
        text:`Los formatos admitidos son ${this._uploadFilesServices.imgFormats}, el archivo seleccionado no se cargará`,
        showCloseButton:true
      })
    }else{
      this.imgUpload = file;
      let reader = new FileReader();
      let urlImgTemp = reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.temporaryImg = reader.result;
      }
    }
  }

  hideModal() {
    this._modalService.hideModal()
    this.temporaryImg = null;
    this.imgUpload = null;
  }
}
