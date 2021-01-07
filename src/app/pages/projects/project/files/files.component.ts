import { Component} from '@angular/core';
import { FilesServices } from '../../../../providers/files.service';
import { ShowFilesModalController } from '../../../../modals/show-files-modal/showfiles-modal-controller.service';
import { ProjectServices } from '../../../../providers/project.service';
import { SwalService } from '../../../../providers/swal.service';

@Component({
  selector: "app-files",
  templateUrl: "./files.component.html",
  styleUrls: ["./files.component.css"]
})
export class FilesComponent  {

  constructor(
    private _showFilesModalController: ShowFilesModalController,
    public _projectServices:ProjectServices,
    private _filesServices:FilesServices,
    private _swalServices:SwalService
  ) {}


  showFile(id:string) {
    this._showFilesModalController.showModal(id);
    this._showFilesModalController.notification.emit();
  }

 deleteFile(fileId:string) {
   this._swalServices.confirmDelete().then((res:boolean)=>{
     if(res){
       this._filesServices.deleteFile(fileId,this._projectServices.projectSelectedId).subscribe()
     }
   })
  }
}
