# Documentación blog.html

 Esta sección contiene la documentación del código .html del elemento blog de la página web. Dentro de su estructura visual posee: 
*  Barra de búsqueda: se posiciona en el margen derecho, filtra las búsquedas del usuario de forma activa por lo que no requiere recargar la página y se encuentra anclada por lo cual no se moverá al deslizar la pagina
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la página principal, el segundo es el corresponde al botón que redirige al mismo blog, el tercer botón redirige a la página de nosotros, y el cuarto al área de directorio.
*  Botón superior de modo oscuro/claro: el botón se sitúa en el margen superior izquierdo, dicho botón es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior Inicio: un botón ubicado en el margen superior izquierdo debajo del botón de modo oscuro claro, su función consiste en volver a la página inicio.
*  Botón logo UCR: un botón anclado en el margen superior derecho, su función es redirigir a la página de la Universidad de Costa Rica.
*  Botón filtrar: un botón anclado en el margen izquierdo posee una barra desplegable que revela algunos botones los cuales al hacer click filtran los resultados mostrados en el curso de la página por las categorías seleccionadas.
*  Botón de regreso a la parte superior: un botón ubicado en el margen inferior derecho se mueve junto con el scroll por lo cual no desaparece de la pantalla, su función es volver a la parte superior de la página al hacer click.
*  Cuerpo de la página: comprende el centro de la página web en esta sección se despliegan los distintos posts que se agregan a la página, posee la propiedad de scroll infinito lo cual hace que al bajar a la página se carguen los demás posts con forme se desciende en la lista.

### Código
 Hace un llamado a la función de scroll infinito, permite que la pagina conforme se baja siga cargando de forma activa las entradas.

``` html
 <div class="infinite-scroll" infiniteScroll [infiniteScrollDistance]="2" (scrolled)="onScroll()"> 
``` 
<br/>

 Crea divisores de html, el primero es un contenedor con los demás contenedores dentro. Todos los contenedores están señalados por clase.

``` html
  <div class="tools">
    <div class="row">
      <div class="dropdown">
      </div>
    </div>
  </div>
```

 Crea un botón en html que corresponde al botón de categorías desplegables. Posee atributos de nombres de clase e id.

``` html
<button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button"
          id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          Filtrar por categorías
</button>
```

 Crea una etiqueta que enlaza a un componente de angular, esta se encarga de llamar a las categorías que van en el botón de filtro por categorías, mediante un ciclo (ngfor) recorre el arreglo de categorías para desplegarlas al presionar el botón.
``` html
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" *ngIf="categoriesList.length">
          <a class="dropdown-item" *ngFor="let category of categoriesList" onclick="event.stopPropagation()">
            <mat-checkbox class="category-checkbox" [(ngModel)]="category.value" (change)="valueChanged(category)"><span
                class="category-checkbox-label">{{category.name}}</span></mat-checkbox>
          </a>
</div>
```

 Crea un divisor que contienen el botón de búsqueda en la página, dentro permite que cada vez que se haga una escritura en el cuadro de búsqueda se haga un llamado al método de typescript para refrescar los posts que se muestran. Por último, en la línea 21 hace una modificación a la imagen que es la que se muestra como botón de búsqueda.
``` html
      <div class="search-container">
        <div class="search-form">
          <input type="text" placeholder="Buscar" class="search-input" [(ngModel)]="searchQuery"
            (ngModelChange)="loadPostListSearch()">
          <img alt="menu" class="search-button" src="assets/icons/search.svg" width="24px" heigth="24px">
```

Botón para ir a la parte superior de la página indistintamente de la posición actual, si ya se encuentra en la parte superior quedara en el mismo lugar.
``` html
<app-fab (click)="goTop()"></app-fab>
```

 Llamada al método que permite cargar los posts de la página.
``` html
<div class="custom-container" *ngIf="postsList.length">
    <app-post-card *ngFor="let post of postsList" [post]="post"></app-post-card>
  </div>
```
