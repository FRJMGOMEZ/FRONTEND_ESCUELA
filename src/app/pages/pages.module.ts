import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import{ScrollingModule} from '@angular/cdk/scrolling';

//My modules//
import { PipesModule } from "../pipes/pipes.module";

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
import { ManagerComponent } from './manager/manager.component';
import { AlbumsComponent } from './manager/albums/albums.component';
import { IncomesComponent } from './manager/incomes/incomes.component';
import { TracksComponent } from './manager/tracks/tracks.component';
import { PaymentsComponent } from './manager/payments/payments.component';
import { ArtistComponent } from './manager/artist/artist.component';


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
    CalendarManagerComponent,
    ManagerComponent,
    AlbumsComponent,
    TracksComponent,
    PaymentsComponent,
    IncomesComponent,
    PaymentsComponent,
    ArtistComponent
  ],
  imports: [
    PAGESROUTES,
    CommonModule,
    ScrollingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  bootstrap: [],
  entryComponents:[EventComponent]
})
export class PagesModule {}