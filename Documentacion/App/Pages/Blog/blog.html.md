# Documentación blog.html

### Esta sección contiene la documentación del código .html del elemento blog de la página web. Dentro de su estructura visual posee: 
*  Barra de búsqueda: posicionada en el margen derecho. Filtra las búsquedas del usuario de forma activa.
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas: el primero, lleva a la página principal; el segundo, redirige al mismo blog; el tercero, redirige a la página de nosotros y el cuarto, al área de directorio.
*  Botón superior de modo oscuro/claro: situado en el margen superior izquierdo, es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior de Inicio: ubicado en el margen superior izquierdo, debajo del botón de modo oscuro claro. Su función consiste en volver a la página inicio.
*  Botón logo UCR: anclado en el margen superior derecho. Su función es redirigir a la página de la Universidad de Costa Rica.
*  Botón filtrar: anclado en el margen izquierdo. Posee una barra desplegable y filtra los resultados mostrados en la página según las categorías seleccionadas.
*  Botón de regreso a la parte superior: ubicado en el margen inferior derecho. Se mueve con el scroll. Su función es volver a la parte superior de la página al hacer click.
*  Cuerpo de la página: comprende el centro de la página web. En esta sección se despliegan los distintos posts.Posee la propiedad de scroll infinito, lo cual hace que al bajar en la página se carguen los demás posts.

### Código
 Esta etiqueta **div** tiene la clase *infinite-scroll* que hace un llamado a la función de scroll infinito.

``` html
 <div class="infinite-scroll" infiniteScroll [infiniteScrollDistance]="2" (scrolled)="onScroll()"> 
``` 
<br/>

 Estas etiquetas **div** tienen las clases *tools*, *rows* y *dropdown* que se usan como contenedores de las secciones.

``` html
  <div class="tools">
    <div class="row">
      <div class="dropdown">
      </div>
    </div>
  </div>
```

Esta etiqueta **button** tiene la clase *btn btn-secondary dropdown-toggle* que corresponde al botón de categorías desplegables.

``` html
<button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button"
          id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          Filtrar por categorías
</button>
```

 Esta etiqueta **div** tiene la clase *dropdown-menu* que enlaza a un componente de angular y se encarga de llamar a las categorías que van en el botón de filtro por categorías.
``` html
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" *ngIf="categoriesList.length">
          <a class="dropdown-item" *ngFor="let category of categoriesList" onclick="event.stopPropagation()">
            <mat-checkbox class="category-checkbox" [(ngModel)]="category.value" (change)="valueChanged(category)"><span
                class="category-checkbox-label">{{category.name}}</span></mat-checkbox>
          </a>
</div>
```

Esta etiqueta **div** tiene la clase *search-container* que contienen el botón de búsqueda en la página, permite que cada vez que se haga una escritura en el cuadro de búsqueda se llame al método de typescript para refrescar los posts. 
``` html
      <div class="search-container">
        <div class="search-form">
          <input type="text" placeholder="Buscar" class="search-input" [(ngModel)]="searchQuery"
            (ngModelChange)="loadPostListSearch()">
          <img alt="menu" class="search-button" src="assets/icons/search.svg" width="24px" heigth="24px">
```

Esta etiqueta **app--fab** tiene un botón para ir a la parte superior de la página.
``` html
<app-fab (click)="goTop()"></app-fab>
```

 Esta etiqueta **div** tiene un llamado al método que permite cargar los posts de la página.
``` html
<div class="custom-container" *ngIf="postsList.length">
    <app-post-card *ngFor="let post of postsList" [post]="post"></app-post-card>
  </div>
```
