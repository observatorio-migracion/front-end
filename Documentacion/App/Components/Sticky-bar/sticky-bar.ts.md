# Documentación sticky-bar.ts

### Esta sección contiene la documentación del sticky-bar.ts del componente sticky-bar de la página web. Dentro de su estructura visual posee: 
* Se mantiene en la parte superior de la pantalla al hacer scroll
* Observatorio de Migración: nombre de la página, al dar click, redirige a la página principal del Observatorio.
* Barra de navegación: muestra las diferentes opciones de pagínas para que el usuario pueda navegar a través de ellas.

### Código

Importa los componentes Component, OnInit y HostListener desde la API Core de Angular
``` ts
  import { Component, OnInit, HostListener } from '@angular/core';
``` 
Importa Subscription de la librería RxJS de Angular que es como la ejecución de un Observable pero este es un recurso llamado desechable.
```  ts
  import { Subscription } from 'rxjs';
```
Importa desde la carpeta de services el servicio de ThemeService
``` ts
  import { ThemeService } from '../../services/theme.service';
``` 

Agrega un componente *selector* de CSS llamado *app-navbar* que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para usar en este componente.
``` ts
  @Component({
    selector: 'app-sticky-bar',
    templateUrl: './sticky-bar.component.html',
    styleUrls: ['./sticky-bar.component.css']
  })
``` 

Exporta la clase para ser utilizada en otras instancias.
``` ts
  export class StickyBarComponent implements OnInit {
      //...
  }
``` 

Se definen 5 atributos en la clase *StickyBarComponent*: *matchQuery*, *theme*, *subscription*, *mobile* y *scrolled*. 
``` ts
public matchQuery: any;
public theme: string;
public subscription:Subscription | undefined;
public mobile: boolean;
public scrolled: boolean;
``` 

El constructor de la clase *StickyBarComponent* inicializa dos variables y recibe el servicio.
``` ts
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
``` 

El *HostListener* revisa cuando se hace un scroll para el atributo scrolled
``` ts
  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY > 0;
  }
```


 Este método del TypeScript hace un llamado al componente y lo inicia, en particular carga los datos generados desde el HTML y el CSS. Se suscribe al servicio de temas, con el fin de mantenerse actualizado ante cualquier cambio en dicho servicio. 
``` ts
  ngOnInit(): void {
    this.subscription = this.themeService.currentTheme.subscribe((theme) => {
      this.theme = theme;
    });
  }
``` 
