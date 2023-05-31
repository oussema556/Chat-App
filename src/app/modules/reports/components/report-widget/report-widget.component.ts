import {Component, Input} from '@angular/core';
import {UserModel} from "../../../../shared/models/user.model";

export  interface ReportModel{
  id:string,
  title: string,
  description: string,
  user: UserModel;
  createdAt: Date;
}
@Component({
  selector: 'app-report-widget',
  templateUrl: './report-widget.component.html',
  styleUrls: ['./report-widget.component.scss']
})
export class ReportWidgetComponent {
  @Input('report') report!: ReportModel;
}
