import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project.component';
import { ShowFilesModalController } from '../../../../modals/show.files-modal/showfilesModal.controller';
import { UploadFilesServices } from '../../../../providers/upload-files.service';
import { FileModel } from 'src/app/models/file.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  constructor(public projectComponent:ProjectComponent,
              public _showFilesModalController:ShowFilesModalController,
              public _uploadFilesServices:UploadFilesServices
              ) { }
  ngOnInit() {
  }

  deleteFile(id:string){
    this._uploadFilesServices.deleteFile(id, 'projectFiles').subscribe()
  }

  showFile(id:string){
    this._showFilesModalController.showModal(id)
    this._showFilesModalController.notification.emit()
  }
}
