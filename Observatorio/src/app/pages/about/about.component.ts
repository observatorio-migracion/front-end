/* eslint class-methods-use-this: ["error", { "exceptMethods": ["ngOnInit",] }] */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    //
  }
}
