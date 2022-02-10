import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-darktoggle',
  templateUrl: './darktoggle.component.html',
  styleUrls: ['./darktoggle.component.css'],
})
export class DarktoggleComponent implements OnInit {
  public isEnabled: boolean;

  public theme: string;

  public subscription: Subscription | undefined;

  constructor(private themeService: ThemeService) {
    this.isEnabled = false;
    this.theme = '';
  }

  ngOnInit(): void {
    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
      if (this.theme === 'dark') {
        this.isEnabled = true;
      } else {
        this.isEnabled = false;
      }
    });
  }

  toggleState() {
    this.isEnabled = !this.isEnabled;
    const body = document.querySelector('body');
    if (body) {
      body.classList.toggle('dark');
      this.theme = (window.localStorage.getItem('theme') === 'dark') ? 'light' : 'dark';
      window.localStorage.setItem('theme', this.theme);
      this.themeService.setTheme(this.theme);
    }
  }
}
