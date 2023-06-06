import {Component, OnInit} from '@angular/core';
import {BtnModel} from "../../../../shared/components/button/button.component";
import {ReportModel} from "../../components/report-widget/report-widget.component";
import {ReportService} from "../../services/report.service";

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit{
  reportBtn: BtnModel={
    content: 'Report a problem',
    style: 'red',
    isDisabled: false,
  }

  appReports: ReportModel[]=[];

  constructor(private reportService: ReportService) {
  }



  getAppReports(){
    this.reportService.getAppReports().subscribe(
      (res:ReportModel[])=>{
        this.appReports= res;
      },
      err=>{
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.getAppReports();
  }
}
