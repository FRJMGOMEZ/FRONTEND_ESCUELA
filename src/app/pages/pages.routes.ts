import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/projects.component';
import { UsersComponent } from './users/users.component';
import { LoginGuard } from '../guards/admin.guard';
import { ProjectComponent } from './proyects/project/project.component';
import { DayComponent } from './calendar/day/day.component';
import { AddressBookComponent } from './addressBook/addressBook.component';
import { FacilitiesComponent } from './facilities/facilities.component';

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
        path: "addressBook/:item",
        component: AddressBookComponent,
        data: { title: "ADDRESSBOOK", description: "AddressBook" }
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
        path: "day/:calendarId/:day",
        component: DayComponent,
        data: { title: "DAY", description: "Day" }
      },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  }
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);