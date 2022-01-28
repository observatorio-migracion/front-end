# Documentacion post.html

Esta seccion contiene la documentacion del codigo .html del elemento post de la pagina web. Dentro de su estructura visual posee: 
* item : item

### Codigo

``` html
<h1>{{title}}</h1>
``` 

``` html
<p>{{date | date: 'short'}}</p>
``` 

``` html
<div class="categories">
    <mat-chip-list>
      <mat-chip *ngFor="let category of categories">{{category.nombre}}</mat-chip>
    </mat-chip-list>
  </div>
``` 

``` html
<div class="post-container" *ngIf="contentHTML" [innerHTML]="contentHTML"></div>
``` 




