/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria, Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsList: Post[];

  private url: string;

  constructor(private http: HttpClient) {
    this.postsList = new Array<Post>();
    this.url = environment.api.url;
  }

  getPostsListSize(categoryFilter: string, searchParams = ''): Observable<any> {
    return this.http.get(`${this.url}/posts/count?${categoryFilter}${searchParams}`);
  }

  getPostList(categoryFilter = '', searchParams = '', start = 0, limit = 4): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts?${categoryFilter}${searchParams}_start=${start}&_limit=${limit}`);
  }

  getRecentPostList(sort = '', limit = 4): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts?_sort=${sort}&_limit=${limit}`);
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/posts/${id}`);
  }

  // if limit === 0 returns all the elements
  getEnabledCategories(limit = 0): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.url}/categories${(limit) ? '?_limit=' : ''}${(limit) || ''}`);
  }

  // retorna un observable de un arreglo de posts;
  searchByKeywords(keywords: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts?${keywords}`);
  }
}
