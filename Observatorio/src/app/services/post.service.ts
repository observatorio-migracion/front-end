import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { Post } from '../models/Post';
import { IPostInfo, PostInfo } from '../models/PostInfo';


import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsListInfo: PostInfo[];
  private postsList: Post[];
  private categories: string[];

  private url:string = "https://potion-api.now.sh/table?id=";
  private tableId: string = "d7cf24c5bcf5458da1e3e954bfbcb83e";
  constructor(private _http: HttpClient) {
    this.postsListInfo = new Array<PostInfo>();

    // this.postsListInfo.push(new PostInfo("1", "titulo del post", "jose urena", new Date(), ["Naturalización", "Migración", "Eduación"]));
    // this.postsListInfo.push(new PostInfo("2", "titulo del post", "eduardo ayales", new Date(), ["Naturalización", "Migración", "Eduación"]));
    // this.postsListInfo.push(new PostInfo("3", "titulo del post", "jose urena", new Date(), ["Naturalización", "Eduación"]));
    // this.postsListInfo.push(new PostInfo("4", "titulo del post", "eduardo ayales", new Date(), ["Naturalización", "Migración", "Eduación"]));
    // this.postsListInfo.push(new PostInfo("5", "titulo del post", "jose urena", new Date(), ["Migración", "Eduación"]));
    // this.postsListInfo.push(new PostInfo("6","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("7","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("8","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("9","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("10","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("11","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("12","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("13","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("14","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("15","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("16","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("17","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("18","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("19","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("20","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("21","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("22","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("23","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("24","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    // this.postsListInfo.push(new PostInfo("25","titulo del post","jose urena",new Date(),["Migración","Eduación"]));


    this.categories = [];
    this.categories.push('Migración');
    this.categories.push('Naturalización');
    this.categories.push('Eduación');

    this.postsList = new Array<Post>();
    // for (let info of this.postsListInfo) {
    //   this.postsList.push(new Post(info, `<h1>${info.title}<h1>`));
    // }
    this.loadPostIdList();
  }
  loadPostIdList(){
    
    // fetch(`${this.url}${this.tableId}`)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log('from service: ',json);
    //     this.postsListInfo = json;
    //   })
      const items = this._http.get<IPostInfo[]>(`${this.url}${this.tableId}`).subscribe( (res:IPostInfo[])=>{
        res.filter( (item:IPostInfo)=>{return item.fields.Publicado}  )
            .map( (post:IPostInfo)=>{
              this.postsListInfo.push( new PostInfo(post.fields, post.id, post.created, post.last_edited) );
            })
      })
      
 }
//  getPostList(): Observable<PostInfo[]> {
//   return of(this.postsListInfo);
//  }
  getPostList(): PostInfo[]{
  //  const items = this._http.get<PostInfo[]>(`${this.url}${this.tableId}`);
  //  console.log('from service: ', items);
  //  return items;
    return this.postsListInfo;
  }

  deletePost(id: string): void {
    const index = this.postsListInfo.findIndex((value, index) => value.id === id);
    console.log(index);
    this.postsListInfo.splice(index, 1);
  }
  getCategories(): string[] {
    return this.categories;
  }

  addPost(postInfo: PostInfo): void {
    const content = '<h1>hello</h1>';
    const post = new Post(postInfo, content);
    // :'(
  }

  async getPostById(id:string | null):Promise<string>{
    let contentHTML = '';
    await fetch(`https://potion-api.now.sh/html?id=${id}`)
      .then(res => res.text() ).
      then( text => {
        contentHTML = text;
      })
      .catch( err=>{
        console.log(err);
      })
    return contentHTML;
  }
}
