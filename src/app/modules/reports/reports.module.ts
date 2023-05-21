import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportWidgetComponent } from './components/report-widget/report-widget.component';
import { ReportPageComponent } from './containers/report-page/report-page.component';
import { ReportsPageComponent } from './containers/reports-page/reports-page.component';



@NgModule({
  declarations: [
  
    ReportWidgetComponent,
       ReportPageComponent,
       ReportsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReportsPageComponent,
  ]
})
export class ReportsModule { }
