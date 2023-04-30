import { Component } from '@angular/core';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'chat-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {

  protected readonly faChevronDown = faChevronDown;
}
