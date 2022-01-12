# Documentacion navbar.html

### Esta seccion contiene la documentacion del codigo .html del componente navbar de la pagina web. Dentro de su estructura visual posee: 
* Darktoogle : llamado al componente darktoggle, es el botón para cambiar entre el modo claro y el modo oscuro el tema de la página
* Logo UCR : logo representativo de la Universidad de Costa Rica, al dar click redirige a la página inicial   de la universidad
* Observatorio de Migración: nombre de la página que al dar click redirige a la página principal del observatorio
* Barra de navegación : muestra las diferentes opciones de pagínas para que el usuario pueda navegar a treavez de ellas,  entre ellas se encuentran el inicio, blog, nosotros, directorio
* Barra de  decoración : es ua barra cuya unica funcionalidad es mostrar la misma imagen que la barra de arriba para efectos de estética, una mejor visualización de la página

### Codigo

Este div de la clase nav-container, encampsula todo el codigo siguiente de la clase header-container del div
``` html 
<!-- header-container -->
<div class="nav-container">
    code
</div>
``` 

Este div de la clase header-container, encampsula todo el codigo de las siguientes clases hasta decoration-bar
``` html 
  <div class="header-container">
      code
    </div>
``` 

Este div define con la clase logo-container lo relacinado con el icono de la ucr y el componente de la aplocación llamado  darktoggle, primero llama el componente, luevo tiene un articulo que hace redireccina a la pagina principal de la universidad de Costa Rica la cual se observa el dar click picture y dicha imagen se elije dependiendo si el tema de la página es oscuro o claro
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

Este div es de la clase de navbar navbar-expand-md y encapsula las siguientes 3 secciones de html 
``` html 
    <nav class="navbar navbar-expand-md">
        code 
    </nav>
```

Un articulo de la clase navbar-brand el cual redirecciona  a la pagina principal del observatorio haciendo un href a "#", también define dos span uno con el texto de "Observatoio" con un tamaño de letra de 1.8 rem y otro span uno con el texto de "de Migración" pero con un tamaño más pequeño  de 1.5 rem
``` html
      <a class="navbar-brand" href="#">
        <span style="font-size: 1.8rem;">Observatorio</span>
        <br>
        <span style="font-size: 1.5rem;">de Migración</span></a>
```

Este es un botón de la clase navbar-toggle pero con el tipo de toggle collapse y el tipo de target de #navbarNav el aria-controls  como un navbarNav, se define como falso  aria-expanded y por ultimo el aria-label descrito como Toggle navigation. Lo siguiente del SVG sirve para insertar inline  elementos SVG con declaraciones de namespace y con prefijos de namespace
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

La siguiente clase navbar-collapse  collapse no-transition tiene un id navbarNav, el cual contiene los diferentes elementos del nav bar dentro del ul.
*  Inicio: Un li de la clase nav-item, un articulo de nav-link el cual tiene un route link hacia la página de /inicio con los atributos de la clase nav-link, especificando el routerLinkActive como active-link, también el attr.data-toggle en específicos los de collapse y #navbarNav como null.  Se define con el texto de Inicio. Por ultimo se encuentra en esta página  el routerLinkActive mostrará una underline-text-decoration

*  Blog:  Un li, un articulo de nav-link el cual tiene un route link hacia la página de /blog con los atributos de la clase nav-link, especificando el routerLinkActive como active-link, también el attr.data-toggle en específicos los de collapse y #navbarNav como null. Se define con el texto de Blog. Por ultimo se encuentra en esta página  el routerLinkActive mostrará una underline-text-decoration

* Nosotros:  Un li, un articulo de nav-link el cual tiene un route link hacia la página de /nosotros con los atributos de la clase nav-link, especificando el routerLinkActive como active-link, también el attr.data-toggle en específicos los de collapse y #navbarNav como null. Se define con el texto de Nosotros. Por ultimo se encuentra en esta página  el routerLinkActive mostrará una underline-text-decoration

* Directorio:  Un li, un articulo de nav-link el cual tiene un route link hacia la página de /directorio con los atributos de la clase nav-link, especificando el routerLinkActive como active-link, también el attr.data-toggle en específicos los de collapse y #navbarNav como null. Se define con el texto de Directorio. Por ultimo se encuentra en esta página  el routerLinkActive mostrará una underline-text-decoration
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
Este es un div con la clase decoration-bar
``` html
<div class="decoration-bar"></div>
``` 

