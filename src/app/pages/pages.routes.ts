import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/projects.component';
import { AlumniComponent } from './manteinance/alumni/alumni.component';
import { ProfessorComponent } from './manteinance/professor/professor.component';
import { SubjectComponent } from './manteinance/subject/subject.component';
import { UsersComponent } from './manteinance/users/users.component';
import { LoginGuard } from '../guards/admin.guard';
import { ProjectComponent } from './proyects/project/project.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './calendar/day/day.component';

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
        component: ProyectsComponent,
        data: { title: "PROYECTS", description: "Proyects" }
      },
      {
        path: "project/:id",
        component: ProjectComponent,
        data: { title: "PROYECT", description: "Proyect" }
      },
      {
        path: "alumniM",
        component: AlumniComponent,
        data: { title: "ALUMNI M", description: "Alumni manteinance" }
      },
      {
        path: "professorM",
        component: ProfessorComponent,
        data: { title: "PROFESOR M", description: "Professor manteinance" }
      },
      {
        path: "subjectM",
        component: SubjectComponent,
        data: { title: "SUBJECT", description: "Subkect manteinance" }
      },
      {
        path: "userM",
        component: UsersComponent,
        data: { title: "USER", description: "User manteinance" }
      },
      {
        path: "day/:calendarId/:day",
        component: DayComponent,
        data: { title: "DAY", description: "Day" }
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);