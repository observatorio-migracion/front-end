import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.css']
})
export class StickyBarComponent implements OnInit {
  public matchQuery: boolean;

  public theme: string;

  public subscription: Subscription | undefined;

  public mobile: boolean;

  public scrolled: boolean;

  constructor(private themeService: ThemeService) {
    this.theme = 'light';
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
    if (window.screen.width <= 767) { // 768px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
    this.scrolled = false;
  }

  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY > 0;
  }

  ngOnInit(): void {
    const container = document.getElementById('header-container');

    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
    this.checkTheme();
    this.addListenerColorScheme();
    if (container) {
      if (this.theme === 'dark') {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-dark.png)';
      } else {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-light.png)';
      }
    }
  }

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  toggleTheme() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark');
      const theme = (window.localStorage.getItem('theme') === 'dark') ? 'light' : 'dark';
      window.localStorage.setItem('theme', theme);
      this.setTheme(theme);
    }
  }

  checkTheme() {
    const body = document.querySelector('body');
    if (body) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (window.localStorage.getItem('theme')) {
          if (window.localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark');
            window.localStorage.setItem('theme', 'dark');
            this.setTheme('dark');
          } else if (window.localStorage.getItem('theme') === 'light') {
            this.setTheme('light');
          }
        } else {
          body.classList.add('dark');
          window.localStorage.setItem('theme', 'dark');
          this.setTheme('dark');
        }
      } else {
        window.localStorage.setItem('theme', 'light');
        this.setTheme('light');
      }
    }
  }

  addListenerColorScheme() {
    const body = document.querySelector('body');
    if (body) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // const newColorScheme = e.matches ? 'dark' : 'light';
        if (e.matches) {
          body.classList.add('dark');
          window.localStorage.setItem('theme', 'dark');
          this.setTheme('dark');
        } else {
          body.classList.remove('dark');
          window.localStorage.setItem('theme', 'light');
          this.setTheme('light');
        }
      });
    }
  }

}
