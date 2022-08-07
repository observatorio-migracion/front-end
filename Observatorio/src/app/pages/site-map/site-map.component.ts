import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
export class SiteMapComponent implements OnInit {

  public scrolled: boolean;

  constructor(){
    this.scrolled = false;
  }

  ngOnInit(): void {
    // Método vacío intencionalmente
  }

  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY > 0;
  }

}
