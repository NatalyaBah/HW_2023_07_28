import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
