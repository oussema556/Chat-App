import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateReportModel} from "../models/create-report.model";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  createReport(report: CreateReportModel) {
    return this.http.post(`${environment.API_URL}/appReport/createappreport`,report);
  }
  getAppReports(){
    return this.http.get(`${environment.API_URL}/appReport/getappreports`);
  }
}
