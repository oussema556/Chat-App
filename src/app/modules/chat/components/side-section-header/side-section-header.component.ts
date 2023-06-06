import {Component, Input, OnInit} from '@angular/core';
import {ContactService} from "../../../contacts/services/contact.service";
import {UserModel} from "../../../../shared/models/user.model";

@Component({
  selector: 'chat-side-section-header',
  templateUrl: './side-section-header.component.html',
  styleUrls: ['./side-section-header.component.scss']
})
export class SideSectionHeaderComponent implements OnInit{

  user: UserModel;
  @Input('sectionName') sectionName: String;
  constructor(private  contactService: ContactService) {
  }
  ngOnInit(): void {
    this.contactService.getUser(localStorage.getItem('id')).subscribe(
      res=>{
        this.user=res;
      }
    )
  }
}
