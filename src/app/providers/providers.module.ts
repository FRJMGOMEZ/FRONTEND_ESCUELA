import { NgModule } from "@angular/core";


import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

/// Services
import { UserServices } from "./user.service";
import { UploadFilesServices } from './upload-files.service';
import { SubjectServices } from "./subject.service";
import { ProjectServices } from "./project.service";
import { indexcardServices } from './indexcard.service';
import { ProfessorsServices } from './professor.service';
import { ChatServices } from './chat.service';
import { AlumniServices } from './alumni.service';
import { CalendarService } from './calendar.service';
import { FacilitiesService } from './facilities.service';
import { SwalService } from './swal.service';
import { ErrorHandlerService } from './error-handler.service';
import { DashboardService } from './dashboard.service';

@NgModule({
    declarations: [],
    imports: [HttpModule, HttpClientModule],

    providers: [
       UserServices,
       UploadFilesServices,
       SubjectServices,
       ProjectServices,
       indexcardServices,
       ProfessorsServices,
       ChatServices,
       AlumniServices,
       CalendarService,
       FacilitiesService,
       SwalService,
       ErrorHandlerService,
       DashboardService
    ],

    exports: [],

    bootstrap: []
})
export class ProvidersModule { }