import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserServices } from '../providers/user.service';
import { Router } from '@angular/router';
import { AlumnniModalController } from '../modals/alumni-modal/alumniModal.controller';
import { CalendarModalController } from '../modals/calendar-modal/calendar-modal.controller';
import { EventModalController } from '../modals/events-modal/eventsModal.controller';
import { FacilitiesModalController } from '../modals/facilities-modal/facilities-modalController';
import { IndexcardModalController } from '../modals/index-card-modal/indexcardModalController';
import { PasswordModalController } from '../modals/password-modal/passwordModalController.service';
import { ProfessorModalController } from '../modals/professor-modal/professorModalController';
import { ProjectModalController } from '../modals/project-modal/projectModalController';
import { ShowFilesModalController } from '../modals/show.files-modal/showfilesModal.controller';
import { SubjectModalController } from '../modals/subject-modal/subjectModalController';
import { TaskModalController } from '../modals/task-modal/task.modalController';
import { UploadFilesModalController } from '../modals/upload-files-modal/uploadFilesModalController';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {

  constructor(private socket:Socket,
              private _userServices:UserServices,
              private router:Router,
              private _alumniModalController:AlumnniModalController,
              private _calendarModalController:CalendarModalController,
              private _eventsModalController:EventModalController,
              private _facilitiesModalController:FacilitiesModalController,
              private _indexcardModalController:IndexcardModalController,
              private _passwordModalController:PasswordModalController,
              private _professorModalController:ProfessorModalController,
              private _projectModalController:ProjectModalController,
              private _showFilesModalController:ShowFilesModalController,
              private _subjectModalController:SubjectModalController,
              private _taskModalController:TaskModalController,
              private _uploadFilesModalController:UploadFilesModalController
              ) { }

  ngOnInit() {
    this.socket.on('connect', () => {
      this._userServices.socketOn = true;
      this.router.navigate(['/dashboard'])
    })
    this.socket.on('disconnect',()=>{
      this._userServices.socketOn = false;
        alert('La conexión con el servidor se ha interrumpido')
        if(!this._alumniModalController.hidden){this._alumniModalController.hideModal()}
        if (!this._calendarModalController.hidden) { this._calendarModalController.hideModal() }
        if (!this._eventsModalController.hidden) { this._eventsModalController.hideModal() }
        if (!this._facilitiesModalController.hidden) { this._facilitiesModalController.hideModal() }
        if (!this._indexcardModalController.hidden) { this._indexcardModalController.hideModal() }
        if (!this._passwordModalController.hidden) { this._passwordModalController.hideModal() }
        if (!this._professorModalController.hidden) { this._professorModalController.hideModal() }
        if (!this._projectModalController.hidden) { this._projectModalController.hideModal() }
        if (!this._showFilesModalController.hidden) { this._showFilesModalController.hideModal() }
        if (!this._subjectModalController.hidden) { this._subjectModalController.hideModal() }
        if (!this._taskModalController.hidden) { this._taskModalController.hideModal() }
        if (!this._uploadFilesModalController.hidden) { this._uploadFilesModalController.hideModal() }
    })
    this._userServices.userOnlineSocket().subscribe()
  }
}
