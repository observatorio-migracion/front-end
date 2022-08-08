import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

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
  }

}
