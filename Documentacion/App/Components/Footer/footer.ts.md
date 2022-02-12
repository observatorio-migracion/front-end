# Documentación footer.ts

### Esta sección contiene la documentación del footer.ts del componente footer de la página web. Dentro de su estructura visual posee: 
* Footer: Esta sección detallará información adicional sobre la página, se divide en 3 secciones, la primera es un divisor, la segunda contiene el logo del Observatorio, el logo de la UCR con un enlace respectivo a la página oficial y la tercera contiene enlaces hacia las páginas de preguntas frecuentes, mapa del sitio y de contacto.

### Código
Importa los componentes Component y OnInit desde la API Core de Angular.
``` ts
import { Component, OnInit } from '@angular/core';
``` 
Importa desde la carpeta models el modelo de Post .
``` ts 
import { Post } from 'src/app/models/Post';
``` 
Importa desde la carpeta de services el servicio de PostServices.
``` ts
import { PostService } from 'src/app/services/post.service';
``` 
Importa desde la carpeta de services el servicio de ThemeService.
``` ts
import { ThemeService } from '../../services/theme.service';
``` 
Importa Subscription de la librería RxJS de Angular, que es como la ejecución de un Observable, pero este es un recurso llamado desechable.
```  ts
import { Subscription } from 'rxjs';
```
Agrega un componente *selector* de CSS llamado *app-footer*, que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, se agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para utilizar en este componente.
``` ts
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
``` 

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class FooterComponent implements OnInit {
  //...
}
``` 

Se definen tres atributos en la clase *FooterComponent*: *matchQuery*, *theme* y *subscription*. 
``` ts
public matchQuery: any;
public theme: string;
public subscription:Subscription | undefined;
``` 

El constructor de la clase *FooterComponent* inicializa dos variables y recibe el servicio.
``` ts
constructor(private _themeService:ThemeService) {
  this.theme = 'light';
  this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
}
``` 

Este método del TypeScript hace un llamado al componente y lo inicia, en particular carga los datos generados desde el HTML y el CSS. Se suscribe al servicio de temas, con el fin de mantenerse actualizado ante cualquier cambio en dicho servicio. 
``` ts
ngOnInit(): void {
  this.subscription = this._themeService.currentTheme.subscribe(theme => {
    this.theme = theme;
  })
}
``` 