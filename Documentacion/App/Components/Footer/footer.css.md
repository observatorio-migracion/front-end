# Documentación footer.css

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
}
``` 

La clase **.footer-container** es un contenedor de todo el footer, que se utiliza para la funcionalidad de Flexbox.
``` css
.footer-container {
  display: flex;
  flex-flow: wrap;
  flex-direction: column;
  position: absolute;
  width: 100%;
}
``` 

La clase **.footer-edge** contiene los bordes externos definidos para las secciones el footer.
``` css
.footer-edge {
  background-color: var(--footer-edges);
  color: var(--font-4);
}
``` 

La etiqueta **p** de la clase *.footer-edge* se utiliza para los párrafos de dicha clase.
``` css
.footer-edge p {
  font-size: 1rem;
}
``` 

La etiqueta **a** de la clase *.footer-edge* se utiliza para los enlaces de dicha clase.
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
  align-items: center;
  flex-flow: column;
  flex-wrap: wrap;
}
``` 

La etiqueta **p** de la clase *.footer-brand* se utiliza para los párrafos de dicha clase.
``` css
.footer-brand p {
  margin-top: unset;
  margin-bottom: unset;
}
``` 

La etiqueta **p** de la clase *.footer-copyright* se utiliza para los párrafos de dicha clase. 
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
  padding-bottom: 1rem;
}
``` 

El identificador **#bottom-link-left** se utiliza junto con la clase *.bottom-links* para definir que es el primer enlace.
``` css
#bottom-link-left {
  margin-left: 5rem;
  border: unset;
}
``` 

La clase **.active-link** se utiliza para marcar en negrita la página del footer en la que se encuentra, si se encuentra en una de ellas.
``` css
.active-link {
  font-weight: bold;
}
```

La clase **.bottom-links** contienen los enlaces adicionales de la clase *.footer-bottom-links*.
``` css
.bottom-links {
  margin-right: unset;
  padding: 0 3rem;
  padding-bottom: unset;
  padding-top: unset;
  border-left: 1px solid;
}
``` 

La etiqueta **img** contiene una imagen dentro del footer.
``` css
img {
  height: 80px;
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
@media (max-width: 900px) {
  #bottom-link-left {
    margin-left: unset;
  }

  .footer-bottom-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 
 .bottom-links {
    border: unset;
  }
}
``` 
El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 800px) {
  .footer-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 300px) {
  .bottom-links {
    padding: unset;
    border: unset;
  }
}
``` 
