# Documentación navbar.html

### Esta sección contiene la documentación del navbar.html del componente navbar de la página web. Dentro de su estructura visual posee: 
* Darktoogle: llamado al componente *darktoggle*, es el botón para alternar el tema de la página entre modo claro y oscuro.
* Logo UCR: logo representativo de la Universidad de Costa Rica, al dar click, redirige a la página oficial de la universidad.
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
``` html 
<div class="header-container">
  ...
</div>
``` 

Esta etiqueta **div** tiene la clase *logo-container* y encapsula el botón darktoggle y el logo del encabezado.
``` html
<div class="logo-container">
  <app-darktoggle></app-darktoggle>
  <a href="https://www.ucr.ac.cr/">
    <picture>
      <source srcset="../../../assets/images/logo-ucr-dark.png" *ngIf='theme === "dark"'>
      <img width="110px" src="../../../assets/images/logo-ucr-light.png">
    </picture>
  </a>
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
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <svg xmlns="http://www.w3.org/2000/svg" style="fill:var(--hamburger);" height="24" viewBox="0 0 24 24"
    width="24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
</button>
```

Esta etiqueta **div** con el identificador *navbarNav* es el contenedor de las opciones disponibles para navegar a través del sitio web. 
``` html
<div class="navbar-collapse  collapse no-transition" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" routerLink="/inicio" routerLinkActive="active-link"
        [attr.data-toggle]="matchQuery ? 'collapse' : null"
        [attr.data-target]="matchQuery ? '#navbarNav' : null">Inicio
        <hr routerLinkActive="underline-text-decoration">
      </a>

    </li>
    <li>
      <a class="nav-link" routerLink="/blog" routerLinkActive="active-link"
        [attr.data-toggle]="matchQuery ? 'collapse' : null"
        [attr.data-target]="matchQuery ? '#navbarNav' : null">Blog
        <hr routerLinkActive="underline-text-decoration">
      </a>
    </li>

    <li class="nav-item">
      <a class="nav-link" routerLink="/nosotros" routerLinkActive="active-link"
        [attr.data-toggle]="matchQuery ? 'collapse' : null"
        [attr.data-target]="matchQuery ? '#navbarNav' : null">Nosotros
        <hr routerLinkActive="underline-text-decoration">
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/directorio" routerLinkActive="active-link"
        [attr.data-toggle]="matchQuery ? 'collapse' : null"
        [attr.data-target]="matchQuery ? '#navbarNav' : null">Directorio
        <hr routerLinkActive="underline-text-decoration">
      </a>

    </li>
  </ul>
</div>
``` 
