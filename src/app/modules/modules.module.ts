import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import {AuthenticationModule} from "./authentication/authentication.module";
import {AuthenticationRoutingModule} from "./authentication/authentication-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AuthenticationModule,
    AuthenticationRoutingModule
  ]
})
export class ModulesModule { }
