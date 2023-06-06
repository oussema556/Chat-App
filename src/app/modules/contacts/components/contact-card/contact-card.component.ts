import {Component, Input, OnInit} from '@angular/core';
import {BtnModel} from "../../../../shared/components/button/button.component";
import {ContactService} from "../../services/contact.service";
import {UserModel} from "../../../../shared/models/user.model";

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit{

  @Input('contact') contact: any;

  constructor(private contactsService: ContactService) {
  }
  addFriend : BtnModel ={
    style: "red",
    content: "Accept",
    isDisabled: false,
  }
  declineFriend : BtnModel ={
    style: "red",
    content: "Decline",
    isDisabled: false,
  }
  unblockBtn : BtnModel ={
    style: "red",
    content: "Unblock",
    isDisabled: false,
  }

  user: UserModel;

  blockBtn: BtnModel ={
    style: "red-outline",
    content: "Block",
    isDisabled: false,
  }

  ngOnInit(): void {
    this.contactsService.getUser(this.contact.friend).subscribe(
      res=>{
        this.user=res;
      }
    )
  }


  acceptFriend(){
    this.contactsService.acceptFriend(this.contact.friend).subscribe(
      res=>{
        console.log("ggg")
      },err=>{
        console.log(err)
      }
    )
  }

  decline(){
    return this.contactsService.declineFriend(this.contact.friend).subscribe(
      res=>{
        console.log("done");
      },err=>{
        console.log(err)
      }
    )
  }

  blockFriend(){
    this.contactsService.blockFriend(this.contact.friend).subscribe(
      res=>{
        console.log("Done")
      },
      err =>{
        console.log(err);
      }
    )
  }

  unblockFriend() {
    return this.contactsService.unblockFriend(this.contact.friend).subscribe(
      res=>{
        console.log("Unblocked")
      },err=>{
        console.log(err)
      }
    )
  }
}
