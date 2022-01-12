# Documentacion phonebook.html

Esta seccion contiene la documentacion del codigo .html del elemento phonebook de la pagina web. Dentro de su estructura visual posee: 
* Barra de bsusqueda: Cuadro donde se escribe el texto para realizar la busca de un contacto que lo contenga o así como un botón con el icono de busqueda
* Lista de contactos: se muestra una lista de contactos ya sea los axistentes aí como los ingresados en la barra de busqueda, en el queb cada uno muestra su titulo así como una  lista de sus números de telefono. Al dar click a un contacto muestra un Modal con la información completa del contacto
* Modal de información: muestra el título, la descripción, el horario, un enlace al lugar, un enlace al sitio web y una lista de los numeros de telegono del contacto. Al final sale un botón para cerrar
* Botón para ir arriba: este se puede clikear y presenta la parte superior de la página, es descrito en el componente fab
* Footer:  muestra los detalles descritos en el componente footer

### Codigo

Este elemento es muy útil para controlar el scroll infinito de la pagina, engloba el model del contacto que se muestra al usuario y 
``` html
<div infiniteScroll [infiniteScrollDistance]="2" (scrolled)="onScroll()" style="min-height: 100%">
 <-- code -->
 <div>
```

Este contenedor tiene:
+ Buscador: un container de busqueda en el cual, mediante un input se puede ingresar texto para buscar un contacto que conicida con el texto ingresado, llanando a un metodo que carga y retorna la lista de contactos buscados. Además posee un icono que respresenta un botón de busqueda
+ Un parrafo de instrucciones para el usuario
+ Por ultimo un contenedor de contacto el cual es utilizado para mostrar de la lista de contactos o el resultado de la consulta a la busqueda anterior mente realizada, cada uno con las siguientes partes 
  + AsK-------------------------------------------------------!!!!! todo: ask
  +  El titulo del contacto, si se hace clock muestra la información del contacto
  +  Una lista y enlace de los numeros de telefono asociados al contacto
``` html 
    <div class="container">
        <div class="search-container">
            <div class="search-form">
                <input type="text" placeholder="Buscar" class="search-input" [(ngModel)]="searchQuery"
                    (ngModelChange)="loadContactListSearch()">
                <img alt="menu" class="search-button" src="assets/icons/search.svg" width="24px" heigth="24px">
            </div>
        </div>
        <p id="instructions">Seleccione alguno de los contactos para ver más información de este.
        <p>

        <div class="contact-container">
            <div class="contact" *ngFor="let contact of contactList; let i = index">
                <div class="initial-letter" (click)="showContact(contact)"
                    *ngIf="renderFirstLetter(contact, contactList[i-1], i);"><b>{{contact.titulo[0]}}</b>
                </div>
                <p class="contact-title" data-bs-toggle="modal" data-bs-target="#contactModal"
                    (click)="showContact(contact)">{{contact.titulo}}
                </p>
                <div class="phone-list">
                    <a href="tel:{{number}}" *ngFor="let number of contact.numberList">{{number}}</a>
                </div>
            </div>
            <br>
        </div>
    </div>

```

El siguiente código es la parte que define un modal dialog para mostrar la informacion del contacto.
+ El modal incluye un header con el titulo del contacto
+ También tiene un cuerpo donde de presenta la descripción del contacto, con la ayuda de la clase phone-List se mustran los enlaces a la lista de numeros de telefono del contacto, el horario del contacto, el lugar del contacto, una opción de enlace para que el usuario pueda ver la ubicación, otra opción para que el usuario pueda acceder a un enlace a un sitio web. 
+ Por último un footer con estilos definidos específicos para poder realizar la accion de cerrar el modal

``` html
    <div class="modal fade"  tabindex="-1" id="contactModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{contactSelected.titulo}}</h5>

                </div>
                <div class="modal-body">
                    <p><b>Descripción: </b>{{contactSelected.descripcion}}</p>
                    <br>
                    <div class="phone-list"><b>Tel: </b><a href="tel:{{number}}"
                            *ngFor="let number of contactSelected.numberList">{{number}}</a>
                    </div>
                    <br>
                    <p><b>Horario: </b>{{contactSelected.horario}}</p>
                    <br>
                    <p><b>Lugar: </b>{{contactSelected.lugar}}</p>
                    <br>
                    <p *ngIf="contactSelected.gps"><a href="{{parseURL(contactSelected.gps)}}">Ver Dirección</a></p>
                    <br>
                    <p><b>Web: </b> <a href="{{parseURL(contactSelected.web)}}">{{parseURL(contactSelected.web)}}</a></p>
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

Esta parte del codigo contiene un componente que se incluye un botón para ir a la parte superior de la página
``` html
    <app-fab (click)="goTop()"></app-fab>
``` 

Finalmente se realiza una llamada al componente del footer
``` html 
<app-footer></app-footer>
```