import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public searchQuery:string;
  subscription: Subscription;
  constructor(private _postService:PostService) {
    this.searchQuery = '';
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this._postService.currentSearchQuery.subscribe(search => this.searchQuery = search);
  }

  setSearchQuery(){
    this._postService.setSearchQuery(this.searchQuery);
  }

  searchByKeywords(){
    this._postService.searchByKeywords('').subscribe( 
      (posts:Post[])=>{
        console.log(posts);
        //tenemos el problema de donde vamos a mostrar esos resultados
        //es decir, si usamos la misma seccion del blog tendriamos que notificarle
        
      },
      (err)=>{
        console.log('error in search by keywords');
      })
  }
}
