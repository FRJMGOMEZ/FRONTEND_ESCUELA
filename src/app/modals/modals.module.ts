
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PipesModule } from "../pipes/pipes.module";
import { PdfViewerModule } from "ng2-pdf-viewer";


import { IndexCardModalComponent } from './index-card-modal/index-card-modal.component';
import { AlumniModalComponent } from './alumni-modal/alumni-modal.component';
import { ProfessorModalComponent } from './professor-modal/professor-modal.component';
import { SubjectModalComponent } from './subject-modal/subject-modal.component';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { UploadFilesModalComponent } from './upload-files-modal/upload-files-modal.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { PasswordComponent } from "./password/password.component";
import { AdminComponent } from "./admin/admin.component";
import { FilesModalComponent } from "./files-modal/files-modal.component";
import { ImgModalComponent } from "./img-modal/img-modal.component";
import { EventsModalComponent } from "./events-modal/events-modal.component";

import { AlumnniModalController } from './alumni-modal/alumniModal.controller';
import { ProfessorModalController } from "./professor-modal/professorModalController";
import { IndexCardModalController } from "./index-card-modal/indexCardModalController";
import { ProjectModalController } from './project-modal/projectModalController';
import { SubjectModalController } from './subject-modal/subjectModalController';
import { UploadFilesModalController } from "./upload-files-modal/uploadFilesModalController";
import { UserModalController } from "./users-modal/userModalController";
import { PasswordModalController } from "./password/passwordModalController.service";
import { AdminModalController } from "./admin/adminModal.controller";
import { ImgModalController } from './img-modal/imgModal.controller';
import { FilesModalController } from './files-modal/filesModal.controller';
import { EventModalController } from './events-modal/eventsModal.controller';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';
import { CalendarModalController } from './calendar-modal/calendar-modal.controller';






@NgModule({
  declarations: [
    IndexCardModalComponent,
    ProjectModalComponent,
    AlumniModalComponent,
    ProfessorModalComponent,
    SubjectModalComponent,
    UsersModalComponent,
    UploadFilesModalComponent,
    PasswordComponent,
    AdminComponent,
    ImgModalComponent,
    FilesModalComponent,
    EventsModalComponent,
    CalendarModalComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule,
    PdfViewerModule
  ],

  exports: [
    IndexCardModalComponent,
    ProjectModalComponent,
    AlumniModalComponent,
    ProfessorModalComponent,
    SubjectModalComponent,
    UsersModalComponent,
    UploadFilesModalComponent,
    PasswordComponent,
    AdminComponent,
    ImgModalComponent,
    FilesModalComponent,
    EventsModalComponent,
    CalendarModalComponent
  ],

  providers: [
    AlumnniModalController,
    IndexCardModalController,
    ProfessorModalController,
    ProjectModalController,
    SubjectModalController,
    UploadFilesModalController,
    UserModalController,
    PasswordModalController,
    AdminModalController,
    ImgModalController,
    FilesModalController,
    EventModalController,
    CalendarModalController
  ],

  bootstrap: []
})
export class ModalsModule {}