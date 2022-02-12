# Documentación fab.ts

### Esta sección contiene la documentación del código fab.ts del componente fab de la página web. Dentro de su estructura visual posee: 
*  Botón circular: Botón ubicado en la parte inferior derecha, en las páginas de *Directorio* y *Blog*. Este botón permite al usuario volver al inicio de la página, dicho botón posee forma circular con una flecha en dirección superior, además puede cambiar sus colores al alternar entre modo claro y modo oscuro para mejorar la legibilidad de este. 

### Código

Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
```

Agrega un componente *selector* de CSS llamado *app-blog* que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
})
```

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class FabComponent implements OnInit {
  //...
}
```

Se definen dos decoradores en la clase *FabComponent*: *color* y *backgroundColor*.
``` ts
@Input() color: string;
@Input() backgroundColor: string;
```

El constructor de la clase *FabComponent* inicializa dos variables.
``` ts
constructor() {
  this.color = 'var(--fab-color)';
  this.backgroundColor = 'var(--fab-background-color)';
}
```

Este método del TypeScript que opera a la clase *FabComponent* se encuentra vacío, debido a que este no maneja instrucciones internas para sus procesos. 
``` ts
ngOnInit(): void {
}
```
