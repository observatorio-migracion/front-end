# Documentación darktoggle.ts

### Esta sección contiene la documentación del darktoggle.ts del componente darktoggle de la página web. Dentro de su estructura visual posee: 
*  Botón de darktoggle: Es un botón con dos iconos; al dar click, cambia el tema de la página, ya sea claro u oscuro.

### Código

Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
``` 

Importa de la carpeta de services el srevicio temas llamado ThemeService 
``` ts
import { ThemeService } from '../../services/theme.service';
``` 

Importa Subscription de la librería RxJS de Angular que es como la ejecución de un Observable pero este es un recurso llamado desechable.
``` ts
import { Subscription } from 'rxjs';
``` 

Agrega un componente *selector* de CSS llamado *app-darktoggle* que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  selector: 'app-darktoggle',
  templateUrl: './darktoggle.component.html',
  styleUrls: ['./darktoggle.component.css']
})
``` 

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class DarktoggleComponent implements OnInit {
  //...
}
``` 

Se definen tres atributos en la clase *DarktoggleComponent*: *isEnabled*, *theme* y *subscription*.
``` ts
public isEnabled: boolean;
public theme: string;
public subscription: Subscription | undefined;
``` 

El constructor de la clase *DarktoggleComponent* inicializa dos variables y recibe el servicio.
``` ts
constructor(private _themeService: ThemeService) {
  this.isEnabled = false;
  this.theme = '';
}
``` 

 Este método del TypeScript hace un llamado al componente y lo inicia, en particular carga los datos generados desde el HTML y el CSS. Se suscribe al servicio de temas, con el fin de mantenerse actualizado ante cualquier cambio en dicho servicio. Además, asigna a la variable *isEnabled* un valor, de acuerdo al servicio. 
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

Este método de la clase *DarktoggleComponent* tiene como objetivo alternar el tema de la página.  
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
