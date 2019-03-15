import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProvidersModule } from "../providers/providers.module";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
    declarations: [
        SidebarComponent,
        CalendarComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ProvidersModule],

    exports: [
        SidebarComponent,
        CalendarComponent
    ],

    providers: [],

    bootstrap: []
})
export class SharedModule { }