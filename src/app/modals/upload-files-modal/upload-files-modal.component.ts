import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UploadFilesModalController } from './uploadFilesModalController';
import { UploadFilesServices } from '../../providers/upload-files.service';
import { UserServices } from '../../providers/user.service';

@Component({
  selector: 'app-upload-files-modal',
  templateUrl: './upload-files-modal.component.html',
  styles: []
})
export class UploadFilesModalComponent implements OnInit {

  userOnline:User
  token: string
  imgUpload: File
  temporaryImg: any

  constructor(public _modalService: UploadFilesModalController,
              private _uploadFilesServices:UploadFilesServices,
              private _userServices:UserServices) {

    this.userOnline = this._userServices.userOnline;
    this.token = this._userServices.token;
  }

  ngOnInit() {
  }

  uploadImg() {
    let id = this._modalService.id;
    let type = this._modalService.type;
    this._uploadFilesServices.updateFile(this.imgUpload, type, id).then(() => { this.hideModal()})
  }

  selectImg(file: File) {
    if (!file) { this.imgUpload = null; return }
    if (file.type.indexOf('image') < 0) {
      this.imgUpload = null;
      swal('JUST IMAGES', 'THE SELECTED FILE IS NOT AN IMAGE', 'error');
      return;

    }
    this.imgUpload = file;
    let reader = new FileReader();
    let urlImgTemp = reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.temporaryImg = reader.result;
    }
  }

  hideModal() {
    this._modalService.hideModal()
    this.temporaryImg = null;
    this.imgUpload = null;
  }
}
