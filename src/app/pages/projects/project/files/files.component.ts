import { Component} from '@angular/core';
import { FilesServices } from '../../../../providers/files.service';
import { ShowFilesModalController } from '../../../../modals/show.files-modal/showfilesModal.controller';
import { ProjectServices } from '../../../../providers/project.service';

@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.css"]
})
export class FilesComponent  {

  constructor(
    private _showFilesModalController: ShowFilesModalController,
    public _projectServices:ProjectServices,
    private _filesServices:FilesServices
  ) {}


  showFile(id:string) {
    this._showFilesModalController.showModal(id);
    this._showFilesModalController.notification.emit();
  }

 deleteFile(fileId:string) {
   this._filesServices.deleteFile(fileId).subscribe()
  }
}
