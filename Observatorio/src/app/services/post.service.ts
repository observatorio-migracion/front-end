import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Categoria, Post } from '../models/Post';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsList: Post[];
  private url: string;
  private searchQuery = new BehaviorSubject('');
  public currentSearchQuery: Observable<string> = this.searchQuery.asObservable();

  constructor(private _http: HttpClient) {
    this.postsList = new Array<Post>();
    this.url = environment.api.url;
  }

  setSearchQuery(search: string) {
    this.searchQuery.next(search);
  }

  getPostsListSize(filter: string): Observable<any> {
    return this._http.get(`${this.url}/posts/count?${filter}`);
  }

  getPostList(start: number | undefined, limit: number | undefined, filter: string = ''): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?${filter}_start=${start}&_limit=${limit}`);
  }
  getPostById(id: number): Observable<Post> {
    return this._http.get<Post>(`${this.url}/posts/${id}`);
  }
  getEnabledCategories(): Observable<Categoria[]> {
    return this._http.get<Categoria[]>(`${this.url}/categories`);
  }

  //retorna un observable de un arreglo de posts;
  searchByKeywords(keywords: string): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?${keywords}`);
  }
}