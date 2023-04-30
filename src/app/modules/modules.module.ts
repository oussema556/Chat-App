import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import {AuthenticationModule} from "./authentication/authentication.module";
import {AuthenticationRoutingModule} from "./authentication/authentication-routing.module";
import { ChatModule } from './chat/chat.module';
import { ChatRoutingModule } from './chat/chat-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
    ChatModule,
    ChatRoutingModule,
  ]
})
export class ModulesModule { }
