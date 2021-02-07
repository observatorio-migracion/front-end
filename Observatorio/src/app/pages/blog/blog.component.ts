import { Component, OnInit } from '@angular/core';
import { PostInfo } from 'src/app/models/PostInfo';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  public postsListInfo: PostInfo[];
  constructor(private _postService:PostService) {
    this.postsListInfo = new Array<PostInfo>();
  }

  ngOnInit(): void {
    this.loadPostListInfo();
  }
  loadPostListInfo():void{
    this.postsListInfo = this._postService.getPostList();
  }

}
