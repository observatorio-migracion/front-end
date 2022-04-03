# Documentacion home.html

### Esta seccion contiene la documentacion del codigo .html del elemento home de la pagina web. Dentro de su estructura visual posee: 
* Información de la pagina: Proyecto del Observatorio de Migración.
*  Titulo "Categorias": siguiente parte de categorias
*  Listado de las categorías existentes: contiene los nombres y las imágenes de las primeras 4  categorias 
*  Botón "ver más": opción para ser seleccionada y ver las demás categorias exixtentes   
*  Titulo "Publicaciones recientes": siguiente parte de publicaciones recientes
*  Listado de Post Cards: listado de los post cards de los post
*  Botón "Ir al blog": Botón que lleva al usuario al página del blog = /blog
*  Titulo "Eventos Proximos": siguiente parte de eventos próximos
*  Lista de actividades: para cada una de las activiades se puede observar el nombre, la fecha y "ver más información" que lleva a un modal
*  Modal de más informacion: muestra la informacion completa de la actividad, incluye el tituno que es el nombre, la fecha en formato extentido, el enlace a la actividad, su descripción, entre otros
*  Footer: llamado al componente de footer

### Codigo

Esta etiqueta **div** tiene la clase *.main-text-container*, que tiene texto sobre el proyecto
``` html 
    <div class="main-text-container"> 
        El Observatorio de Migración es un proyecto ...    
    </div>
```

Esta etiqueta **h1** tiene el titulo de la sección de Categorías, y tambien tiene la clase *.horizontal-bar*
```html 
<h1 class="horizontal-bar">
    Categorías
</h1>
```

Esta etiqueta **div** tiene la clase *.categories-container*, que almacena las distintas categorias que se van a obtener por medio del *ngFor que obtiene todas las categorías y las despliega en los **div** de clase *.category* con su respectiva imagen y nombre y que al ser clickeado filtra los post segun la categoría que se clickeo.

``` html
<div class="categories-container">
  <div
    class="category"
    *ngFor="let category of categories"
    (click)="filterPostsByCategory(category)"
  >
    <img
      class="img-fluid"
      alt="category.nombre"
      *ngIf="category.imagen"
      src="{{ category.imagen.formats.small.url }}"
    />
  </div>
</div>
```
Esta etiqueta **div** tiene la clase *.button-container*, que almancena el boton para ver mas categorias.
```html
<div class="button-container">
  <button
    *ngIf="seeMoreCategories"
    class="button-container-btn-warning"
    mat-raised-button
    (click)="loadMoreCategories()"
  >
    Ver más
  </button>
</div>
```

Esta etiqueta **h1** tiene el titulo de la sección de Publicaciones recientes, y tambien tiene la clase *.horizontal-bar*. 
``` html
<h1 class="horizontal-bar">
    Publicaciones recientes
</h1>
```

Esta etiqueta **div** tiene la clase *.posts-container*, que almacena los distintos posts que se van a obtener por medio del *ngFor que obtiene todos los posts y los despliega en los **app-post-card**.
``` html
<div class="posts-container">
    <app-post-card *ngFor="let post of postsList" 
                   [post]="post"
                   class = "post">
    </app-post-card>
</div>
```
Esta etiqueta **div** tiene la clase *.button-container*, que almancena el boton para ver mas post, que redirige la página a la sección de blog
``` html
<div class="button-container">
  <button class="button-container-btn-warning"
          mat-raised-button routerLink="/blog">
        Ir al blog
  </button>
</div>
```

Esta etiqueta **app-footer** contiene al footer de la página
```  html
    <app-footer></app-footer>
```
