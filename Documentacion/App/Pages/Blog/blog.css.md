# Documentación blog.css

 Esta sección contiene la documentación del código .css del elemento blog de la página web. Dentro de su estructura visual posee: 
*  Barra de búsqueda: se posiciona en el margen derecho, filtra las búsquedas del usuario de forma activa por lo que no requiere recargar la página y se encuentra anclada por lo cual no se moverá al deslizar la pagina
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la página principal, el segundo es el corresponde al botón que redirige al mismo blog, el tercer botón redirige a la página de nosotros, y el cuarto al área de directorio.
*  Botón superior de modo oscuro/claro: el botón se sitúa en el margen superior izquierdo, dicho botón es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior Inicio: un botón ubicado en el margen superior izquierdo debajo del botón de modo oscuro claro, su función consiste en volver a la página inicio.
*  Botón logo UCR: un botón anclado en el margen superior derecho, su función es redirigir a la página de la Universidad de Costa Rica.
*  Botón filtrar: un botón anclado en el margen izquierdo posee una barra desplegable que revela algunos botones los cuales al hacer click filtran los resultados mostrados en el curso de la página por las categorías seleccionadas.
*  Botón de regreso a la parte superior: un botón ubicado en el margen inferior derecho se mueve junto con el scroll por lo cual no desaparece de la pantalla, su función es volver a la parte superior de la página al hacer click.
*  Cuerpo de la página: comprende el centro de la página web en esta sección se despliegan los distintos posts que se agregan a la página, posee la propiedad de scroll infinito lo cual hace que al bajar a la página se carguen los demás posts con forme se desciende en la lista.

### Código

La clase **.custom-container** tiene todos los componentes de la pagina
``` css
.custom-container {
  margin-top: 1.5vw;
  margin-left: 1vw;
  margin-right: 1vw;
  display: grid;
  grid-gap: 1rem;
  padding: 0;
  grid-template-columns: 23vw 23vw 23vw 23vw;
  justify-content: center;
  padding-bottom: 11vh;
  height: 80%;
}
```

La clase **.row**, corresponde al contenedor del filtro de búsqueda y al botón de búsqueda
``` css
.row {
  display: flex;
  justify-content: space-between;
  margin: unset;
}
```

La clase **.search-input** que corresponde al texto en el buscador
``` css
.search-input {
  font-size: 1rem;
}
```

La clase **.search-container** que guarda todo lo relacionado a la funcion de busqueda
``` css
.search-container {
  height: 30px;
}
```

La clase **.search-button** que almacena el boton de busqueda
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
  width: 24px;
  height: 24px;
}
```

La clase **.tools** es para el menu de seleccion de categoria y el buscador
``` css
.tools {
  margin: 7vh 2vh 5vh;
}
```

La clase **.category-checkbox-label** contiene el nombre de una categoria en el dropbox para filtrar
``` css
.category-checkbox-label {
  color: var(--font-2);
}
```

La clase **.dropdown-menu** contiene todas las opciones del dropdown
``` css
.dropdown-menu {
  background-color: var(--filter);
  font-size: 1.1rem;
}
```

La propiedad **hover** de la clase *.dropdown-item* determina que pasa cuando se hoverea el elemento.
``` css
.dropdown-item:hover {
  background-color: var(--filter-hover);
}
```

La propiedad **hover** de la clase *.dropdown-item* determina que pasa cuando se hoverea el elemento.
``` css
.dropdown-item:hover .category-checkbox-label {
  color: var(--font-1);
}
```

La propiedad **active** de la clase *.dropdown-item* determina que pasa cuando se hoverea el elemento.
``` css
.dropdown-item:active {
  background-color: transparent;
}
```

La clase **.category-checkbox** es para marcar la categoria que se quiere flitrar
``` css
.category-checkbox {
  color: var(--background-02);
}
```

La clase **.dropdown** es para el dropdown y sus componentes
``` css
.dropdown {
  margin-left: 1vw;
}
```

La clase **.infinite-scroll** es donde cargan las categorias de manera infinita 
``` css
.infinite-scroll {
  min-height: 90vh;
}
```

La etiqueta **dropdown-menu-button** es para identificar el boton  para abrir el dropdown
``` css
#dropdown-menu-button {
  background-color: transparent;
  color: var(--font-1);
  border: none;
  outline: none;
  font-size: 1.1rem;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 900px) {
  .custom-container {
    grid-template-columns: auto auto auto;
    padding-bottom: 9vh;
  }
}

@media (max-width: 750px) {
  .custom-container {
    grid-template-columns: auto auto;
    padding-bottom: 9vh;
  }
}

@media (max-width: 655px) {
  .row {
    justify-content: center;
  }
}

@media (max-width: 500px) {
  .custom-container {
    grid-template-columns: 90%;
    padding-bottom: 9vh;
  }
}

@media (max-width: 520px) {
  .tools {
    margin: 5vh 2vh;
  }

  .search-container {
    margin-left: 2rem;
  }
}
```
