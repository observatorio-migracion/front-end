# Documentación post-card.ts

 Esta sección contiene la documentación del Código .ts del componente post-card de la página web. Dentro de su estructura visual posee: 
*  Botón de forma rectangular con la información de la publicación.
*  Imagen de la categoria de la publicación
*  Resumen del contenido del post 
*  Dia de publicacion

### Código

Importa los componentes Component, OnInit e Input desde la API Core de Angular

``` ts
import { Component, OnInit, Input } from '@angular/core';
```
Importa Categories y Post de la carpeta fuente src local del programa
``` ts
import { Categoria, Post } from 'src/app/models/Post';
```
Importa parseURLImage de la carpeta fuente src local del programa ubicada en helpers
``` ts
import { parseURLImage } from '../../helpers/URLparser';
```

Agrega un componente *selector* de CSS llamado *app-post-card* que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para usar en este componente.  
``` ts
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class PostCardComponent implements OnInit {

}
```

Se definen las 7 varieblas de la clase.
``` ts
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  categories: Categoria[] | undefined;
  date: Date | undefined;
  @Input() post: Post | undefined;
```

 Este método del TypeScript hace un llamado al componente y lo inicia.
``` ts
  ngOnInit(): void {
    this.id = this.post?.id;
    this.title = this.post?.titulo;
    this.description = this.post?.descripcion;

    // TODO: Revisar cual es la resolucion mas adecuada
    this.image = parseURLImage(this.post?.miniatura?.formats?.medium?.url);
    this.categories = this.post?.categorias;
    this.date = this.post?.published_at;
  }
```

