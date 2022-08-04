import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria, New } from '../models/New';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsList: New[];

  private url: string;

  constructor(private http: HttpClient) {
    this.newsList = new Array<New>();
    this.url = environment.NewsApi.url;
  }

  getNewsListSize(categoryFilter: string, 
                  searchParams = ''): Observable<any> {
    return this.http.get(`${this.url}/news/count?${categoryFilter}${searchParams}`);
  }

  getNewsList(sort = '',
              categoryFilter = '', 
              searchParams = '', 
              start = 0, 
              limit = 4): Observable<New[]> {
    return this.http.get<New[]>(
      `${this.url}/news?${categoryFilter}${searchParams}_start=${start}&_limit=${limit}&_sort=${sort}`
    );
  }

  getRecentNewsList(sort = '', limit = 4): Observable<New[]> {
    return this.http.get<New[]>(`${this.url}/news?_sort=${sort}&_limit=${limit}`);
  }

  getNewsById(id: string): Observable<New> {
    return this.http.get<New>(`${this.url}/news/${id}`);
  }

  // if limit === 0 returns all the elements
  getEnabledCategories(limit = 0): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      `${this.url}/categories${limit ? '?_limit=' : ''}${limit || ''}`
    );
  }

  // retorna un observable de un arreglo de posts;
  searchByKeywords(keywords: string): Observable<New[]> {
    return this.http.get<New[]>(`${this.url}/news?${keywords}`);
  }


}
