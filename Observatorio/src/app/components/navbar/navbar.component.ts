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

  constructor(private themeService:ThemeService) {
    this.theme = 'light';
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
  }

  ngOnInit(): void {
    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
  }
}
