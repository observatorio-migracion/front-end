import { Component, OnInit, HostListener } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from '../../services/contact.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface NumberInfo{
  text : string;
  number : string;
}

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  public contactList: Contact[];

  public contactSelected: Contact;

  public searchQuery: string;

  public readonly contactLimit;

  public contactStart;

  public contactOrder;

  public contactListSize;

  public searchParams;

  public urlSafe: SafeResourceUrl;

  public scrolled: boolean;

  constructor(private contactService: ContactService, public sanitizer: DomSanitizer) {
    this.contactList = new Array<Contact>();
    this.contactSelected = new Contact('', '', '', '', '', '', '', '', '', '', '', '');
    this.searchQuery = '';
    this.contactLimit = 4;
    this.contactStart = 0;
    this.contactOrder = 'titulo:asc';
    this.contactListSize = 0;
    this.searchParams = '';
    this.urlSafe = '';
    this.scrolled = false;
  }

  ngOnInit(): void {
    this.contactService.getContactsListSize(this.searchParams).subscribe((size) => {
      this.contactListSize = size;
    });
    this.loadContacts();
  }

  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY >= 150;
  }

  goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  onScroll() {
    if (this.contactStart <= this.contactListSize) {
      this.contactStart += this.contactLimit;
      this.loadContacts();
    }
  }

  loadContacts() {
    this.contactService.getContactsListSize(this.searchParams).subscribe((size) => {
      this.contactListSize = size;
    });
    this.contactService
      .getContactsList(this.searchParams, this.contactOrder, this.contactStart, this.contactLimit)
      .subscribe((contacts: Contact[]) => {
        this.contactList.push(...contacts);
        this.splitNumberContact();
      });
  }

  splitNumberContact() {
    let tempString : string[];
    let tempSplit : string[];
    let cont : number = 0;
    let numInfTemp : NumberInfo = {text:"",number:""};
    for (const item of this.contactList) {
      //console.log(item);
      tempString = item.numero.split('/');
      item.numberList = new Array(tempString.length);
      cont = 0;
      for(const num of tempString){
        if(num.includes(':')){
          tempSplit = num.split(':');
          item.numberList![cont] = {text : tempSplit[0] + ": ", number : tempSplit[1]};
          cont++;
          
        }else{
          item.numberList![cont] = {text : "", number : num};
          cont++;
        }
      }
    }
  }

  showContact(contact: Contact) {
    this.contactSelected = contact;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.contactSelected.gps);
  }

  renderFirstLetter(contact: Contact, prev: Contact, index: number) {
    if (index > 0 && contact.titulo && prev.titulo) {
      const a = contact.titulo[0];
      const b = prev.titulo[0];
      if (a === b) {
        return false;
      }
    }
    return true;
  }

  loadContactListSearch(): void {
    if (this.searchQuery) {
      this.contactList = [];
      this.searchParams = '';
      this.searchParams += `_where[_or][0][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][descripcion_contains]=${this.searchQuery}`;
      this.loadContacts();
    } else {
      this.searchParams = '';
      this.contactStart = 0;
      this.contactList = [];
      this.loadContacts();
    }
  }

  parseURL(url: string): string {
    let result = '';
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      result = `http://${url}`;
    } else {
      result = url;
    }
    return result;
  }
}
