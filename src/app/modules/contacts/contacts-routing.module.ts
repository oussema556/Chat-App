import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsListComponent } from "./components/contacts-list/contacts-list.component";


const routes: Routes =[
  {
    path: 'contacts-list',
    component: ContactsListComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ContactsRoutingModule { }
