import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {UserModel} from "../../../../shared/models/user.model";

@Component({
  selector: 'app-search-contacts',
  templateUrl: './search-contacts.component.html',
  styleUrls: ['./search-contacts.component.scss']
})
export class SearchContactsComponent implements OnInit, OnChanges{

  dropdownIsOpen:boolean= false;
  searchActive(){
    this.dropdownIsOpen= !this.dropdownIsOpen;
  }

  constructor(private contactService: ContactService) {
  }
  ngOnInit(): void {
  }
  searchResult: UserModel[] =[];
  searchContacts(event:any){
    this.contactService.searchUsers(event.target.value).subscribe(
      (res:any)=>{
        this.searchResult= res.users;
        console.log(this.searchResult)
      },err=>{
        console.log(err);
      }
    )
  }

  addFriend(friendId: string) {
    this.contactService.addFriend(friendId).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
