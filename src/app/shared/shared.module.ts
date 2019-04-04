import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProvidersModule } from "../providers/providers.module";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { CalendarComponent } from './calendar/calendar.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    declarations: [
        SidebarComponent,
        CalendarComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ProvidersModule,
        PipesModule],

    exports: [
        SidebarComponent,
        CalendarComponent
    ],

    providers: [],

    bootstrap: []
})
export class SharedModule { }