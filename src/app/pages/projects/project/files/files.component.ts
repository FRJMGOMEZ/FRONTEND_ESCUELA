import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project.component';
import { FileModel } from '../../../../models/file.model';
import { UploadFilesServices } from '../../../../providers/upload-files.service';
import { MainProjectsComponent } from '../../mainProjects.component';
import { ShowFilesModalController } from '../../../../modals/show.files-modal/showfilesModal.controller';


@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.css"]
})
export class FilesComponent implements OnInit {

  constructor(
    private _showFilesModalController: ShowFilesModalController,
    public mainProjectsComponent: MainProjectsComponent,
    public projectComponent:ProjectComponent,
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
