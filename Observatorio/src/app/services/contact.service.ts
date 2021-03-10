import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsList:Contact[];
  private url:string;

  constructor(private _http: HttpClient) {
    this.contactsList = new Array<Contact>();
    this.url = environment.api.url;
   }
   getContactsList():Observable<Contact[]>{
     return this._http.get<Contact[]>(`${this.url}/contactos`);
   }

  searchByKeywords(keywords: string): Observable<Contact[]> {
    return this._http.get<Contact[]>(`${this.url}/contactos?${keywords}`);
  }
}
