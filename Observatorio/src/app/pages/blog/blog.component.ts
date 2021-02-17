import { Component, OnInit } from '@angular/core';
import { CheckBoxData } from 'src/app/models/CheckBoxData';
import { Categoria, Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  start = 0;
  limit = 8;//3
  pageSize = 3;
  dbPostListSize = 0;
  selector: string = '.custom-container';
  public postsList: Post[];

  categoriesList: (CheckBoxData)[] = [];

  constructor(private _postService: PostService) {
    this.postsList = new Array<Post>();
  }

  ngOnInit(): void {
    this._postService.getPostsListSize().subscribe(res => {
      this.dbPostListSize = res;
    }, err => console.log(err));
    this.loadCategories();
    this.loadPostList(this.start, this.limit);
  }
  loadCategories():void{
    this._postService.getEnabledCategories().subscribe( 
      (res:Categoria[])=>{
        this.categoriesList = res.map( (value)=>new CheckBoxData(value.nombre || '', false));
      }, err=>console.log(err));
  }
  valueChanged(category:CheckBoxData){
    console.log(this.categoriesList);
    let filter = ``;
    for(let c of this.categoriesList){
      if(c.value){
        filter+= `_where[categorias.nombre]=${c.name}&`;
      }
    }
    this.loadPostList(this.start, this.limit, filter);
    console.log(this.postsList);
  }
  loadPostList(s: number, l: number, filter:string=''): void {
    this._postService.getPostList(s, l, filter).subscribe((posts: Post[]) => {
      this.postsList = posts;
    },
      err => { console.log(err) });
  }

  onScroll(event: any) {
    console.log(event);
    const scrollY: number = event.currentScrollPosition;
    const scrollHeight: number = this.getScrollHeight() - 100;
    //console.log('***************************')
    // console.log('scrolled!!',scrollY);
    // console.log('max: ',scrollHeight);
    //console.log('percentage: ',Math.round(scrollY - scrollHeight / 100))
    // if(scrollY > scrollHeight){
    //   console.log('scroll');
    // }
  }
  getScrollHeight(): number {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }
  pageChanged(event: any) {
    this.start += this.pageSize;
    this.loadPostList(this.start, this.limit);
  }
}
