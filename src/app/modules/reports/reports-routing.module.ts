import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsPageComponent } from './containers/reports-page/reports-page.component';
import {CreateReportComponent} from "./containers/create-report/create-report.component";
import {ReportPageComponent} from "./containers/report-page/report-page.component";

const routes: Routes = [
  {
    path: 'reports',
    component: ReportsPageComponent,
  },
  {
    path: 'create-report',
    component: CreateReportComponent,
  },
  {
    path: 'report/:id',
    component: ReportPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
