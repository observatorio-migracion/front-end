# Documentacion footer.css

### Esta sección contiene la documentación del footer.css del componente footer de la página web. Dentro de su estructura visual posee: 
* Footer: Esta sección detallará información adicional sobre la página, se divide en 3 secciones, la primera es un divisor, la segunda contiene el logo del Observatorio, el logo de la UCR con un enlace respectivo a la página oficial y la tercera contiene enlaces hacia las páginas de preguntas frecuentes, mapa del sitio y de contacto.

### Código
La clase **.footer** es el contenedor base de todas las clases pertenecientes al footer. 
``` css
.footer {
  background-color: var(--footer-background);
  width: 100%;
  height: 2rem;
  position: relative;
  margin-top: -2rem;
}
``` 

La clase **.footer-container** es un contenedor de todo el footer, que se utiliza para la funcionalidad de Flexbox.
``` css
.footer-container {
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
}
``` 

La clase **.footer-edge** contiene los bordes externos definidos para las secciones el footer.
``` css
.footer-edge {
  background-color: var(--footer-edges);
  color: var(--font-4);
}
``` 

La etiqueta **p** de clase *.footer-edge* se utiliza para los párrafos de dicha clase.
``` css
.footer-edge p {
  font-size: 1rem;
}
``` 

La etiqueta **a** de clase *.footer-edge* se utiliza para los enlaces de dicha clase.
``` css
.footer-edge a {
  color: var(--font-4);
}
``` 

El identificador **#upper** se utiliza junto con la clase *.footer-edge* para definir que es la sección superior.
``` css
#upper {
  padding-top: 2rem;
}
``` 

La clase **.footer-center** es la sección central de la división realizada al footer. 
``` css
.footer-center {
  display: flex;
  margin-top: 1%;
  margin-bottom: 1%;
}
``` 

El identificador **#bottom** se utiliza junto con la clase *.footer-edge* para definir que es sección inferior.
``` css
#bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row;
  flex-wrap: wrap;
}
``` 

La etiqueta **p** de clase *.footer-brand* se utiliza para los párrafos de dicha clase.
``` css
.footer-brand p {
  margin-top: unset;
  margin-bottom: unset;
}
``` 

La etiqueta **p** de clase *.footer-copyright* se utiliza para los párrafos de dicha clase. 
``` css
.footer-copyright p {
  margin-top: unset;
  margin-bottom: unset;
}
``` 

La clase **.footer-bottom-links** es la sección de los enlaces adicionales de la clase *.footer-edge* inferior. 
``` css
.footer-bottom-links {
  display: flex;
}
``` 

El identificador **#bottom-link-left** se utiliza junto con la clase *.bottom-links* para definir que es el primer enlace.
``` css
#bottom-link-left {
  border: unset;
}
``` 

La clase **.bottom-links** contienen los enlaces adicionales de la clase *.footer-bottom-links*.
``` css
.bottom-links {
  margin-right: unset;
  padding: 0 8px;
  padding-bottom: unset;
  padding-top: unset;
  border-left: 1px solid;
}
``` 

La clase **.navbar-brand** contiene un enlace de referencia a la propia página.
``` css
.navbar-brand {
  margin-right: unset;
  padding-bottom: unset;
  padding-top: unset;
}
``` 

La etiqueta **img** contiene una imagen dentro del footer.
``` css
img {
  width: 200px;
  height: 80px;
  aspect-ratio: auto 200/80;
}
``` 

La clase **.logo-container** contiene un único logo.
``` css
.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  padding: 0 1rem;
}
``` 

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (min-width: 1024px) {
  .active-link {
    border-radius: 0.2rem;
  }

  .nav-item {
    margin: 0 3%;
  }

  #search-button {
    margin: 0 3%;
  }

  #bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
    flex-wrap: wrap;
  }
}
``` 

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 800px) {
  * {
    font-size: 1rem;
  }

  .navbar-brand {
    font-size: 1.4rem;
  }

  .active-link {
    font-weight: bold;
  }

  .nav-item {
    margin: 0;
  }

  #search-button {
    margin: 0;
  }

  #bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
    flex-wrap: wrap;
  }

  .footer-bottom-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-brand span {
    align-items: center;
  }

  .footer-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-bottom-links .navbar-brand {
    font-size: 1rem;
  }

  .bottom-links {
    border: unset;
  }

  .navbar-collapse {
    background: transparent;
    text-align: center;
  }

  .navbar {
    align-content: center;
  }
}
``` 

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 300px) {
  * {
    font-size: 0.8rem;
  }

  .navbar-brand {
    font-size: 1.6rem;
  }

  #bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
    flex-wrap: wrap;
  }

  .footer-bottom-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-bottom-links .navbar-brand {
    font-size: 1rem;
  }

  .footer-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-edge p {
    font-size: 1rem;
  }

  .bottom-links {
    border: unset;
  }
}

``` 
