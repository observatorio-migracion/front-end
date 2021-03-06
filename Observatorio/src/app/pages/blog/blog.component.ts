import { Component, OnInit } from '@angular/core';
import { CheckBoxData } from 'src/app/models/CheckBoxData';
import { Categoria, Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  start: number = 0;
  limit: number = 4;
  filter: string = '';
  pageSize: number = this.limit;
  pageIndex: number = 0;
  dbPostListSize: number = 0;
  selector: string = '.custom-container';
  postsList: Post[];
  categoriesList: (CheckBoxData)[] = [];

  public searchQuery: string = '';
  subscription: Subscription;

  constructor(private _postService: PostService) {
    this.postsList = new Array<Post>();
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this._postService.currentSearchQuery.subscribe(
      search => {
        this.searchQuery = search;
        this.loadPostListSearch();
        console.log('search: ', this.searchQuery);
      }
    );
    
    this._postService.getPostsListSize(this.filter).subscribe(size => {
      this.dbPostListSize = size;
    }, err => console.log(err));
    this.loadCategories();
    this.loadPostList(this.start, this.limit);
  }
  loadCategories(): void {
    this._postService.getEnabledCategories().subscribe(
      (res: Categoria[]) => {
        this.categoriesList = res.map((value) => new CheckBoxData(value.nombre || '', false));
      }, err => console.log(err));
  }
  valueChanged(category: CheckBoxData) {
    this.filter = '';
    for (let c of this.categoriesList) {
      if (c.value) {
        this.filter += `_where[categorias.nombre]=${c.name}&`;
      }
    }
    this.start = 0;
    this.pageIndex = 0;
    this.loadPostList(this.start, this.limit);
  }
  loadPostList(s: number, l: number): void {
    this._postService.getPostList(s, l, this.filter).subscribe(
      (posts: Post[]) => {
        this.postsList = posts;
      },
      err => {
        console.log(err)
      }
    );
    this._postService.getPostsListSize(this.filter).subscribe(
      size => {
        this.dbPostListSize = size;
      })
  }

  loadPostListSearch(): void {
    let search = '';
    search+= `_where[_or][0][contenido_contains]=${this.searchQuery}&`;
    search+= `_where[_or][1][titulo_contains]=${this.searchQuery}&`;
    search+= `_where[_or][2][descripcion_contains]=${this.searchQuery}`;
    this._postService.searchByKeywords(search).subscribe(
      (posts: Post[]) => {
        this.postsList = posts;
      },
      err => {
        console.log(err)
      }
    );
  }

  onScroll(event: any) {//NOT IN USE
    const scrollY: number = event.currentScrollPosition;
    const scrollHeight: number = this.getScrollHeight() - 100;
  }

  getScrollHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }
  pageChanged(event: any) {
    console.log(event);

    const index = event.pageIndex;
    if (index > this.pageIndex) {
      this.start += this.pageSize;
    }
    else {
      this.start -= this.pageSize;
    }
    this.pageIndex = index;

    this.loadPostList(this.start, this.limit);
  }

}
//http://localhost:1337/posts?_where[_or][0][contenido_contains]=pollo&_where[_or][1][titulo_contains]=FRESAS&_where[_or][2][descripcion_contains]=ladra