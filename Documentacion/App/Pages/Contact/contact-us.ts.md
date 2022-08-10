# Documentación contact-us.ts

### Esta sección contiene la documentación del contact-us.ts de la pagina contact-us de la página web. Dentro de su estructura visual posee: 
* Informacion sobre la organizacion a la que pertenecemos y formas de contactarnos

### Código

Importa de la carpeta '@angular/core' los componentes
``` ts
import { Component, OnInit, HostListener } from '@angular/core';
``` 

Agrega un componente *selector* de CSS llamado *app-contact-us*, que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, se agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para utilizar en este componente.
``` ts
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
``` 

Exporta la clase ContactUsComponent para ser usada en otras instancias
``` ts
export class ContactUsComponent implements OnInit {
  // codigos siguientes
}
``` 

Para la clase *ContactUsComponent* se crean el atributo: *scrolled*
``` ts
  public scrolled: boolean;
``` 

La clase *ContactUsComponent* recibe como parametros los servicios necesarios para sus funciones y inicializa sus variables
``` ts
  constructor(){
    this.scrolled = false;
  }
``` 

Este método de la clase *ContactUsComponent*, hace un llamado al componente y lo inicia.
``` ts
ngOnInit(): void {}
``` 

Este método de la clase *ContactUsComponent*, reacciona cada vez que se scrollea en la pantalla
``` ts
@HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY >= 150;
  }
```