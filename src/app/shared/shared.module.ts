import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProvidersModule } from "../providers/providers.module";

import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations: [
        SidebarComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ProvidersModule],

    exports: [
        SidebarComponent
    ],

    providers: [],

    bootstrap: []
})
export class SharedModule { }