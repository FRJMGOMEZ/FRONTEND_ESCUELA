import { NgModule } from "@angular/core";


import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

/// Services
import { UserServices } from "./user.service";
import { FilesServices } from './files.service';
import { SubjectServices } from "./subject.service";
import { ProjectServices } from "./project.service";
import { IndexcardServices } from './indexcard.service';
import { ProfessorsServices } from './professor.service';
import { ChatServices } from './chat.service';
import { AlumniServices } from './alumni.service';
import { CalendarService } from './calendar.service';
import { FacilitiesService } from './facilities.service';
import { SwalService } from './swal.service';
import { ErrorHandlerService } from './error-handler.service';
import { DashboardService } from './dashboard.service';
import { PasswordService } from './password.service';
import { ManagerService } from './manager.service';


@NgModule({
    imports: [HttpModule, HttpClientModule],

    providers: [
       UserServices,
       FilesServices,
       SubjectServices,
       ProjectServices,
       IndexcardServices,
       ProfessorsServices,
       ChatServices,
       AlumniServices,
       CalendarService,
       FacilitiesService,
       SwalService,
       ErrorHandlerService,
       DashboardService,
       PasswordService,
       ManagerService
    ],

    exports: [],

    bootstrap: []
})
export class ProvidersModule { }