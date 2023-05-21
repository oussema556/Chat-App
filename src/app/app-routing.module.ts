import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './modules/contacts/components/contacts-list/contacts-list.component';
import { ReportsPageComponent } from './modules/reports/containers/reports-page/reports-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'contacts-list',
    pathMatch: 'full',
  },
  {
    path: 'contacts-list',
    component: ContactsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
