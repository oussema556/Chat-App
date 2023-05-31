import { Component } from '@angular/core';
import {BtnModel} from "../../../../shared/components/button/button.component";
import {ReportModel} from "../../components/report-widget/report-widget.component";

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent {
  reportBtn: BtnModel={
    content: 'Report a problem',
    style: 'red',
    isDisabled: false,
  }

  reports: ReportModel[] = Array.from({ length: 10 }, (_, index) => ({
    id: `ID${index + 1}`,
    title: `Report ${index + 1}`,
    description: `Description ${index + 1}`,
    user: {
      id: `ID${index + 1}`,
      name: `person ${index + 1}`,
    },
    createdAt: new Date(),
  }));

}
