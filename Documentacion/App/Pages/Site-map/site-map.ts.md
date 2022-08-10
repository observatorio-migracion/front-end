# Documentación site-map.ts

### Esta sección contiene la documentación del site-map.ts de la pagina site-map de la página web. Dentro de su estructura visual posee: 
* Links hacia todas las distintas paginas del sitio
  
### Código

Importa de la carpeta '@angular/core' los componentes
``` ts
import { Component, OnInit, HostListener } from '@angular/core';
``` 

Agrega un componente *selector* de CSS llamado *app-site-map*, que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, se agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para utilizar en este componente.
``` ts
@Component({
  selector: 'app-site-map',
  templateUrl: './site-map.component.html',
  styleUrls: ['./site-map.component.css']
})
``` 

Exporta la clase SiteMapComponent para ser usada en otras instancias
``` ts
export class SiteMapComponent implements OnInit {
  // codigos siguientes
}
``` 

Para la clase *SiteMapComponent* se crean el atributo: *scrolled*
``` ts
  public scrolled: boolean;
``` 

La clase *SiteMapComponent* recibe como parametros los servicios necesarios para sus funciones y inicializa sus variables
``` ts
  constructor(){
    this.scrolled = false;
  }
``` 

Este método de la clase *SiteMapComponent*, hace un llamado al componente y lo inicia.
``` ts
ngOnInit(): void {}
``` 

Este método de la clase *SiteMapComponent*, reacciona cada vez que se scrollea en la pantalla
``` ts
@HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY >= 150;
  }
```