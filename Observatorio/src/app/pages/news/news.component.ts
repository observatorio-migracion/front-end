import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckBoxData } from 'src/app/models/CheckBoxData';
import { Categoria, New } from 'src/app/models/New';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public scrolled: boolean;

  public newStart: number;

  public readonly newLimit: number;

  public categoryFilter = '';

  public newsListSize: number;

  public newsList: New[];

  public categoriesList: CheckBoxData[] = [];

  public searchQuery = '';

  public searchParams = '';

  public readonly sortQuery: string;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.newsList = new Array<New>();
    this.newsListSize = 0;
    this.newLimit = 4;
    this.newStart = 0;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.scrolled = false;
    this.sortQuery = 'published_at:desc';
  }

  ngOnInit(): void {
    this.loadCategories();

    this.newsService.getNewsListSize(this.categoryFilter, this.searchParams).subscribe((size) => {
      this.newsListSize = size;
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
    this.newsService.getEnabledCategories().subscribe((res: Categoria[]) => {
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
    this.newsList = [];
  }

  async loadPostList(clear = false): Promise<void> {
    this.newsService.getNewsListSize(this.categoryFilter, this.searchParams).subscribe((size) => {
      this.newsListSize = size;
    });
    // this.newsService
    // .getRecentPostList(this.sortQuery, this.recentPostLimit)
    // .subscribe((posts: Post[]) => {
    //   this.postsList = posts;
    // });
    if (clear) this.newStart = 0;
    this.newsService
      .getNewsList(
        this.sortQuery,
        this.categoryFilter,
        this.searchParams,
        this.newStart,
        this.newLimit
      )
      .subscribe((posts: New[]) => {
        if (clear) {
          this.deletePostsList().then(() => {
            this.newsList.push(...posts);
          });
        } else {
          this.newsList.push(...posts);
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
    if (this.newStart <= this.newsListSize) {
      this.newStart += this.newLimit;
      this.loadPostList();
    }
  }
  
 }
