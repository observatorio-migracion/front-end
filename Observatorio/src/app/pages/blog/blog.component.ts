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
  public postStart: number;
  public readonly postLimit: number;
  public categoryFilter: string = '';
  // public pageSize: number = 4;
  // public pageIndex: number = 0;
  public postListSize: number;
  public postsList: Post[];
  public categoriesList: (CheckBoxData)[] = [];
  public searchQuery: string = '';
  public searchParams: string = '';

  constructor(private _postService: PostService) {
    this.postsList = new Array<Post>();
    this.postListSize = 0;
    this.postLimit = 4;
    this.postStart = 0;
  }

  ngOnInit(): void {
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(size => {
      this.postListSize = size;
    }, err => console.log(err));
    this.loadCategories();
    this.loadPostList();
  }
  loadCategories(): void {
    this._postService.getEnabledCategories().subscribe(
      (res: Categoria[]) => {
        this.categoriesList = res.map((value) => new CheckBoxData(value.nombre || '', false));
      }, err => console.log(err));
  }
  async valueChanged(category: CheckBoxData) {
    this.categoryFilter = '';
    for (let category of this.categoriesList) {
      if (category.value) {
        this.categoryFilter += `_where[categorias.nombre]=${category.name}&`;
      }
    }
    await this.loadPostList(true);
  }

  async deletePostsList(): Promise<void>{
    this.postsList = [];
  }
  async loadPostList(clear:boolean =  false): Promise<void> {
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(
      size => {
        this.postListSize = size;
      })
      if(clear) this.postStart = 0;
      this._postService.getPostList(this.categoryFilter,this.searchParams, this.postStart, this.postLimit).subscribe(
      (posts: Post[]) => {
        if(clear){
          this.deletePostsList().then( ()=> {
            this.postsList.push(...posts);
          })
        }
        else{
          this.postsList.push(...posts);
        }        
      },
      err => {
        console.log(err)
      }
    );
  }

  async loadPostListSearch(): Promise<void> {
    if (this.searchQuery) {
      this.searchParams = '';
      this.searchParams += `_where[_or][0][contenido_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][2][descripcion_contains]=${this.searchQuery}&`;
      await this.loadPostList(true);
    }else{
      this.searchParams = '';
      await this.loadPostList(true);
    }
  }

  onScroll() {
    if(this.postStart <= this.postListSize){
      this.postStart += this.postLimit;
      this.loadPostList();
    }
  }


  // pageChanged(event: any) {
  //   console.log(event);

  //   const index = event.pageIndex;
  //   if (index > this.pageIndex) {
  //     this.postStart += this.pageSize;
  //   }
  //   else {
  //     this.postStart -= this.pageSize;
  //   }
  //   this.pageIndex = index;

  //   this.loadPostList(this.postStart, this.postLimit);
  // }

}