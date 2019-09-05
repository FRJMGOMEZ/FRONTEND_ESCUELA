import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProvidersModule } from "../providers/providers.module";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { CalendarComponent } from './calendar/calendar.component';
import { PipesModule } from '../pipes/pipes.module';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
    declarations: [
        SidebarComponent,
        CalendarComponent,
        LineChartComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        PipesModule],

    exports: [
        SidebarComponent,
        CalendarComponent,
        LineChartComponent
    ],

    providers: [],

    bootstrap: []
})
export class SharedModule { }