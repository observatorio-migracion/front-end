import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Categoria, Post } from '../models/Post';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsList: Post[];
  private url: string;

  constructor(private _http: HttpClient) {
    this.postsList = new Array<Post>();
    this.url = environment.api.url;
  }

  getPostsListSize(filter: string): Observable<any> {
    return this._http.get(`${this.url}/posts/count?${filter}`);
  }

  getPostList(start: number | undefined, limit: number | undefined, filter: string = ''): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?${filter}_start=${start}&_limit=${limit}`);
  }

  getRecentPostList(sort: string = '', limit: number = 4): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?_sort=${sort}&_limit=${limit}`);
  }
  getActivitiesList(limit: number = 4): Observable<Activity[]> {
    return this._http.get<Activity[]>(`${this.url}/eventos?_limit=${limit}`);
  }
  getPostById(id: number): Observable<Post> {
    return this._http.get<Post>(`${this.url}/posts/${id}`);
  }
  //if limit === 0 returns all the elements
  getEnabledCategories(limit: number = 0): Observable<Categoria[]> {
    return this._http.get<Categoria[]>(`${this.url}/categories${(limit) ? "?_limit=" : ""}${(limit)?limit:""}`);
  }

  //retorna un observable de un arreglo de posts;
  searchByKeywords(keywords: string): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?${keywords}`);
  }
}