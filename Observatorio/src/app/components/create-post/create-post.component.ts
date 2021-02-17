// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Fields, PostInfo } from 'src/app/models/PostInfo';
// import { PostService } from 'src/app/services/post.service';
// import { CheckBoxData } from '../../models/CheckBoxData';


// @Component({
//   selector: 'app-create-post',
//   templateUrl: './create-post.component.html',
//   styleUrls: ['./create-post.component.css']
// })



// export class CreatePostComponent implements OnInit {
//   public title:string;
//   public categories: Array<CheckBoxData>;
//   public notionContent:string;
//   public thumbnail:string;
//   public description:string;
//   constructor(private _postService:PostService) {
//     this.title = '';
//     this.description = '';
//     this.categories = [];
//     this.notionContent = '';
//     this.thumbnail = '';
//     this.loadCategories();
//   }

//   ngOnInit(): void {
    
//   }
//   loadCategories(){
//     // const categ:string[] = this._postService.getCategories();
//     // categ.map( (item, index)=>{
//     //   this.categories.push(new CheckBoxData(item));//[item, false]
//     // })
//   }
//   onSubmit(form:NgForm){
//     let id = this.notionContent.split('-').pop();
//     if(id){
//       const post:PostInfo = new PostInfo(new Fields(this.getCategories(), true, this.description, [this.thumbnail], this.title), id, new Date(), new Date());
//       console.log(post);
//     }
//   }

//   valueChanged($event:any){
    
//   }

//   getCategories():string[]{
//     let categ:string[]  = [];
//     this.categories.filter( (value)=>value.value)
//     .forEach( (value)=>{
//       categ.push(value.name);
//     })
//     return categ;
//   }
// }
