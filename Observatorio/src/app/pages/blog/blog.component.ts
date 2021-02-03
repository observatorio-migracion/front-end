import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  cardTitle = "Card title";
  cardDescription = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  cardImage = "https://source.unsplash.com/random/286x180";
  constructor() { }

  ngOnInit(): void {
  }

}
