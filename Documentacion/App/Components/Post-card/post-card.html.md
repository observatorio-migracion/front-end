 # Documentación post-card.html

 Esta sección contiene la documentación del código .html del componente post-card de la página web. Dentro de su estructura visual posee: 
*  Botón de forma rectangular con la información de la publicación: Este botón en particular posee varias secciones, la primera corresponde a la imagen situada en la parte más superior del botón, posteriormente seguido de la imagen podemos encontrar un identificador con la fecha de la publicación, seguido justamente debajo encontramos el título que identifica a la publicación, seguidamente encontramos los botones a las categorías ligadas a la publicación estos son clickeables y por último en la parte más inferior encontramos una descripción de la publicación. Este tipo de botones los podemos encontrar en la sección de posts del navbar y en el inicio de la página. 

### Código

Divisor de HTML que define la clase llamada custom-card que encierra a todo el post-card
``` html
<div class="custom-card">

</div>
```


Clase de tipo imagen llamada card-img-top esta corresponde a la imagen situada encima del post card, la fuente src es definida a través de su direccionamiento local, define la etiqueta alt como un detalle llamado post image en caso que la imagen no pueda ser visualizada, se le asigna un ancho de 280px por defecto y una altura de 240px, seguidamente se le asigna un ancho y altura máximos como 280px y 240px respectivamente, se define el routerLink mediante el direccionamiento de Angular identificado por su id y se asigna su style mediante un llamado inline que lo establece como pointer para dar la propiedad de un botón al posicionar el direccionador.
``` html
<img class="card-img-top" src="{{image}}" alt="post image" width="280px" 
height="240px" max-width="280px" max-height="240px" 
routerLink="/post/{{id}}" style="cursor:pointer;">
```

Etiqueta divisora de HTML que identifica al cuerpo del card este incluye todo lo que se encuentra debajo de la imagen que se visualiza del elemento.
``` html
<div class="card-body-container">

</div>
```

Etiqueta llamada body-line que incluye la fecha del card que se muestra, esta se encuentra en formato extendido.
``` html
<p class="body-line">{{date | date:'longDate'}}</p>
```

Etiqueta llamada card-title se encuentra definida como título de tipo h5 y en esta se direcciona al nombre del card basado en su id de creación, este título se encuentra resaltado mediante el atributo bold.
``` html
<h5 class="card-title" routerLink="/post/{{id}}"><b>{{title}}</b></h5>
```

Etiqueta llamada categories que incluye las categorías (chips) que se situados bajo el título del card. 
``` html
<div class="categories">

</div>
```

Llamada a función de Angular que muestra todas las categorías del card del elemento actual, estos están identificados a través del routerLink, este es recorrido y se devuelve las respectivas categorías.
``` html
<mat-chip-list>
    <mat-chip *ngFor="let category of categories" routerLink="/blog/{{category.nombre}}">{{category.nombre}}</mat-chip>
</mat-chip-list>
```

Etiqueta de tipo párrafo que contiene la descripción del card actual esta es obtenida a través del routerLink.
``` html
<p  routerLink="/post/{{id}}"
      style="cursor:pointer;">{{description}}</p>
```
