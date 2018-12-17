import { NgModule } from "@angular/core";


import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

/// Services
import { UserServices } from "./user.service";
import { UploadFilesServices } from './upload-files.service';
import { SubjectServices } from "./subject.service";
import { ProjectServices } from "./project.service";
import { IndexCardServices } from './indexCard.service';
import { ProfessorsServices } from './professor.service';
import { ChatServices } from './chat.service';
import { AlumniServices } from './alumni.service';
import { ClassesServices } from './classes.service';
import { MessagesService } from './messages.service';
import { CalendarService } from './calendar.service';
import { FacilitiesService } from './facilities.service';
import { EventsService } from './events.service';



@NgModule({
    declarations: [],
    imports: [HttpModule, HttpClientModule],

    providers: [
       UserServices,
       UploadFilesServices,
       SubjectServices,
       ProjectServices,
       IndexCardServices,
       ProfessorsServices,
       ChatServices,
       AlumniServices,
       ClassesServices,
       MessagesService,
       CalendarService,
       FacilitiesService,
       EventsService
    ],

    exports: [],

    bootstrap: []
})
export class ProvidersModule { }