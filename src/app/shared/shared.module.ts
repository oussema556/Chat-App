import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { NavTabComponent } from './containers/nav-tab/nav-tab.component';


@NgModule({
    declarations: [
        ButtonComponent,
        NavTabComponent
    ],
    exports: [
        ButtonComponent,
        NavTabComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }
