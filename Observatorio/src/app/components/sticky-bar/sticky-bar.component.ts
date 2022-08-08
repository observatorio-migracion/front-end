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
    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
  }
}
