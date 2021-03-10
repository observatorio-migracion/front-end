import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
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
  public categoriesLimit: number;
  public readonly recentPostLimit:number;
  public readonly activitiesLimit: number;
  public categories: Categoria[];
  public postsList:Post[];
  public readonly sortQuery: string;
  public activities: Activity[];
  constructor(private _postService: PostService) {
    this.categoriesLimit = 4;
    this.recentPostLimit = 3;
    this.activitiesLimit = 4;
    this.sortQuery = "published_at:desc";
    this.categories = new Array<Categoria>();
    this.api = environment.api.url;
    this.postsList = new Array<Post>();
    this.seeMoreCategories = true;
    this.activities = new Array<Activity>();
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecentPosts();
    this.loadActivities();
  }
  loadActivities(){  
    this._postService.getActivitiesList(this.activitiesLimit).subscribe( (activities:Activity[])=>{
      this.activities = activities;
    })
  };

  loadMoreCategories() {
    this.categoriesLimit = 0;
    this.loadCategories();
  }

  loadCategories() {
    this._postService.getEnabledCategories(this.categoriesLimit).subscribe((categories: Categoria[]) => {
      categories.map((value: Categoria) => {
        value.imagen.formats.small.url = this.api + value.imagen.formats.small.url;//TODO: Recordar cambiarlo para el deploy
      })
      this.categories = categories;
      if (!this.categoriesLimit) this.seeMoreCategories = false;
    }
      , err => {
        console.log("categories error: ", err);
      })
    }

    loadRecentPosts(){
      this._postService.getRecentPostList(this.sortQuery, this.recentPostLimit).subscribe((posts: Post[]) => {
        this.postsList = posts;
      }
        , err => {
          console.log("recent posts error: ", err);
        })
    }
    openActivity(activity:Activity){
      console.log('clicked: ',activity);
    }

}
