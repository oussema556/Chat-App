import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import {AuthenticationModule} from "./authentication/authentication.module";
import {AuthenticationRoutingModule} from "./authentication/authentication-routing.module";
import { ChatModule } from './chat/chat.module';
import { ChatRoutingModule } from './chat/chat-routing.module';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsRoutingModule } from './contacts/contacts-routing.module';
import { ReportsModule } from './reports/reports.module';
import { ReportsRoutingModule } from './reports/reports-routing.module';
import { ReportsPageComponent } from './reports/containers/reports-page/reports-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
    ChatModule,
    ChatRoutingModule,
    ContactsModule,
    ContactsRoutingModule,
    ReportsModule,
    ReportsRoutingModule,
  ],
})
export class ModulesModule { }
