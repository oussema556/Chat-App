import { Component, Input } from '@angular/core';
import {BtnModel} from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input('contact') contact: any;

  unfriendBtn : BtnModel ={
    style: "red",
    content: "Unfriend",
    isDisabled: false,
  }

  blockBtn: BtnModel ={
    style: "red-outline",
    content: "Block",
    isDisabled: false,
  }

}
