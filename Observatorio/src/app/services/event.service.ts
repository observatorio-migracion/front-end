import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private activitiesList:Activity[];

  private url: string;

  constructor(private http: HttpClient) {
    this.activitiesList = new Array<Activity>();
    this.url = environment.api.url;
  }

  getActivitiesList(limit = 4, sort = ''): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.url}/eventos?_sort=${sort}&_limit=${limit}`);
  }
}
