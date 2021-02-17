// import { Component, OnInit } from '@angular/core';
// import { Fields, PostInfo } from 'src/app/models/PostInfo';
// import { PostService } from 'src/app/services/post.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   // public postsList: PostInfo[];
//   // public currentPost:PostInfo;
//   constructor(private _postService:PostService) {
//     // this.postsList = new Array<PostInfo>();
//     // this.currentPost = new PostInfo(new Fields([],false, '', [], ''), '', new Date(), new Date() );
//   }

//   ngOnInit(): void {
//     this.loadPostsInfo();
//   }
//   loadPostsInfo():void{
//     // this.postsList = this._postService.getPostList();
//     // console.log(this.postsList);
//   }
//   public editPost(post:PostInfo){
//     console.log('edit: ', post);
//   }
//   public showPost(post:PostInfo){
//     console.log('show', post);
//   }
//   public deletePost(){
//     console.log('delete:', this.currentPost);
//     //this._postService.deletePost(this.currentPost.id);
//   }
//   postToDelete(post:PostInfo){
//     this.currentPost = post;
//   }
// }
