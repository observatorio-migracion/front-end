# Documentacion navbar.ts

Esta seccion contiene la documentacion del navbar.ts del componente navbar de la pagina web. Dentro de su estructura visual posee: 
* Darktoogle : llamado al componente darktoggle, es el botón para cambiar entre el modo claro y el modo oscuro el tema de la página
* Logo UCR : logo representativo de la Universidad de Costa Rica, al dar click redirige a la página inicial   de la universidad
* Observatorio de Migración: nombre de la página que al dar click redirige a la página principal del observatorio
* Barra de navegación : muestra las diferentes opciones de pagínas para que el usuario pueda navegar a treavez de ellas,  entre ellas se encuentran el inicio, blog, nosotros, directorio
* Barra de  decoración : es ua barra cuya unica funcionalidad es mostrar la misma imagen que la barra de arriba para efectos de estética, una mejor visualización de la página

### Codigo
Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
``` 
Importa desde la carpeta models el modelo de Post 
``` ts 
import { Post } from 'src/app/models/Post';
``` 
Importa desde la carpeta de services el servicio de PostServices
``` ts
import { PostService } from 'src/app/services/post.service';
``` 
Importa desde la carpeta de services el servicio de ThemeService
``` ts
import { ThemeService } from '../../services/theme.service';
``` 
Importa Subscription de la librería RxJS de Angular que es como la ejecución de un Observable pero este es un recurso llamado desechable.
```  ts
import { Subscription } from 'rxjs';
```
Agrega un componente selector de CSS llamado app-navbar que identifica esta directiva en una plantilla y activa la instanciación de la directiva.  Luego agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último se Agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
``` 

Exporta la clase para ser usada en otras instancias
``` ts
export class NavbarComponent implements OnInit {
    //codigos siguientes
}
``` 

Se definen varios astributos de la clase NavbarComponent uno llamado matchQuery de tipo any, uno para el tema de tipo string y un atributo de tipo Subscription llamado igual Subscription. 
``` ts
  public matchQuery: any;
  public theme: string;
  public subscription:Subscription | undefined;
``` 

Se inicializa el constructor de la clase NavbarComponent que resive como parametro de tipo _themeService. Luego se asigna al atributo theme el valor de claro y al atributo de matchQuery un valor de maximo ancho en la ventana.
``` ts
  constructor(private _themeService:ThemeService) {
    this.theme = 'light';
    this.matchQuery = window.matchMedia('(max-width: 767px)').matches;
  }
``` 

 Este método del ts, hace un llamado al componente y lo inicia, en particular carga los datos generados desde el html y el css. Luego a el atributo subcription de la clase se le asigna el tema con el valor que tiene al atributo currenteTheme ( tema actual) que del Serivicio de temas.
``` ts
  ngOnInit(): void {
    this.subscription = this._themeService.currentTheme.subscribe(theme => {
      this.theme = theme;
    })
  }
``` 
