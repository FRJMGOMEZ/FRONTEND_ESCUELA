import { Component } from '@angular/core';
import { ShowFilesModalController } from '../../../../modals/show.files-modal/showfilesModal.controller';
import { UploadFilesServices } from '../../../../providers/upload-files.service';
import { ProjectServices } from '../../../../providers/project.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent  {
  constructor(public _projectServices:ProjectServices,
              public _showFilesModalController:ShowFilesModalController,
              public _uploadFilesServices:UploadFilesServices
              ) { }
 
  deleteFile(id:string){
    this._uploadFilesServices.deleteFile(id, 'projectFiles').subscribe()
  }

  showFile(id:string){
    this._showFilesModalController.showModal(id)
    this._showFilesModalController.notification.emit()
  }
}
