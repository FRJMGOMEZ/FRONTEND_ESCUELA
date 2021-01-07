import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { UploadFilesModalController } from './upload-files-modal-controller.service';
import { FilesServices } from '../../providers/files.service';
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
              private _filesServices:FilesServices) {
  }

  uploadImg() {
    let id = this._modalService.id;
    let type = this._modalService.type;
    this._filesServices.uploadFile(this.imgUpload, type, id)
    this.hideModal()
  }

  selectImg(file: File) {
    if (!file) { this.imgUpload = null; return }
    if (file.type.indexOf('image') < 0) {
      file = null;
      this.imgUpload=null;
      Swal.fire({
        text:`Los formatos admitidos son ${this._filesServices.imgFormats}, el archivo seleccionado no se cargará`,
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
