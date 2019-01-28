import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProvidersModule } from "../providers/providers.module";

import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [
        HeaderComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ProvidersModule],

    exports: [
        HeaderComponent
    ],

    providers: [],

    bootstrap: []
})
export class SharedModule { }