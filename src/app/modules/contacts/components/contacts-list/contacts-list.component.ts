import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {UserModel} from "../../../../shared/models/user.model";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit{
  userFriends=[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.contactService.getUser(localStorage.getItem('id')).subscribe(
      (res: UserModel)=>{
        console.log(res)
        this.userFriends=res.friends;
        },
      err=>{
        console.log(err);
      }
    )
  }
}
