import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostInfo } from '../models/PostInfo';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private postsList:PostInfo[];
  constructor() {
    this.postsList = new Array<PostInfo>();

    this.postsList.push(new PostInfo("1","titulo del post","jose urena",new Date(), ["Naturalización", "Migración","Eduación"]));
    this.postsList.push(new PostInfo("2","titulo del post","eduardo ayales",new Date(), ["Naturalización", "Migración","Eduación"]));
    this.postsList.push(new PostInfo("3","titulo del post","jose urena",new Date(), ["Naturalización","Eduación"]));
    this.postsList.push(new PostInfo("4","titulo del post","eduardo ayales",new Date(), ["Naturalización", "Migración","Eduación"]));
    this.postsList.push(new PostInfo("5","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("6","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("7","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("8","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("9","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("10","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("11","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("12","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("13","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("14","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("15","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("16","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("17","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("18","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("19","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("20","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("21","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("22","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("23","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("24","titulo del post","jose urena",new Date(),["Migración","Eduación"]));
    this.postsList.push(new PostInfo("25","titulo del post","jose urena",new Date(),["Migración","Eduación"]));

  }
  getPostList():Observable<PostInfo[]>{
    return of(this.postsList);
  }

  deletePost(id:string){
    const index = this.postsList.findIndex( (value, index)=>value.id === id);
    console.log(index);
    this.postsList.splice(index, 1);
  }
}
