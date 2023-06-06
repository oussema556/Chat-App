import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportWidgetComponent } from './components/report-widget/report-widget.component';
import { ReportPageComponent } from './containers/report-page/report-page.component';
import { ReportsPageComponent } from './containers/reports-page/reports-page.component';
import {SharedModule} from "../../shared/shared.module";
import { CreateReportComponent } from './containers/create-report/create-report.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [

    ReportWidgetComponent,
       ReportPageComponent,
       ReportsPageComponent,
       CreateReportComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    ReportsPageComponent,
  ]
})
export class ReportsModule { }
