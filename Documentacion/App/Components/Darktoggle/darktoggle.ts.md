# Documentacion darktoggle.ts

 Esta seccion contiene la documentacion del darktoggle.ts del componente daktoogle de la pagina web. Dentro de su estructura visual posee: 
*  item: text

### Codigo
text

``` ts
import { Component, OnInit } from '@angular/core';
``` 

``` ts
import { ThemeService } from '../../services/theme.service';
``` 

``` ts
import { Subscription } from 'rxjs';
``` 

``` ts
@Component({
  selector: 'app-darktoggle',
  templateUrl: './darktoggle.component.html',
  styleUrls: ['./darktoggle.component.css']
})
``` 

``` ts
export class DarktoggleComponent implements OnInit {
    //codigos siguientes
}
``` 

``` ts
  public isEnabled: boolean;
  public theme: string;
  public subscription: Subscription | undefined;
``` 

``` ts
  constructor(private _themeService: ThemeService) {
    this.isEnabled = false;
    this.theme = '';
  }
``` 
``` ts
  ngOnInit(): void {
    this.subscription = this._themeService.currentTheme.subscribe(theme => {
      this.theme = theme;
      if (this.theme === 'dark') {
        this.isEnabled = true;
      } else {
        this.isEnabled = false;
      }
    })
  }
``` 

``` ts
  toggleState() {
    this.isEnabled = !this.isEnabled;
    const body = document.querySelector("body");
    if (body) {
      body.classList.toggle('dark');
      this.theme = (window.localStorage.getItem('theme') === 'dark') ? 'light' : 'dark';
      window.localStorage.setItem('theme', this.theme);
      this._themeService.setTheme(this.theme);
    }
  }
``` 

