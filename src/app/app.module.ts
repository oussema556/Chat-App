import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModulesModule} from "./modules/modules.module";
import {ModulesRoutingModule} from "./modules/modules-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReportsRoutingModule } from './modules/reports/reports-routing.module';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {SharedModule} from "./shared/shared.module";
import {TokenInterceptorService} from "./core/interceptors/token-interceptor.service";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModulesModule,
        ModulesRoutingModule,
        HttpClientModule,
        ReportsRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
