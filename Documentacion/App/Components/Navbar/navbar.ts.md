# Documentacion navbar.ts

 Esta seccion contiene la documentacion del navbar.ts del componente navbar de la pagina web. Dentro de su estructura visual posee: 
*  item: text

### Codigo
text

``` ts
import { Component, OnInit } from '@angular/core';
``` 

``` ts 
import { Post } from 'src/app/models/Post';
``` 

``` ts
import { PostService } from 'src/app/services/post.service';
``` 

``` ts
import { ThemeService } from '../../services/theme.service';
``` 

```  ts
import { Subscription } from 'rxjs';
```

``` ts
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
``` 

``` ts
export class NavbarComponent implements OnInit {
    //codigos siguientes
}
``` 

``` ts
  public matchQuery: any;
  public theme: string;
  public subscription:Subscription | undefined;
``` 

``` ts
  constructor(private _themeService:ThemeService) {
    this.theme = 'light';
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
  }
``` 

``` ts
  ngOnInit(): void {
    this.subscription = this._themeService.currentTheme.subscribe(theme => {
      this.theme = theme;
    })
  }
``` 
