# Documentacion home.html

### Esta seccion contiene la documentacion del codigo .html del elemento home de la pagina web. Dentro de su estructura visual posee: 
* ### Información de la pagina: Proyecto del Observatorio de Migración.
* ### Titulo "Categorias": siguiente parte de categorias
* ### Listado de las categorías existentes: contiene los nombres y las imágenes de las primeras 4  categorias 
* ### Botón "ver más": opción para ser seleccionada y ver las demás categorias exixtentes   
* ### Titulo "Publicaciones recientes": siguiente parte de publicaciones recientes
* ### Listado de Post Cards: listado de los post cards de los post
* ### Botón "Ir al blog": Botón que lleva al usuario al página del blog = /blog
* ### Titulo "Eventos Proximos": siguiente parte de eventos próximos
* ### Lista de actividades: para cada una de las activiades se puede observar el nombre, la fecha y "ver más información" que lleva a un modal
* ### Modal de más informacion: muestra la informacion completa de la actividad, incluye el tituno que es el nombre, la fecha en formato extentido, el enlace a la actividad, su descripción y ________
* ### Footer: llamado al componente de footer

### Codigo

Main text conteiner: contiene el texto de la infomracion del obsevatorio.

``` html 
    <div class="main-text-container"> El Observatorio de Migración es un proyecto ... </div>
```
<br/>

Titulo de las Categorías y un div como el contenedor de categorías el cual tiene otro div cde categoria con un ngFor de la lista de categorías filtrando los post por categoría en la que cada una se mostrará con su nombre e imagen la cual se recupera de la ruta en la que se encuentra  y con un ancho y altura establecido para midan lo mismo.

``` html
    <h1 class="horizontal-bar horizontal-bar-01">Categorías</h1>
    <div class="categories-container">
        <div class="category" *ngFor="let category of categories" (click)="filterPostsByCategory(category)">
            <img class="img-fluid" alt="category.nombre" *ngIf="category.imagen" src="{{category.imagen.formats.small.url}}"
            width="420px" height="236px">
        </div>
    </div>
```

Un div de contenedor de acción el cual tiene un botón con el texto "Ver más" el cual al recibir un click llama la función de cargar las demás categorías que no han sido presentadas al usuario. 
  * falta: preguntar si se recarga solo esta parte para presentar en el ng for todas las categotías disponibles y preguntar cuantas enseña por default 

``` html
    <div class="action-container">
        <button *ngIf="seeMoreCategories" class="action-container-btn-warning" mat-raised-button
            (click)="loadMoreCategories()">Ver más</button>
    </div>
```

<br/> 

#### Titulo de las Publicaciones recientes y un div como el contenedor custom el cual tiene una llamda al  componente  app-post-card pasandole un ngFor por la lista de post existentes.

``` html
    <h1 class="horizontal-bar horizontal-bar-02">Publicaciones recientes</h1>

    <div class="custom-container">
        <app-post-card *ngFor="let post of postsList" [post]="post"></app-post-card>
    </div>
```

 <br/>


#### Un div de contenedor de acción el cual tiene un botón con el texto "Ir al blog" el cual al recibir un click se vuelve un router link el cual dirige al usuario hacai la página del blog en la direción "/blog ". 

``` html
    <div class="action-container">
        <button class="action-container-btn-warning" mat-raised-button routerLink="/blog">Ir al blog</button>
    </div>
```
<br/>

#### Segudamente un div que es un contenedor de elementos que contiene primeramente el titulo de "eventos pr+oximos", luego otro div del tipo custom-table para ser posible que en cada columna(row) se ecnuantre una actividad recividas por el NgFor de la lista de actividades, en la que para cada una de las actividades se mostrtá su nombre, fecha en formato de tamaño medio y por último un botón que dice ver "Ver más Información" y cuando se le hace click muestra un modal en la pantalla con la información completa de la actividad.

``` html
    <div class="events-container">
        <h1>Eventos próximos</h1>
        <div class="custom-table">
            <div class="row" *ngFor="let activity of activities">
                <p class="index">{{activity.nombre}}</p>
                <br>
                <p>{{activity.fecha | date: 'mediumDate'}} </p>
                <br>
                <p><a (click)="openActivity(activity)" data-bs-toggle="modal" data-bs-target="#activityModal"
                        class="activity-see-more">Ver más información</a></p>
            </div>
        </div>
    </div>
```
<br/>

#### Modal de una actividad: Este codigo muestra la estucra html de un modal para una activdad
#####  Primeramente el div tiene un id como activityModal, y se d efine su clases. Posteriomente se encuentra otro div que es el contenerdor del modal donde se va a tener un header-body-footer. El div del encabezado del modal tiene un titulo con el nombre de la actividad seleccionada. El div del cuerpo del modal donde se ubica la fecha en formato largo, un ngIf por si existe o no una reunión, en el caso de que exista se proporciona el enlace a la actividad  mediante un href, seguidamente su descripción y si existe al igual con un ngIf se muestra el contentHTML. Por último está el footer del modal en la que hay un botón para cerrar el modal.

``` html
<div class="modal fade" tabindex="-1" id="activityModal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{activitySelected.nombre}}</h5>

            </div>
            <div class="modal-body">
                <p><b>Fecha: </b>{{activitySelected.fecha | date:'longDate'}}</p>
                <br>
                <span *ngIf="activitySelected.reunion">
                    <p><b>Enlace Actividad: </b> <a style="color: var(--warning-01)" href="http://{{activitySelected.reunion}}">{{activitySelected.reunion}}</a></p>
                    <br>
                </span>
                <p><b>Descripción: </b></p>
                <br>
                <div *ngIf="contentHTML" [innerHTML]="contentHTML">{{contentHTML}}</div>

            </div>
            <div class="modal-footer">
                <button type="button" mat-raised-button
                    style="background-color: var(--warning-02); color:var(--font-4);"
                    data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
```
<br/>

### Finalmente se realiza una llamada al componente del footer

```  html
    <app-footer></app-footer>
```
