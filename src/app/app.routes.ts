import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './login/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login/login.component';


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
  { path: "**", component: PageNotFoundComponent }
];


export const APPROUTES = RouterModule.forRoot(ROUTES, {initialNavigation: 'enabled',paramsInheritanceStrategy: 'always',useHash: true });