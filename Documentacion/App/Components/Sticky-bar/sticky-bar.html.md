# Documentación sticky-bar.html

### Esta sección contiene la documentación del sticky-bar.html del componente sticky-bar de la página web. Dentro de su estructura visual posee: 
* Se mantiene en la parte superior de la pantalla al hacer scroll
* Observatorio de Migración: nombre de la página, al dar click, redirige a la página principal del Observatorio.
* Barra de navegación: muestra las diferentes opciones de pagínas para que el usuario pueda navegar a través de ellas.

### Código

Esta etiqueta **div** tiene la clase *nav-container* y encapsula todo el código base del navbar.
``` html 
  <div class="nav-container">
    ...
  </div>
``` 

Esta etiqueta **div** tiene la clase *header-container* y encapsula todo el código base del encabezado. Misma funcionalidad que el *.nav-container*.
En este componente se repite este y todo lo de adentro para hacer posible el cambio de tema
``` html 
    <div id="header-container" 
         style="background-image: url('../../../assets/patterns/patron-light.png');"
         *ngIf="theme === 'light'">
        ...
    </div>
``` 

Esta etiqueta **nav** tiene las clases *navbar* y *navbar-expand-md*, encapsula el texto con el nombre de la página y el despliegue de las opciones del navbar.
``` html 
<nav class="navbar navbar-expand-md">
  ... 
</nav>
```

Esta etiqueta **a** tiene la clase *navbar-brand*, encapsula el texto con el nombre de la página.
``` html
<a class="navbar-brand" href="#">
  <span style="font-size: 1.8rem;">Observatorio</span>
  <br>
  <span style="font-size: 1.5rem;">de Migración</span>
</a>
```

Esta etiqueta **button** tiene la clase *navbar-toggler* y es el contenedor del botón para desplegar las opciones del navbar, el diseño se declara en formato svg. Además, funciona como un componente accionador.
``` html
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
  ...
  </button>
```

Esta etiqueta **div** con el identificador *navbarNav* es el contenedor de las opciones disponibles para navegar a través del sitio web. 
``` html
  <div class="navbar-collapse collapse no-transition" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a
          class="nav-link"
          routerLink="/inicio"
          routerLinkActive="active-link"
          [attr.data-toggle]="matchQuery ? 'collapse' : null"
          [attr.data-target]="matchQuery ? '#navbarNav' : null"
          >Inicio
          <hr routerLinkActive="underline-text-decoration" />
        </a>
      </li>
      <li>
        <a
          class="nav-link"
          routerLink="/blog"
          routerLinkActive="active-link"
          [attr.data-toggle]="matchQuery ? 'collapse' : null"
          [attr.data-target]="matchQuery ? '#navbarNav' : null"
          >Blog
          <hr routerLinkActive="underline-text-decoration" />
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          routerLink="/nosotros"
          routerLinkActive="active-link"
          [attr.data-toggle]="matchQuery ? 'collapse' : null"
          [attr.data-target]="matchQuery ? '#navbarNav' : null"
          >Nosotros
          <hr routerLinkActive="underline-text-decoration" />
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          routerLink="/directorio"
          routerLinkActive="active-link"
          [attr.data-toggle]="matchQuery ? 'collapse' : null"
          [attr.data-target]="matchQuery ? '#navbarNav' : null"
          >Directorio
          <hr routerLinkActive="underline-text-decoration" />
        </a>
      </li>
    </ul>
  </div>
``` 
