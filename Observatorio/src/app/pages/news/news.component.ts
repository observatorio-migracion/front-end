import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckBoxData } from 'src/app/models/CheckBoxData';
import { Categoria, Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public scrolled: boolean;

  public postStart: number;

  public readonly postLimit: number;

  public categoryFilter = '';

  public postListSize: number;

  public postsList: New[];

  public categoriesList: CheckBoxData[] = [];

  public searchQuery = '';

  public searchParams = '';

  public readonly sortQuery: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.postsList = new Array<Post>();
    this.postListSize = 0;
    this.postLimit = 4;
    this.postStart = 0;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.scrolled = false;
    this.sortQuery = 'published_at:desc';
  }

  ngOnInit(): void {
    this.loadCategories();

    this.postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe((size) => {
      this.postListSize = size;
    });
    this.loadPostList();
  }

  goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY > 0;
  }

  loadCategoryFilterFromURL() {
    const category = this.activatedRoute.snapshot.paramMap.get('category');

    for (const item of this.categoriesList) {
      item.value = false;
    }

    const result = this.categoriesList.find((categ: CheckBoxData) => categ.name === category);
    if (result) {
      result.value = true;
      this.valueChanged();
    }
  }

  loadCategories(): void {
    this.postService.getEnabledCategories().subscribe((res: Categoria[]) => {
      this.categoriesList = res.map((value) => new CheckBoxData(value.nombre || '', false));
      this.loadCategoryFilterFromURL();
    });
  }

  async valueChanged() {
    this.categoryFilter = '';
    for (const item of this.categoriesList) {
      if (item.value) {
        this.categoryFilter += `_where[categorias.nombre]=${item.name}&`;
      }
    }
    await this.loadPostList(true);
  }

  async deletePostsList(): Promise<void> {
    this.postsList = [];
  }

  async loadPostList(clear = false): Promise<void> {
    this.postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe((size) => {
      this.postListSize = size;
    });
    // this.postService
    // .getRecentPostList(this.sortQuery, this.recentPostLimit)
    // .subscribe((posts: Post[]) => {
    //   this.postsList = posts;
    // });
    if (clear) this.postStart = 0;
    this.postService
      .getPostList(
        this.sortQuery,
        this.categoryFilter,
        this.searchParams,
        this.postStart,
        this.postLimit
      )
      .subscribe((posts: Post[]) => {
        if (clear) {
          this.deletePostsList().then(() => {
            this.postsList.push(...posts);
          });
        } else {
          this.postsList.push(...posts);
        }
      });
  }

  async loadPostListSearch(): Promise<void> {
    if (this.searchQuery) {
      this.searchParams = '';
      this.searchParams += `_where[_or][0][contenido_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][2][descripcion_contains]=${this.searchQuery}&`;
      await this.loadPostList(true);
    } else {
      this.searchParams = '';
      await this.loadPostList(true);
    }
  }

  onScroll() {
    if (this.postStart <= this.postListSize) {
      this.postStart += this.postLimit;
      this.loadPostList();
    }
  }
}
