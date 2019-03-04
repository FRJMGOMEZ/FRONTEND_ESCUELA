import { Component, OnInit, Input } from '@angular/core';
import { FilesModalController } from '../../../../modals/files-modal/filesModal.controller';
import { ProjectComponent } from '../project.component';
import {File as FileModel} from '../../../../models/file'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  @Input()files : FileModel[]
  extensions:string[]

  constructor(private _filesModalController:FilesModalController, private projectComponent:ProjectComponent) { }

  ngOnInit() {}

  openFilesModal(){
    this._filesModalController.showModal(this.projectComponent.project._id)
    this._filesModalController.notification.emit()
  }

}
