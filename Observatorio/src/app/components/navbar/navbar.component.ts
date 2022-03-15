import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public matchQuery: boolean;

  public theme: string;

  public subscription:Subscription | undefined;

  public container: any;

  constructor(private themeService:ThemeService) {
    this.theme = 'light';
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
  }
  
  ngOnInit(): void {
    this.container = document.getElementById('header-container');
    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
      if (this.theme === 'dark') {
        this.container.style.backgroundImage  = "url(../../../assets/patterns/patron-dark.png)";
      }else{
        this.container.style.backgroundImage  = "url(../../../assets/patterns/patron-light.png)";
      }
    });
  }
}
