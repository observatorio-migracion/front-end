import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Observatorio Migración';

  public theme: string;

  public subscription: Subscription | undefined;

  public scrolled: boolean;

  constructor(private themeService: ThemeService) {
    this.theme = 'light';
    this.scrolled = false;
  }

  ngOnInit(): void {
    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
    this.checkTheme();
    this.addListenerColorScheme();
  }

  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY > 0;
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
