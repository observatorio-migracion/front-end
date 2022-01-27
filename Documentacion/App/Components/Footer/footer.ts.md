# Documentacion footer.ts

 Esta seccion contiene la documentacion del footer.ts del componente footer de la pagina web. Dentro de su estructura visual posee: 
* Footer: Esta sección detallará información importante sobre la página, entre esta se encuentra información sobre la UCR e información para contactar la página.

### Codigo
Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
``` 
Agrega un componente selector de CSS llamado app-footer que identifica esta directiva en una plantilla y activa la instanciación de la directiva.  Luego se arega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último se agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class FooterComponent implements OnInit {
  // codigos siguientes
}
```

Inicializa el constructor del componente con los atributos privado, en particular este se encuentra vacío debido a que no se pensaron valores en particular para inicializar
``` ts
  constructor() { }
```

Único método del ts, hace un llamado al componente y lo inicia, en particular carga los datos generados desde el html y el css.
```ts
  ngOnInit(): void {
  }
``` 
