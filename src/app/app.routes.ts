import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './guards/login.guard';


const ROUTES: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { title: "LOGIN", description: "Login" }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "REGISTER", description: "Register" }
  },
  {path:'',
  component:PagesComponent,
    canActivate: [LoginGuard],
    loadChildren:'./pages/pages.module#PagesModule'
},
  { path: "**", component: PageNotFoundComponent }
];


export const APPROUTES = RouterModule.forRoot(ROUTES, {initialNavigation: 'enabled',paramsInheritanceStrategy: 'always',useHash: true});