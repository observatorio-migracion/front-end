# Documentacion post.html

Esta seccion contiene la documentacion del codigo .html del elemento post (publicacines) de la pagina web. Dentro de su estructura visual posee: 
* Titulo : es el titulo asignado a la publicación 
* Fecha de publicación: fecha en que se creó la publicación en un formáto corto.
* Chip de las categorías: muestra la(s) categoría(s) de una publicación.
* Decripción breve: presenta una breve descripción  de la publicación. 

### Codigo
Titulo de la publicación tipo 1.
``` html
<h1>{{title}}</h1>
``` 

Texto con la fecha de la publicación e un formarto short(corto)
``` html
<p>{{date | date: 'short'}}</p>
``` 
Un div con la clase categories que contiene un tipo de 
componente de angular material que muestra la lista de categorías de chips(fichas) individuales.
``` html
<div class="categories">
    <mat-chip-list>
      <mat-chip *ngFor="let category of categories">{{category.nombre}}</mat-chip>
    </mat-chip-list>
  </div>
``` 

Un div con la clase post-container, permite cargar la descripcion del texto de una publicación.
``` html
<div class="post-container" *ngIf="contentHTML" [innerHTML]="contentHTML"></div>
``` 




