import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { UserServices } from '../providers/user.service';
import { Router } from '@angular/router';
import { AlumnniModalController } from '../modals/alumni-modal/alumni-modal-controller.service';
import { CalendarModalController } from '../modals/calendar-modal/calendar-modal-controller.service';
import { EventModalController } from '../modals/events-modal/events-modal-controller.service';
import { FacilitiesModalController } from '../modals/facilities-modal/facilities-modal-controller.service';
import { IndexcardModalController } from '../modals/index-card-modal/indexcard-modal-controller.service';
import { PasswordModalController } from '../modals/password-modal/password-modal-controller.service';
import { ProfessorModalController } from '../modals/professor-modal/professor-modal-controller';
import { ProjectModalController } from '../modals/project-modal/project-modal-controller.service';
import { ShowFilesModalController } from '../modals/show-files-modal/showfiles-modal-controller.service';
import { SubjectModalController } from '../modals/subject-modal/subject-modal-controller';
import { TaskModalController } from '../modals/task-modal/task-modal-controller.service';
import { UploadFilesModalController } from '../modals/upload-files-modal/upload-files-modal-controller.service';
import { IncomeModalController } from '../modals/income-modal/incomes-modal-controller.service';
import { PaymentModalController } from '../modals/payment-modal/payment-modal-controller.service';
import { SpinnerService } from '../providers/spinner.service';
import Swal from 'sweetalert2';

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
              private _uploadFilesModalController:UploadFilesModalController,
              private _incomesModalController:IncomeModalController,
              private _paymentModalController:PaymentModalController,
              public _spinnerServices:SpinnerService
              ) { }

  ngOnInit() {

    this._userServices.getStarwarsCharacters().subscribe()
    this.socket.on('connect', () => {
      this._userServices.socketOn = true;
      this.router.navigate(['/dashboard'])
      Swal.fire({
        text: 'La sesión lleva demasiado tiempo inactiva( y por ello el servidor gratuito de HEROKU entra en pausa ), te he redirigido al dashboard',
        showCloseButton: true,
        type: 'info',
        heightAuto: false
      })    
    })
    this.socket.on('disconnect',()=>{
      this._userServices.socketOn = false;
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
        if(!this._incomesModalController.hidden){this._incomesModalController.hideModal()}
        if(!this._paymentModalController.hidden){this._paymentModalController.hideModal()}
    })
    this._userServices.userOnlineSocket().subscribe()
  }

  onResize(){
  }

  ngOnDestroy(){
    this._userServices.logout();
  }  
}
