import { Component, OnInit } from '@angular/core';
import { UploadFilesServices } from '../../../../providers/upload-files.service';
import { ShowFilesModalController } from '../../../../modals/show.files-modal/showfilesModal.controller';
import { ProjectServices } from '../../../../providers/project.service';

@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.css"]
})
export class FilesComponent implements OnInit {

  constructor(
    private _showFilesModalController: ShowFilesModalController,
    public _projectServices:ProjectServices,
    private _uploadServices:UploadFilesServices
  ) {}

  ngOnInit() {}

  showFile(id:string) {
    this._showFilesModalController.showModal(id);
    this._showFilesModalController.notification.emit();
  }

 deleteFile(fileId:string) {
   this._uploadServices.deleteFile(fileId,'projectFiles').subscribe()
  }
}
