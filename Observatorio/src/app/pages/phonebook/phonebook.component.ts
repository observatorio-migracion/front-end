import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  public contactList:Contact[];
  public contactSelected:Contact;
  public searchQuery:string;
  constructor(private _contactService: ContactService) {
    this.contactList = new Array<Contact>();
    this.contactSelected = new Contact(-1, '','','','','','','','','','');
    this.searchQuery = '';
  }

  ngOnInit(): void {
    this.loadContacts();
  }
  loadContacts(){
    this._contactService.getContactsList().subscribe(
      (contacts: Contact[]) => {
        this.contactList = contacts;
        this.splitNumberContact();
      },
      err => {
        console.log(err)
      }
    );
  }

  splitNumberContact(){
    this.contactList.forEach(c => {
      c.numberList = c.numero.split(',');
    })
  }

  showContact(contact:Contact){
    this.contactSelected = contact;
    let contactNumbers: string[] = this.contactSelected.numero.split(',');
  }
  renderFirstLetter(contact:Contact, prev:Contact, index:number){
    if( index > 0 && contact.titulo && prev.titulo){
      const a = contact.titulo[0];
      const b = prev.titulo[0];
      if(a === b ){
        return false;
      }
    }
    return true;
  }

  loadContactListSearch(): void {
    if (this.searchQuery) {
      let search = '';
      search += `_where[_or][0][titulo_contains]=${this.searchQuery}&`;
      search += `_where[_or][1][descripcion_contains]=${this.searchQuery}`;
      this._contactService.searchByKeywords(search).subscribe(
        (contacts: Contact[]) => {
          this.contactList = contacts;
        },
        err => {
          console.log(err)
        }
      );
    }else if(!this.contactList.length){//TODO: Implementar esto en blog
      this.loadContacts();
    }
  }
}
