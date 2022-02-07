import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private activitiesList:Activity[];

  private url: string;

  constructor(private _http: HttpClient) {
    this.activitiesList = new Array<Activity>();
    this.url = environment.api.url;
  }

  getActivitiesList(limit: number = 4): Observable<Activity[]> {
    return this._http.get<Activity[]>(`${this.url}/eventos?_limit=${limit}`);
  }
}
