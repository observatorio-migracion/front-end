import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsList: Contact[];

  private url: string;

  constructor(private http: HttpClient) {
    this.contactsList = new Array<Contact>();
    this.url = environment.api.url;
  }

  getContactsListSize(keywords: string): Observable<number> {
    return this.http.get<number>(`${this.url}/contactos/count?${keywords}`);
  }

  getContactsList(keywords: string, order = '', start = 0, limit = 4): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      `${this.url}/contactos?${keywords}&_sort=${order}&_limit=${limit}&_start=${start}`
    );
  }
}
