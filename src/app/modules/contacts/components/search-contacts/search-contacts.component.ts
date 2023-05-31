import { Component } from '@angular/core';

@Component({
  selector: 'app-search-contacts',
  templateUrl: './search-contacts.component.html',
  styleUrls: ['./search-contacts.component.scss']
})
export class SearchContactsComponent {

  dropdownIsOpen:boolean= false;
  searchActive(){
    this.dropdownIsOpen= !this.dropdownIsOpen;
  }
}
