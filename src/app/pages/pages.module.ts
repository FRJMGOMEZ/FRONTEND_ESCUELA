import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import{ScrollingModule} from '@angular/cdk/scrolling';

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
import { AlbumsComponent } from './manager/overview/albums/albums.component';
import { IncomesComponent } from './manager/incomes/incomes.component';
import { TracksComponent } from './manager/overview/tracks/tracks.component';
import { PaymentsComponent } from './manager/payments/payments.component';
import { ArtistComponent } from './manager/overview/artist/artist.component';
import { NotLiquidatedComponent } from './manager/incomes/not-liquidated/not-liquidated.component';
import { LiquidatedComponent } from './manager/incomes/liquidated/liquidated.component';
import { OverviewComponent } from './manager/overview/overview.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyComponent } from './company/company.component';
import { IncomesChartComponent } from './company/incomes-chart/incomes-chart.component';
import { PaymentsChartComponent } from './company/payments-chart/payments-chart.component';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VisitorsComponent } from '../visitors/visitors.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProjectRoleDirective } from '../directives/project-role.directive';


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
    AlbumsComponent,
    TracksComponent,
    PaymentsComponent,
    IncomesComponent,
    PaymentsComponent,
    ArtistComponent,
    NotLiquidatedComponent,
    LiquidatedComponent,
    CompanyComponent,
    OverviewComponent,
    IncomesChartComponent,
    PaymentsChartComponent,
    VisitorsComponent
  ],
  imports: [
    PAGESROUTES,
    CommonModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDatepickerModule, 
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    PipesModule,
    ProjectRoleDirective
  ],
  exports: [],
  bootstrap: [],
  entryComponents:[EventComponent]
})
export class PagesModule {}