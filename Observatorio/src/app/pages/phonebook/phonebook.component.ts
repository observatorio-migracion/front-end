import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  public contactList:Contact[];
  constructor() {
    this.contactList = new Array<Contact>();
  }

  ngOnInit(): void {
    this.loadContacts();
  }
  loadContacts(){
    // this.contactList.push(new Contact());
    // this.contactList.push(new Contact());
    // this.contactList.push(new Contact());
    // this.contactList.push(new Contact());
    // this.contactList.push(new Contact());
  }
}
