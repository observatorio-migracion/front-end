# Documentación faq.ts

### Esta sección contiene la documentación del codigo .ts del elemento faq de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas: el primero, lleva a la página principal; el segundo, redirige al mismo blog; el tercero, redirige a la página de nosotros y el cuarto, al área de directorio.
*  Botón superior de modo oscuro/claro: situado en el margen superior izquierdo, es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior de Inicio: ubicado en el margen superior izquierdo, debajo del botón de modo oscuro claro. Su función consiste en volver a la página inicio.
*  Botón logo UCR: anclado en el margen superior derecho. Su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web. Contiene notas sobre el por qué se lleva a cabo el proyecto y de qué trata.

### Código
Importa los componentes Component y OnInit desde la API Core de Angular.
``` ts
import { Component, OnInit } from '@angular/core';
```
Agrega un componente selector de CSS llamado app-faq que identifica esta directiva en una plantilla y activa la instanciación de la directiva.  
``` ts
@Component({
  selector: 'app-faq'
})
```
Agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular.
``` ts
@Component({
  templateUrl: './faq.component.html'
})
```
Agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  styleUrls: ['./faq.component.css']
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class FAQComponent implements OnInit {

}
```

Inicializa el constructor del componente con los atributos privados.
``` ts
constructor() { }
```

Método que hace un llamado al componente y lo inicia.
``` ts
ngOnInit(): void {
  }
```

Método que carga las faq de la base de datos.
``` ts
loadFAQs(): void {
  }
```

Método que permite mostrar una faq de forma individual en la página.
``` ts
markDowntoHtml(text: string): string {
  }
```
