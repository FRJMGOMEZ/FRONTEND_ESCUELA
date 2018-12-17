import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProvidersModule } from "../providers/providers.module";

import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
    ],

    imports: [
        CommonModule,
        RouterModule,
        ProvidersModule],

    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],

    providers: [],

    bootstrap: []
})
export class SharedModule { }