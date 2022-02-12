# Documentación post-card.ts
*  Botón de forma rectangular con la información de la publicación: Este botón posee 5 secciones: la primera, corresponde a la imagen situada en la parte más superior del botón; la segunda, es un identificador con la fecha de la publicación; la tercera, corresponde al título que identifica a la publicación; la cuarta, son los botones a las categorías ligadas a la publicación, los cuales son clickeables y la quinta, es una descripción de la publicación. Este tipo de botones los podemos encontrar en la sección de posts del navbar y en el inicio de la página. 

### Código
Importa los componentes Component, OnInit e Input desde la API Core de Angular
``` ts
import { Component, OnInit, Input } from '@angular/core';
```

Importa el componente THIS_EXPR desde la API Core de Angular
``` ts
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
```

Importa desde la carpeta models el modelo de Categories y Post.
``` ts
import { Categoria, Post } from 'src/app/models/Post';
```

Importa desde la carpera helpers el ayudador parseURLImage.
``` ts
import { parseURLImage } from '../../helpers/URLparser';
```

Agrega un componente selector de CSS llamado app-blog que identifica esta directiva en una plantilla y activa la instanciación de la directiva.  
``` ts
@Component({
  selector: 'app-blog'
})
```
Agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular.
``` ts
@Component({
  templateUrl: './blog.component.html'
})
```
Agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  styleUrls: ['./blog.component.css']
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class PostCardComponent implements OnInit {

}
```

Asigna una variable llamada id de tipo string que contiene el valor del identificador para el elemento actual.
``` ts
id: string | undefined;
```

Asigna una variable llamada title de tipo string que contiene el valor del título para el elemento actual.
``` ts
title: string | undefined;
```

Asigna una variable llamada description de tipo string que contiene el valor de la description para el elemento actual.
``` ts
description: string | undefined;
```

Asigna una variable llamada image de tipo string que contiene el valor del path de la imagen para el elemento actual.
``` ts
image: string | undefined;
```

Asigna un arreglo llamado categories de tipo Categoria que recibe la lista de categorias del elemento actual.
``` ts
categories: Categoria[] | undefined;
```

Asigna una variable llamada date de tipo Date que recibe la fecha de creación del elemento actual.
``` ts
date: Date | undefined;
```

Recibe un elemento de tipo Post el cual es un atributo dado por la entrada.
``` ts
@Input() post: Post | undefined;
```

Método constructor de la clase.
``` ts
constructor() { }
```

Método void que opera la clase.
``` ts
ngOnInit(): void {
}
```

Llamada en el ngOnInit. Asigna el valor a la variable local del id del elemento recibido como entrada si este es válido, sino mantiene su valor por defecto.
``` ts
this.id = this.post?.id;
```

Llamada en el ngOnInit. Asigna el valor a la variable local del title del elemento recibido como entrada si este es válido, sino mantiene su valor por defecto.
``` ts
this.title = this.post?.titulo;
```

Llamada en el ngOnInit. Asigna el valor a la variable local del description del elemento recibido como entrada si este es válido, sino mantiene su valor por defecto.
``` ts
this.description = this.post?.descripcion;
```

Llamada en el ngOnInit, mediante el método de parse de la clase, toma el url de la imagen que se muestra en el card, el path es recibido y se le asigna a la variable image.
``` ts
this.image = parseURLImage(this.post?.miniatura?.formats?.medium?.url);
```

Llamada en el ngOnInit. Asigna el valor a la variable local del categories del elemento recibido como entrada si este es válido, sino mantiene su valor por defecto.
``` ts
this.categories = this.post?.categorias;
```

Llamada en el ngOnInit. Asigna el valor a la variable local de date del elemento recibido como entrada si este es válido, sino mantiene su valor por defecto.
``` ts
this.date = this.post?.published_at;
```

Método de la clase post-card.ts que recibe un delimitador llamado delimiter y una hilera llamada str. Modifica el valor entrado por parámetro con la dirección del path y retorna el valor obtenido.
``` ts
parseString(delimiter: number, str: string | undefined) {
    let result: string = '';
    if (str) {
      result = str.length > delimiter ? str.substr(0, delimiter) + ' ...' : str;
    }
    return result;
  }
```


Método de la clase post-card.ts que recibe un elemento de tipo categoría.
``` ts
filterByCategory(category:Categoria){

}
```
