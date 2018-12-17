import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule,Routes } from "@angular/router";



//My modules//
import { ProvidersModule } from "../providers/providers.module";
import { ModalsModule } from "../modals/modals.module";
import { PipesModule } from "../pipes/pipes.module";
import { SharedModule } from "../shared/shared.module";

import { PagesComponent } from './pages.component';

///Manteinance//
import { AlumniComponent } from './manteinance/alumni/alumni.component';
import { ProfessorComponent } from './manteinance/professor/professor.component';
import { SubjectComponent } from './manteinance/subject/subject.component';
import { UsersComponent } from './manteinance/users/users.component';

//Main pages//
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/projects.component';
import { ProjectComponent } from "./proyects/project/project.component";



//Routes//
import { PAGESROUTES } from './pages.routes';
import { ImagesComponent } from './proyects/project/images/images.component';
import { MessagesComponent } from './proyects/project/messages/messages.component';
import { FilesComponent } from './proyects/project/files/files.component';
import { CalendarComponent } from './calendar/calendar.component';

import {ScrollingModule} from  '@angular/cdk/scrolling'
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DayComponent } from './calendar/day/day.component';
import { FacilitiesComponent } from './manteinance/facilities/facilities.component'


import { AvoidCloseDirective } from '../directives/avoid-close.directive';




@NgModule({
  declarations: [
    PagesComponent,
    AlumniComponent,
    ProfessorComponent,
    SubjectComponent,
    UsersComponent,
    DashboardComponent,
    ProfileComponent,
    ProyectsComponent,
    ProjectComponent,
    ImagesComponent,
    MessagesComponent,
    FilesComponent,
    CalendarComponent,
    DayComponent,
    FacilitiesComponent,
    AvoidCloseDirective
  ],
  imports: [
    BrowserModule,
    PAGESROUTES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    ProvidersModule,
    ModalsModule,
    PipesModule,
    SharedModule,
    ScrollingModule,
    DragDropModule
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class PagesModule {}