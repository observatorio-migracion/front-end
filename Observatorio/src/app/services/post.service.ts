import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { Categoria, Post } from '../models/Post';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsList: Post[];
 
  private url:string = "http://localhost:1337";
  constructor(private _http: HttpClient) {
    this.postsList = new Array<Post>();
    this.getPostsListSize().subscribe( res=>{console.log('count',res)});
  }
  getPostsListSize():Observable<any>{
    return this._http.get(`${this.url}/posts/count`);
  }
  getPostList(start:number | undefined, limit:number |undefined, filter:string = ''): Observable<Post[]>{
      return this._http.get<Post[]>(`${this.url}/posts?${filter}_start=${start}&_limit=${limit}`);
  }
  getPostById(id:number):Observable<Post>{
    return this._http.get<Post>(`${this.url}/posts/${id}`);
  }
  getEnabledCategories(){
    return this._http.get<Categoria[]>(`${this.url}/categories`);
  }
}