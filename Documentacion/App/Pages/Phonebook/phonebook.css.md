
# Documentacion phonebook.css

Esta seccion contiene la documentacion del codigo .css del elemento phonebook de la pagina web. Dentro de su estructura visual posee:
* Barra de búsqueda: Cuadro donde se escribe el texto para realizar la busca de un contacto que lo contenga o así como un botón con el icono de busqueda
* Lista de contactos: se muestra una lista de contactos ya sea los axistentes aí como los ingresados en la barra de busqueda, en el queb cada uno muestra su titulo así como una  lista de sus números de telefono. Al dar click a un contacto muestra un Modal con la información completa del contacto
* Modal de información: muestra el título, la descripción, el horario, un enlace al lugar, un enlace al sitio web y una lista de los numeros de telegono del contacto. Al final sale un botón para cerrar
* Botón para ir arriba: este se puede clikear y presenta la parte superior de la página, es descrito en el componente fab
* Footer:  muestra los detalles descritos en el componente footer


### Codigo

La clase **.container** contiene todos los componentes del phonebook
``` css
.container {
  width: 40%;
  margin: 10vh auto;
  font-size: 1rem;
  padding: 0 5vw;
}
```

La clase **.contact** contiene todos los componentes de un contacto individual
``` css
.contact {
  border-bottom: 1px solid var(--font-1);
  width: 100%;
  padding: 2vh 0;
}
```

La clase **.phone-list** contiene el numero de telefono del contacto
``` css
.phone-list {
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
}
```

La acción **hover** de la clase *.contact* hace que cuando el mouse esta encima de un contacto este se coloree amarillo.
``` css
.contact:hover {
  color: var(--font-3);
  cursor: pointer;
}
```

La clase **.contact-title** contiene el titulo de un contacto.
``` css
.contact-title {
  font-size: 1.3rem;
}
```

La clase **.search-container** contiene la barra de busqueda.
``` css
.search-container {
  height: 30px;
}
```

La clase **.search-form** contiene los componentes de la barra de busqueda que modifican lo que se muestra.
``` css
.search-form {
  position: relative;
}
```

La clase **.search-input** contiene el texto que se ingresa en la barra de busqueda.
``` css
.search-input {
  border: 1px solid rgb(175 175 175);
  font-size: 16px;
  width: 200px;
  height: 30px;
  background-color: transparent;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
  border-radius: 20px;
  outline: none !important;
  box-sizing: border-box;
  padding: 0 1rem;
  color: var(--font1);
  vertical-align: middle;
}
```

La clase **.search-button** contiene la imagen de una lupa de la barra de busqueda.
``` css
.search-button {
  display: inline;
  z-index: 99;
  position: relative;
  top: 1.5px;
  right: 2.2rem;
  background: transparent;
  border: none;
  outline: none;
  color: var(--font1);
}
``` 

La clase **.initial-letter** contiene la primera letra con la cual inician los contactos.
``` css
.initial-letter {
  font-size: 3rem;
}
```

La etiqueta **a** contiene links.
``` css
a {
  color: var(--warning-01);
  text-decoration: underline;
  margin: 0 1%;
}
```

El identificador **instructions** contiene instrucciones sobre que hacer.
``` css
#instructions {
  padding-right: 40%;
  margin: 5vh 0;
}
```

La clase **.modal-title** contiene el título del modal.
``` css
.modal-title {
  font-size: 1.6rem;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 1024px) {
  .container {
    width: 60%;
  }

  .search-form {
    position: relative;
  }
}

@media (max-width: 800px) {
  .container {
    width: 70%;
  }

  .search-form {
    position: relative;
  }
}

@media (max-width: 420px) {
  .container {
    width: 95%;
  }

  .search-form {
    /* position:relative; left: 0vw; */
    position: static;
    margin: 0 auto;
  }

  #instructions {
    padding: 0;
    margin: 5vh 0;
  }

  .contact-title {
    font-size: 1.2rem;
  }

  .initial-letter {
    text-align: center;
  }
}
```
