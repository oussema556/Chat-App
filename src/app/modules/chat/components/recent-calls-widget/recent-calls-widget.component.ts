import {Component, Input} from '@angular/core';
import {RecentCallModel} from "../../models/recent-call.model";



@Component({
  selector: 'app-recent-calls-widget',
  templateUrl: './recent-calls-widget.component.html',
  styleUrls: ['./recent-calls-widget.component.scss']
})
export class RecentCallsWidgetComponent {
  @Input('recentCall') recentCall: RecentCallModel;
}
