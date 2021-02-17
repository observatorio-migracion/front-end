import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public name:string;
  public email:string;
  public subject:string;
  public message:string;

  constructor() {
    this.name = '';
    this.email ='';
    this.subject = '';
    this.message = '';
  }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(form.form.valid){
      //post to server
      //console.log({author:this.name, email:this.email, subject:this.subject, message:this.message});
    }
  }
}
