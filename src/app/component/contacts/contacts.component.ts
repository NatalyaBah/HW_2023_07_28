import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  status = true;
  name = "";
  phone = "";
  massege = "";
  showContacts(){
    this.status = !this.status;
  }
}
