import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public matchQuery: boolean;

  public theme: string;

  public subscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {
    this.theme = 'light';
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
    const container = document.getElementById('header-container');
    if (container) {
      if (this.theme === 'dark') {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-dark.png)';
      } else {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-light.png)';
      }
    }
  }

  ngOnInit(): void {
    const container = document.getElementById('header-container');
    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;

    });
    if (container) {
      if (this.theme === 'dark') {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-dark.png)';
      } else {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-light.png)';
      }
    }
  }
}
