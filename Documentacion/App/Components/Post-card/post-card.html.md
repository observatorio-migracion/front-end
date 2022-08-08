 # Documentación post-card.html

 Esta sección contiene la documentación del código .html del componente post-card de la página web. Dentro de su estructura visual posee: 
*  Botón de forma rectangular con la información de la publicación.
*  Imagen de la categoria de la publicación
*  Resumen del contenido del post 
*  Dia de publicacion

### Código

la etiqueta **div** tiene la clase *custum-card* que almacena todo el post card.
``` html
<div class="custom-card">
    ...
</div>
```


la etiqueta **img** contiene la imagen de la categoria a la que pertenece el post.
``` html
<img class="card-img-top" src="{{ image }}" alt="post image" routerLink="/post/{{ id }}" />
```

La etiqueta **div** con la clase *card-body-container* almacena los componentes de texto de la post card.
``` html
<div class="card-body-container">
    ...
</div>
```

La etiqueta **p** con la clase *body-line* contiene la fecha en la que se creo el post.
``` html
<p class="body-line">{{date | date:'longDate'}}</p>
```

La etiqueta **h5** con la clase *card-title* contiene el titulo del post.
``` html
<h5 class="card-title" routerLink="/post/{{id}}"><b>{{title}}</b></h5>
```

La etiqueta **div** con la clase *categories* almacena las categorias del post card.
``` html
<div class="categories">

</div>
```

La etiqueta **mat-chip-list** almacena de manera dinamica los matchips en los que se ponen las categorias del post.
``` html
<mat-chip-list>
    <mat-chip *ngFor="let category of categories" routerLink="/blog/{{category.nombre}}">{{category.nombre}}</mat-chip>
</mat-chip-list>
```

La etiqueta **p** contiene la descripcion del post.

``` html
<p  routerLink="/post/{{id}}"
      style="cursor:pointer;">{{description}}</p>
```
