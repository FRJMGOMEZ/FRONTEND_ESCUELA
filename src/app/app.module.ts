import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import localeEs from "@angular/common/locales/Es";
import { AppComponent } from './app.component';
import { APPROUTES } from './app.routes';
import { RegisterComponent } from './login/register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login/login.component';
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { URL_SERVICES } from './config/config';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { PipesModule } from './pipes/pipes.module';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { DemoService } from './providers/demo.service';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { ModalsModule } from './modals/modals.module';
import { ProvidersModule } from './providers/providers.module';

registerLocaleData(localeEs);

const config: SocketIoConfig = { url: URL_SERVICES, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    ModalsModule,
    PipesModule,
    BrowserModule,
    APPROUTES,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    RouterTestingModule,
    SocketIoModule.forRoot(config),
    ProvidersModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' },
              { provide: LocationStrategy, useClass: HashLocationStrategy },
                DemoService],
  bootstrap: [AppComponent],
})

export class AppModule { }
