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

Esta etiqueta **h1** tiene el titulo de la sección de Categorías, y tambien tiene la clase *.horizontal-bar .horizontal-bar-01*
```html 
<h1 class="horizontal-bar horizontal-bar-01">
    Categorías  
</h1>
```

Esta etiqueta **div** tiene la clase *.categories-container*, que almacena las distintas categorias que se van a obtener por medio del *ngFor que obtiene todas las categorías y las despliega en los **div** de clase *.category* con su respectiva imagen y nombre y que al ser clickeado filtra los post segun la categoría que se clickeo.

``` html
<div class="categories-container">
    <div class="category" 
         *ngFor="let category of categories" 
         (click)="filterPostsByCategory(category)">
        <img class="img-fluid"  
             alt="category.nombre" 
             *ngIf="category.imagen" 
             src="{{category.imagen.formats.small.url}}"
             width="420px" 
             height="236px">
    </div>
</div>
```

Esta etiqueta **div** tiene la clase *.action-container*, donde esta el botón para tener mas categorías.
  * falta: preguntar si se recarga solo esta parte para presentar en el ng for todas las categotías disponibles y preguntar cuantas enseña por default 
``` html
<div class="action-container">
    <button *ngIf="seeMoreCategories" 
            class="action-container-btn-warning" 
            mat-raised-button (click)="loadMoreCategories()">
        Ver más  
    </button>
</div>
```

Esta etiqueta **h1** tiene el titulo de la sección de Publicaciones recientes, y tambien tiene la clase *.horizontal-bar y .horizontal-bar-02*. 
``` html
<h1 class="horizontal-bar horizontal-bar-02">
    Publicaciones recientes
</h1>
```

Esta etiqueta **div** tiene la clase *.custom-container*, que almacena los distintos posts que se van a obtener por medio del *ngFor que obtiene todos los posts y los despliega en los **app-post-card**.
``` html
<div class="custom-container">
    <app-post-card *ngFor="let post of postsList" 
                   [post]="post">
    </app-post-card>
</div>
```

Esta etiqueta **div** tiene la clase *.action-container*, donde esta el botón para ir a la página de blog.
``` html
<div class="action-container">
    <button class="action-container-btn-warning"
            mat-raised-button routerLink="/blog">
        Ir al blog
    </button>
</div>
```
<br/>

Esta etiqueta **div** tiene la clase *.events-container*, en donde va a sección de eventos próximos, que se guardan en la **div** con clase *.custom-table*, que se obtienen mediante un *ngFor, para desplegarlos en **div** que tienen la clase *.row*
``` html
    <div class="events-container">
        <h1>Eventos próximos</h1>
        <div class="custom-table">
            <div class="row" 
                *ngFor="let activity of activities">
                <p class="index">
                    {{activity.nombre}}
                </p>
                <br>
                <p>
                    {{activity.fecha | date: 'mediumDate'}} 
                </p>
                <br>
                <p>
                    <a (click)="openActivity(activity)" 
                      data-bs-toggle="modal"
                      data-bs-target="#activityModal"
                      class="activity-see-more">
                      Ver más información
                    </a>
                </p>
            </div>
        </div>
    </div>
```
(esto no existe asi que no se que ponerle)
 # Modal de una actividad: 
 Este codigo muestra la estucra html de un modal para una activdad. Primeramente el div tiene un id como activityModal, y se d efine su clases. Posteriomente se encuentra otro div que es el contenerdor del modal donde se va a tener un header-body-footer. El div del encabezado del modal tiene un titulo con el nombre de la actividad seleccionada. El div del cuerpo del modal donde se ubica la fecha en formato largo, un ngIf por si existe o no una reunión, en el caso de que exista se proporciona el enlace a la actividad  mediante un href, seguidamente su descripción y si existe al igual con un ngIf se muestra el contentHTML. Por último está el footer del modal en la que hay un botón para cerrar el modal.

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

Esta etiqueta **app-footer** contiene al footer de la página
```  html
    <app-footer></app-footer>
```
