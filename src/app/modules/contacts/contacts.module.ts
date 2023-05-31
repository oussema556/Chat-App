import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { SearchContactsComponent } from './components/search-contacts/search-contacts.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ContactsListComponent,
    SearchContactsComponent,
    ContactCardComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ContactsModule { }
