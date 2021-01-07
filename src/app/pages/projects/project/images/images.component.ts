import { Component } from '@angular/core';
import { ShowFilesModalController } from '../../../../modals/show-files-modal/showfiles-modal-controller.service';
import { FilesServices } from '../../../../providers/files.service';
import { ProjectServices } from '../../../../providers/project.service';
import { SwalService } from '../../../../providers/swal.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent  {
  constructor(public _projectServices:ProjectServices,
              public _showFilesModalController:ShowFilesModalController,
              public _filesServices:FilesServices,
              public _swalServices:SwalService
              ) { }
 
  deleteFile(id:string){
     this._swalServices.confirmDelete().then((res:any)=>{
       if(res){
         this._filesServices.deleteFile(id, this._projectServices.projectSelectedId).subscribe()
       }
     })
  }

  showFile(id:string){
    this._showFilesModalController.showModal(id)
    this._showFilesModalController.notification.emit()
  }
}
