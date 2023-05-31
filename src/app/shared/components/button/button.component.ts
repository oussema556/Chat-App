import {Component, Input} from '@angular/core';

export interface BtnModel {
  content: String;
  style: String;
  isDisabled?: boolean;
}
@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input('button') btn!: BtnModel;
}
