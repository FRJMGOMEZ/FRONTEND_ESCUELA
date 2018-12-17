import { Component, OnInit } from '@angular/core';
import { FilesModalController } from '../../../../modals/files-modal/filesModal.controller';
import { ProjectComponent } from '../project.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private _filesModalController:FilesModalController, private projectComponent:ProjectComponent) { }

  ngOnInit() {
  }

  openFilesModal(){

    this._filesModalController.showModal(this.projectComponent.project._id)

    this._filesModalController.notification.emit()
  }

}
