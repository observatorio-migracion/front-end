import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
    }
  }

}
