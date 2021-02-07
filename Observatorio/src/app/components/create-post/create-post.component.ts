import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { CheckBoxData } from '../../models/CheckBoxData';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})



export class CreatePostComponent implements OnInit {
  public title:string;
  public categories: Array<CheckBoxData>;
  public notionContent:string;
  public x:string[];
  constructor(private _postService:PostService) {
    this.title = '';
    this.categories = [];
    this.notionContent = '';
    this.loadCategories();
    this.x = [];
  }

  ngOnInit(): void {
    
  }
  loadCategories(){
    const categ:string[] = this._postService.getCategories();
    categ.map( (item, index)=>{
      this.categories.push(new CheckBoxData(item));//[item, false]
    })
    //console.log(this.categories);
  }
  onSubmit(form:NgForm){
    console.log(form.form);
    
  }

  valueChanged($event:any){
    console.log(this.categories);
  }
}
