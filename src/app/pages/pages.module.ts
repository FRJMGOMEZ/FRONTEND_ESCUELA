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
    ProjectComponent       
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
        SharedModule
    ],
    exports:[
    PagesComponent,
    AlumniComponent,
    ProfessorComponent,
    SubjectComponent,
    UsersComponent,
    DashboardComponent,
    ProfileComponent,
    ProyectsComponent 
    ],

    providers: [],
    bootstrap: []
})
export class PagesModule { }