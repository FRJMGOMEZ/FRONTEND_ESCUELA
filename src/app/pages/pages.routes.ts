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
import { AdminGuard } from '../guards/admin.guard';
import { CalendarManagerComponent } from './calendar/calendar.component'
import { VerifyTokenGuard } from '../guards/verify-token.guard';

const pagesRoutes: Routes = [

      {
       canActivate: [VerifyTokenGuard],
       path: "dashboard",
       component: DashboardComponent
      },

      { path: "profile", component: ProfileComponent },

      {
        path: "projects",
        component: MainProjectsComponent,
        children: [{ path: ":id", component: ProjectComponent }]
      },

      {
        path: "subjects",
        canActivate: [AdminGuard],
        component: SubjectComponent
      },

      {
        path: "professors",
        canActivate: [AdminGuard],
        component: ProfessorComponent
      },

      {
        path: "alumnis",
        canActivate: [AdminGuard],
        component: AlumniComponent
      },

      { path: "users", 
         canActivate: [AdminGuard],
         component: UsersComponent },
      {
        path: "facilities",
        canActivate: [AdminGuard],
        component: FacilitiesComponent
      },
      {
        path: "calendar",
        component: CalendarManagerComponent,
        children: [{ path: ":weekId/:dayId", component: DayComponent }]
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);