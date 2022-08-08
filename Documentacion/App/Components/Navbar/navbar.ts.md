# Documentación navbar.ts

### Esta sección contiene la documentación del navbar.ts del componente navbar de la página web. Dentro de su estructura visual posee: 
* Darktoogle: llamado al componente *darktoggle*, es el botón para alternar el tema de la página entre modo claro y oscuro.
* Logo UCR: logo representativo de la Universidad de Costa Rica, al dar click, redirige a la página oficial de la universidad.
* Observatorio de Migración: nombre de la página, al dar click, redirige a la página principal del Observatorio.
* Barra de navegación: muestra las diferentes opciones de pagínas para que el usuario pueda navegar a través de ellas.

### Código

Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
```  
Importa desde la carpeta de services el servicio de ThemeService
``` ts
import { ThemeService } from '../../services/theme.service';
``` 
Importa Subscription de la librería RxJS de Angular que es como la ejecución de un Observable pero este es un recurso llamado desechable.
```  ts
import { Subscription } from 'rxjs';
```

Agrega un componente *selector* de CSS llamado *app-navbar* que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
``` 

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class NavbarComponent implements OnInit {
    //...
}
``` 

Se definen tres atributos en la clase *NavbarComponent*: *matchQuery*, *theme* y *subscription*. 
``` ts
public matchQuery: any;
public theme: string;
public subscription:Subscription | undefined;
``` 

El constructor de la clase *NavbarComponent* inicializa dos variables y recibe el servicio.
``` ts
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
``` 

 Este método del TypeScript hace un llamado al componente y lo inicia, en particular carga los datos generados desde el HTML y el CSS. Se suscribe al servicio de temas, con el fin de mantenerse actualizado ante cualquier cambio en dicho servicio. 
``` ts
ngOnInit(): void {
  const container = document.getElementById('header-container');
  this.subscription = this.themeService.currentTheme.subscribe((theme) => {
    this.theme = theme;
    if (container) {
      if (this.theme === 'dark') {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-dark.png)';
      } else {
        container.style.backgroundImage = 'url(../../../assets/patterns/patron-light.png)';
      }
    }
  });
}
``` 
