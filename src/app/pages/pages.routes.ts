import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MainProjectsComponent } from './projects/mainProjects.component';
import { UsersComponent } from './users/users.component';
import { LoginGuard } from '../guards/login.guard';
import { DayComponent } from './calendar/day/day.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SubjectComponent } from './addressBook/subject/subject.component';
import { ProfessorComponent } from './addressBook/professor/professor.component';
import { AlumniComponent } from './addressBook/alumni/alumni.component';
import { ProjectComponent } from './projects/project/project.component';

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      
      {path: "dashboard",component: DashboardComponent},

      {path: "profile",component: ProfileComponent},

      {path: 'projects',component: MainProjectsComponent,
        children: [
          { path: ':id', component: ProjectComponent}
        ]},

      {path: "addressBook/subjects",component: SubjectComponent}, 
      {path: "addressBook/professors",component: ProfessorComponent}, 
      {path: "addressBook/alumnis",component: AlumniComponent}, 

      {path: "users",component: UsersComponent},

      {path: "facilities",component: FacilitiesComponent,},

      { path: 'day', component: DayComponent },
      { path: 'day/:weekId/:dayId', component: DayComponent},
     
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);