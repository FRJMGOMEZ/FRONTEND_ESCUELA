

//// Modules ////
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PipesModule } from "../pipes/pipes.module";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { SharedModule } from "../shared/shared.module";


//// Components ////
import { IndexcardModalComponent } from './index-card-modal/index-card-modal.component';
import { AlumniModalComponent } from './alumni-modal/alumni-modal.component';
import { ProfessorModalComponent } from './professor-modal/professor-modal.component';
import { SubjectModalComponent } from './subject-modal/subject-modal.component';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { UploadFilesModalComponent } from './upload-files-modal/upload-files-modal.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { PasswordComponent } from "./password-modal/password.component";
import { ShowFilesModalComponent } from "./show.files-modal/showfiles-modal.component";
import { TaskModalComponent } from "./task-modal/task-modal.component";
import { EventsModalComponent } from "./events-modal/events-modal.component";
import { ResetComponent } from '../login/recovering/reset/reset.component';
import { ForgotComponent } from '../login/recovering/forgot/forgot.component';
import { AssignationsModalComponent } from './assignations-modal/assignations-modal.component';


/////Controllers///
import { CalendarModalComponent } from "./calendar-modal/calendar-modal.component";
import { AlumnniModalController } from './alumni-modal/alumniModal.controller';
import { ProfessorModalController } from "./professor-modal/professorModalController";
import { IndexcardModalController } from "./index-card-modal/indexcard-modal-controller";
import { ProjectModalController } from './project-modal/projectModalController';
import { SubjectModalController } from './subject-modal/subjectModalController';
import { UploadFilesModalController } from "./upload-files-modal/uploadFilesModalController";
import { UserModalController } from "./users-modal/userModalController";
import { PasswordModalController } from "./password-modal/passwordModalController.service";
import { EventModalController } from './events-modal/eventsModal.controller';
import { CalendarModalController } from './calendar-modal/calendar-modal.controller';
import { FacilitiesModalComponent } from './facilities-modal/facilities-modal.component';
import { FacilitiesModalController } from './facilities-modal/facilities-modalController';
import { TaskModalController } from './task-modal/task.modalController';
import { ShowFilesModalController } from './show.files-modal/showfilesModal.controller';
import { RecoveringModalController } from '../login/recovering/recovering.modal,controller';
import { AlbumModalComponent } from './album-modal/album-modal.component';
import { AlbumModalController } from './album-modal/albumModalController';
import { TrackModalComponent } from './track-modal/track-modal.component';
import { TrackModalController } from './track-modal/trackModalController';
import {AssignationsModalController} from './assignations-modal/assignationsModal.controller';
import { PaymentModalComponent } from './payment-modal/paymentModal.component';
import { PaymentModalController } from './payment-modal/paymentModalController.service';
import { IncomeModalComponent } from './income-modal/income-modal.component';
import { IncomeModalController } from './income-modal/incomesModalController.service';


@NgModule({
  declarations: [
    IndexcardModalComponent,
    ProjectModalComponent,
    AlumniModalComponent,
    ProfessorModalComponent,
    SubjectModalComponent,
    UsersModalComponent,
    UploadFilesModalComponent,
    PasswordComponent,
    ShowFilesModalComponent,
    EventsModalComponent,
    CalendarModalComponent,
    FacilitiesModalComponent,
    TaskModalComponent,
    ResetComponent,
    ForgotComponent,
    AlbumModalComponent,
    TrackModalComponent,
    AssignationsModalComponent,
    PaymentModalComponent,
    IncomeModalComponent,
    
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule,
    PdfViewerModule,
    SharedModule
  ],

  exports: [
    IndexcardModalComponent,
    ProjectModalComponent,
    AlumniModalComponent,
    ProfessorModalComponent,
    SubjectModalComponent,
    UsersModalComponent,
    UploadFilesModalComponent,
    PasswordComponent,
    ShowFilesModalComponent,
    EventsModalComponent,
    CalendarModalComponent,
    FacilitiesModalComponent,
    TaskModalComponent,
    ResetComponent,
    ForgotComponent,
    AlbumModalComponent,
    TrackModalComponent,
    AssignationsModalComponent,
    PaymentModalComponent,
    IncomeModalComponent,
  ],

  providers: [
    AlumnniModalController,
    IndexcardModalController,
    ProfessorModalController,
    ProjectModalController,
    SubjectModalController,
    UploadFilesModalController,
    UserModalController,
    PasswordModalController,
    EventModalController,
    CalendarModalController,
    FacilitiesModalController,
    TaskModalController,
    ShowFilesModalController,
    RecoveringModalController,
    AlbumModalController,
    TrackModalController,
    AssignationsModalController,
    PaymentModalController,
    IncomeModalController
  ],

  bootstrap: []
})
export class ModalsModule {}
