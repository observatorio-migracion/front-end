 # Documentación post-card.html

### Esta sección contiene la documentación del código .html del componente post-card de la página web. Dentro de su estructura visual posee: 
*  Botón de forma rectangular con la información de la publicación: Este botón posee 5 secciones: la primera, corresponde a la imagen situada en la parte más superior del botón; la segunda, es un identificador con la fecha de la publicación; la tercera, corresponde al título que identifica a la publicación; la cuarta, son los botones a las categorías ligadas a la publicación, los cuales son clickeables y la quinta, es una descripción de la publicación. Este tipo de botones los podemos encontrar en la sección de posts del navbar y en el inicio de la página. 

### Código

Esta etiqueta **div** tiene la clase *custom-card* y encapsula todo el código base del card.
``` html
<div class="custom-card">

</div>
```


Esta etiqueta **img** tiene la clase *card-img-top*, su funcionalidad principal es definir las características básicas de la imagen del card.
``` html
<img class="card-img-top" src="{{image}}" alt="post image" width="280px" 
height="240px" max-width="280px" max-height="240px" 
routerLink="/post/{{id}}" style="cursor:pointer;">
```

Esta etiqueta **div** tiene la clase *card-body-container*  y funciona como el contenedor de los elementos del cuerpo del card.
``` html
<div class="card-body-container">

</div>
```

Esta etiqueta **p** tiene la clase *body-line* que incluye la fecha del card.
``` html
<p class="body-line">{{date | date:'longDate'}}</p>
```

Esta etiqueta **h5** tiene la clase *card-title* donde se direcciona al nombre del card basado en su identificador para mostar el título.
``` html
<h5 class="card-title" routerLink="/post/{{id}}"><b>{{title}}</b></h5>
```

Esta etiqueta **div** usa la clase *categories* pasa mostrar las categorías situados bajo el título del card. 
``` html
<div class="categories">

</div>
```

Llamada a la función de Angular que muestra todas las categorías del card del elemento actual. Devuelve las respectivas categorías.
``` html
<mat-chip-list>
    <mat-chip *ngFor="let category of categories" routerLink="/blog/{{category.nombre}}">{{category.nombre}}</mat-chip>
</mat-chip-list>
```

Esta etiqueta **p** contiene la descripción del card actual y se obtiene a través del routerLink.
``` html
<p  routerLink="/post/{{id}}"
      style="cursor:pointer;">{{description}}</p>
```
