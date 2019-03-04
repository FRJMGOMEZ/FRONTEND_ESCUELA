import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './proyects/projects.component';
import { UsersComponent } from './users/users.component';
import { LoginGuard } from '../guards/admin.guard';
import { ProjectComponent } from './proyects/project/project.component';
import { DayComponent } from './calendar/day/day.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SubjectComponent } from './addressBook/subject/subject.component';
import { ProfessorComponent } from './addressBook/professor/professor.component';
import { AlumniComponent } from './addressBook/alumni/alumni.component';

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    canActivate: [LoginGuard],
    
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "DASHBOARD", description: "Dashboard" }
      },
      {
        path: "profile",
        component: ProfileComponent,
        data: { title: "PROFILE", description: "Profile" }
      },
      {
        path: "projects",
        component: ProjectsComponent,
        data: { title: "PROJECTS", description: "Projects" }
      },
      {
        path: "project/:id",
        component: ProjectComponent,
        data: { title: "PROYECT", description: "Proyect" }
      },
      {
        path: "addressBook/subjects",
        component: SubjectComponent,
        data: { title: "SUBJECT", description: "Subjects" }
      }, 
      {
        path: "addressBook/professors",
        component: ProfessorComponent,
        data: { title: "PROFESSOR", description: "Professors" }
      }, 
      {
        path: "addressBook/alumnis",
        component: AlumniComponent,
        data: { title: "ALUMNIS", description: "Alumnis" }
      }, 
      {
        path: "users",
        component: UsersComponent,
        data: { title: "USER", description: "User manteinance" }
      },
      {
        path: "facilities",
        component: FacilitiesComponent,
        data: { title: "FACILITIE", description: "Facilities" }
      },
      {
        path: "day/:weekId/:day",
        component: DayComponent,
        data: { title: "DAY", description: "Day" }
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);