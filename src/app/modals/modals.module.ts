

//// Modules ////
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PipesModule } from "../pipes/pipes.module";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { SharedModule } from "../shared/shared.module";


//// Components ////
import { indexcardModalComponent } from './index-card-modal/index-card-modal.component';
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



/////Controllers///
import { CalendarModalComponent } from "./calendar-modal/calendar-modal.component";
import { AlumnniModalController } from './alumni-modal/alumniModal.controller';
import { ProfessorModalController } from "./professor-modal/professorModalController";
import { indexcardModalController } from "./index-card-modal/indexcardModalController";
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



@NgModule({
  declarations: [
    indexcardModalComponent,
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
    TaskModalComponent
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
    indexcardModalComponent,
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
    TaskModalComponent
  ],

  providers: [
    AlumnniModalController,
    indexcardModalController,
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
    ShowFilesModalController
  ],

  bootstrap: []
})
export class ModalsModule {}