# Documentacion footer.ts

 Esta seccion contiene la documentacion del footer.ts del componente footer de la pagina web. Dentro de su estructura visual posee: 
*  item: text

### Codigo
text

``` ts
import { Component, OnInit } from '@angular/core';
``` 

``` ts
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
```

``` ts
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
``` 
