import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReportService} from "../../services/report.service";
import {CreateReportModel} from "../../models/create-report.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent {
  reportForm= new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
  });
constructor(private reportService: ReportService,private router:Router) {
}
  createReport() {
    let report: CreateReportModel= {
      title: this.reportForm.get('title')?.value,
      description: this.reportForm.get('description')?.value,
    };
    this.reportService.createReport(report).subscribe(
      res=>{
        this.router.navigateByUrl('/reports');
      } ,
      err=>{
        console.log(err)
      }
    )
  }
}
