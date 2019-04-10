import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule} from "@angular/router";
import{ScrollingModule} from '@angular/cdk/scrolling';

//My modules//
import { ProvidersModule } from "../providers/providers.module";
import { ModalsModule } from "../modals/modals.module";
import { PipesModule } from "../pipes/pipes.module";
import { SharedModule } from "../shared/shared.module";

///Manteinance//
import { SubjectComponent } from './addressBook/subject/subject.component';
import { UsersComponent } from './users/users.component';
import { AlumniComponent } from "./addressBook/alumni/alumni.component";
import { ProfessorComponent } from "./addressBook/professor/professor.component";

//Main pages//
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MainProjectsComponent } from './projects/mainProjects.component';
import { ProjectComponent } from "./projects/project/project.component";


//Routes//
import { PAGESROUTES } from './pages.routes';
import { ImagesComponent } from './projects/project/images/images.component';
import { MessagesComponent } from './projects/project/messages/messages.component';
import { FilesComponent } from './projects/project/files/files.component';
import { DayComponent } from './calendar/day/day.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { EventComponent } from './calendar/day/event/event.component';
import { TasksComponent } from './projects/project/tasks/tasks.component';
import { ProjectEventsComponent } from './projects/project/project-events/project-events.component';
import { CalendarManagerComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AlumniComponent,
    ProfessorComponent,
    SubjectComponent,
    UsersComponent,
    DashboardComponent,
    ProfileComponent,
    MainProjectsComponent,
    ProjectComponent,
    ImagesComponent,
    MessagesComponent,
    FilesComponent,
    DayComponent,
    FacilitiesComponent,
    EventComponent,
    TasksComponent,
    ProjectEventsComponent,
    CalendarManagerComponent
    
  ],
  imports: [
    PAGESROUTES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ProvidersModule,
    ModalsModule,
    PipesModule,
    SharedModule,
    ScrollingModule
  ],
  exports: [],
  bootstrap: [],
  entryComponents:[EventComponent]
})
export class PagesModule {}