# Documentacion footer.html

### Esta sección contiene la documentación del footer.html del componente footer de la página web. Dentro de su estructura visual posee: 
* Footer: Esta sección detallará información adicional sobre la página, se divide en 3 secciones, la primera es un divisor, la segunda contiene el logo del Observatorio, el logo de la UCR con un enlace respectivo a la página oficial y la tercera contiene enlaces hacia las páginas de preguntas frecuentes, mapa del sitio y de contacto.

### Código
Esta etiqueta **div** tiene la clase *footer* y encapsula todo el código base del footer.
``` html 
<div class="footer">
     ...
</div>
``` 

Esta etiqueta **div** tiene la clase *footer-container*, su funcionalidad principal es ser un contenedor para los elementos del footer.
``` html 
<div class="footer-container">
     ...
</div>     
``` 

Esta etiqueta **div** tiene la clase *footer-edge* y el identificador *upper*, su funcionalidad es dividir el footer del resto de la página.
``` html 
<div class="footer-edge" id="upper">
</div>
``` 

Esta etiqueta **div** tiene la clase *footer-center*, la cual se divide en otras dos secciones, cada una con un logo. Con la función **ngIf* se verifica si la página se encuentra en modo claro u oscuro y dependiendo del modo, se intercambia la imagen con su respectivo formato.
``` html 
<div class="footer-center">
      <div class="logo-container">
        <a href="https://www.ucr.ac.cr/">
          <picture>
            <source srcset="../../../assets/images/logo-ucr-dark.png" *ngIf='theme === "dark"'>
            <img src="../../../assets/images/logo-ucr-light.png">
          </picture>
        </a>
      </div>
      <div class="logo-container">
          <picture>
            <source srcset="../../../assets/images/logo-ucr-dark.png" *ngIf='theme === "dark"'>
            <img src="../../../assets/images/logo-ucr-light.png">
          </picture>
      </div>
    </div>
``` 

Esta etiqueta **div** tiene la clase *footer-edge* y el identificador *bottom*, la cual se divide en otras tres secciones, la primera contiene un enlace hacia el inicio de la propi página, la segunda contiene el copyright y la tercera contiene tres enlaces.
``` html 
<div class="footer-edge" id="bottom">
      <div class="footer-brand">
        <a class="navbar-brand" href="#">
          <p>Observatorio de Migración</p>
        </a>
      </div>
      <div class="footer-copyright">
        <p>© Universidad de Costa Rica </p>
      </div>
      <div class="footer-bottom-links">
        <a class="bottom-links" id="bottom-link-left" href="#">Contactos</a>
        <a class="bottom-links" href="#">Mapa del sitio</a>
        <a class="bottom-links" href="#">Preguntas frecuentes</a>
      </div>
    </div>
``` 