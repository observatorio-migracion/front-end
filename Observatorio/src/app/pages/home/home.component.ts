import { Component, OnInit } from '@angular/core';
import { Categoria, Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';
import { Thumbnail } from '../../models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public api: string;
  public seeMoreCategories:boolean;
  public limit: number = 4;
  public categories: Categoria[];
  public readonly recentPostLimit:number = 3;
  public postsList:Post[];
  constructor(private _postService: PostService) {
    this.categories = new Array<Categoria>();
    this.api = environment.api.url;
    this.postsList = new Array<Post>();
    this.seeMoreCategories = true;
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecentReleases();
    this.loadRecentPosts();
  }
  loadRecentReleases(){

  }
  loadMoreCategories() {
    this.limit = 0;
    this.loadCategories();
  }

  loadCategories() {
    this._postService.getEnabledCategories(this.limit).subscribe((categories: Categoria[]) => {
      categories.map((value: Categoria) => {
        value.imagen.formats.small.url = this.api + value.imagen.formats.small.url;//TODO: Recordar cambiarlo para el deploy
      })
      this.categories = categories;
      if(!this.limit) this.seeMoreCategories = false;
    }
      , err => {
        console.log("categories error: ", err);
      })
    }

    loadRecentPosts(){
      const sortQuery:string = "published_at:desc";
      this._postService.getRecentPostList(sortQuery, this.recentPostLimit).subscribe((posts: Post[]) => {
        this.postsList = posts;
      }
        , err => {
          console.log("recent posts error: ", err);
        })
    }


}
