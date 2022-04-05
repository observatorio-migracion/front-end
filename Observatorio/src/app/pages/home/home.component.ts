import { Router } from '@angular/router';
import { ShowdownConverter } from 'ngx-showdown';
import { Component, OnInit } from '@angular/core';
import { Categoria, Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ShowdownConverter]
})
export class HomeComponent implements OnInit {
  public api: string;

  public seeMoreCategories: boolean;

  public categoriesLimit: number;

  public readonly recentPostLimit: number;

  public readonly activitiesLimit: number;

  public categories: Categoria[];

  public postsList: Post[];

  public readonly sortQuery: string;

  public readonly dateSortQuery: string;

  constructor(
    private postService: PostService,
    private router: Router,
    private showdownConverter: ShowdownConverter
  ) {
    this.categoriesLimit = 4;
    this.recentPostLimit = 3;
    this.activitiesLimit = 4;
    this.sortQuery = 'published_at:desc';
    this.dateSortQuery = 'fecha:desc';
    this.categories = new Array<Categoria>();
    this.api = environment.api.url;
    this.postsList = new Array<Post>();
    this.seeMoreCategories = true;
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecentPosts();
  }

  markDowntoHtml(text: string): string {
    let html = this.showdownConverter.makeHtml(text);
    let aux = '';
    while (aux !== html) {
      aux = html;
      html = html.replace('src="/uploads/', `src="${this.api}/uploads/`);
    }
    return html;
  }

  loadMoreCategories() {
    this.categoriesLimit = 0;
    this.loadCategories();
  }

  loadCategories() {
    this.postService
      .getEnabledCategories(this.categoriesLimit)
      .subscribe((categories: Categoria[]) => {
        for (const item of categories) {
          if (item.imagen) {
            item.imagen.formats.small.url = this.api + item.imagen.formats.small.url;
          }
        }

        this.categories = categories;
        if (!this.categoriesLimit) this.seeMoreCategories = false;
      });
  }

  loadRecentPosts() {
    this.postService
      .getRecentPostList(this.sortQuery, this.recentPostLimit)
      .subscribe((posts: Post[]) => {
        this.postsList = posts;
      });
  }

  filterPostsByCategory(category: Categoria) {
    this.router.navigate(['blog', category.nombre]);
  }
}
