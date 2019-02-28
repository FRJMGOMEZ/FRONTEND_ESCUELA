import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import localeEs from "@angular/common/locales/Es";
registerLocaleData(localeEs);

import { AppComponent } from './app.component';

import { APPROUTES } from './app.routes';

import { RegisterComponent } from './login/register/register.component';

import { PagesModule } from './pages/pages.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    APPROUTES,
    PagesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue:'es-ES'}],
  bootstrap: [AppComponent],
})

export class AppModule { }

