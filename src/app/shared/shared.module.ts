import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from "./sidebar/sidebar.component";
import { CalendarComponent } from './calendar/calendar.component';
import { PipesModule } from '../pipes/pipes.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RoleDirective } from '../directives/role.directive';



@NgModule({
    declarations: [
        SidebarComponent,
        CalendarComponent,
        LineChartComponent,
        RoleDirective
    ],

    imports: [
        CommonModule,
        RouterModule,
        PipesModule
    ],

    exports: [
        SidebarComponent,
        CalendarComponent,
        LineChartComponent,
        RoleDirective
    ],

    providers: [],

    bootstrap: []
})
export class SharedModule { }