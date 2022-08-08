import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  public scrolled: boolean;

  constructor(){
    this.scrolled = false;
  }
  
  ngOnInit(): void {
    // Método vacío intencionalmente
  }

  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY >= 150;
    console.log(window.scrollY);
    console.log(this.scrolled);
  }
}
