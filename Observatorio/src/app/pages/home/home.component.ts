/* eslint no-param-reassign: ["error"] */
/* eslint array-callback-return: "error" */
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ShowdownConverter } from 'ngx-showdown';
import { Component, OnInit } from '@angular/core';
import { Activity, Imagenes } from 'src/app/models/Activity';
import { Categoria, Post } from 'src/app/models/Post';
import { EventService } from 'src/app/services/event.service';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';
import { postStyleConfig } from '../../helpers/postStyleConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ShowdownConverter],
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

  public readonly dateSortQuery: string;

  public activities: Activity[];

  public activitySelected:Activity;

  public contentHTML: SafeHtml;
  
  constructor(
private postService:PostService,
              private eventService: EventService,
              private router:Router,
              private sanitizer: DomSanitizer,
              private showdownConverter: ShowdownConverter,
  ) {
    this.contentHTML = '';
    this.categoriesLimit = 4;
    this.recentPostLimit = 3;
    this.activitiesLimit = 4;
    this.sortQuery = 'publishedAt:desc';
    this.dateSortQuery = 'fecha:desc';
    this.categories = new Array<Categoria>();
    this.api = environment.api.url;
    this.postsList = new Array<Post>();
    this.seeMoreCategories = true;
    this.activities = new Array<Activity>();
    this.activitySelected = new Activity('', '', new Date(), '', '', '', '', new Array<Imagenes>(), '');
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecentPosts();
    this.loadActivities();
  }

  loadActivities() {
    this.eventService.getActivitiesList(this.activitiesLimit, this.dateSortQuery)
      .subscribe((activities:Activity[]) => {
        this.activities = activities;
      });
  }

  markDowntoHtml(text: string): string {
    let html = postStyleConfig + this.showdownConverter.makeHtml(text);
    let aux = '';
    while (aux !== html) {
      aux = html;
      html = html.replace('src="/uploads/', `src="${this.api}/uploads/`);
    }
    return html;
  }

  renderActivity(activity:Activity) {
    if (activity.descripcion) {
      const html = this.markDowntoHtml(activity.descripcion);
      this.contentHTML = this.sanitizer.bypassSecurityTrustHtml(html);
    }
  }

  loadMoreCategories() {
    this.categoriesLimit = 0;
    this.loadCategories();
  }

  loadCategories() {
    this.postService.getEnabledCategories(this.categoriesLimit).subscribe(
      (categories: Categoria[]) => {
        categories.forEach((value: Categoria) => {
          if (value.imagen) {
            value.imagen.formats.small.url = this.api
              + value.imagen.formats.small.url;// TODO: Recordar cambiarlo para el deploy
          }
        });
        this.categories = categories;
        if (!this.categoriesLimit) this.seeMoreCategories = false;
      },
    );
  }

  loadRecentPosts() {
    this.postService.getRecentPostList(this.sortQuery, this.recentPostLimit).subscribe(
      (posts: Post[]) => {
        this.postsList = posts;
      },
    );
  }

  openActivity(activity:Activity) {
    this.activitySelected = activity;
    this.renderActivity(activity);
  }

  filterPostsByCategory(category:Categoria) {
    this.router.navigate(['blog', category.nombre]);
  }
}
