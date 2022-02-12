# Documentación blog.css

### Esta sección contiene la documentación del código .css del elemento blog de la página web. Dentro de su estructura visual posee: 
*  Barra de búsqueda: posicionada en el margen derecho. Filtra las búsquedas del usuario de forma activa.
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas: el primero, lleva a la página principal; el segundo, redirige al mismo blog; el tercero, redirige a la página de nosotros y el cuarto, al área de directorio.
*  Botón superior de modo oscuro/claro: situado en el margen superior izquierdo, es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior de Inicio: ubicado en el margen superior izquierdo, debajo del botón de modo oscuro claro. Su función consiste en volver a la página inicio.
*  Botón logo UCR: anclado en el margen superior derecho. Su función es redirigir a la página de la Universidad de Costa Rica.
*  Botón filtrar: anclado en el margen izquierdo. Posee una barra desplegable y filtra los resultados mostrados en la página según las categorías seleccionadas.
*  Botón de regreso a la parte superior: ubicado en el margen inferior derecho. Se mueve con el scroll. Su función es volver a la parte superior de la página al hacer click.
*  Cuerpo de la página: comprende el centro de la página web. En esta sección se despliegan los distintos posts.Posee la propiedad de scroll infinito, lo cual hace que al bajar en la página se carguen los demás posts.

### Código

La clase **.custom-container** es el contenedor principal de los posts de la página.
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

La clase **row** agrupa los elementos por filas.
``` css
.row{
    display: flex;
    justify-content: space-between;
}
```

La clase **.search-container** contiene el botón de búsqueda para ajustar sus propiedades.
``` css
.search-container{
    height: 30px;
}
```

La clase **.search-button** configura el botón de búsqueda según sus características.
``` css
.search-button{
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
El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 900px) {
    .custom-container {
        grid-template-columns: auto auto auto;
        padding-bottom: 9vh;
    }
}
```
El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 750px) {
    .custom-container {
        grid-template-columns: auto auto;
        padding-bottom: 9vh;
    }
}
```
El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 500px) {
    .custom-container {
        grid-template-columns: auto;
        padding-bottom: 9vh;
    }
}
```
La clase **ul** funciona como una lista a la que se le modifican sus propiedades de las listas de forma global.
``` css
ul {
    list-style-type: none;
    margin-top: 4px;
}
```

La clase **.tools** incluye el filtro de búsqueda y el botón de búsqueda.
``` css
.tools{
      margin: 7vh 2vh 5vh;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 1024px) {
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 400px) {
    .row{
        justify-content: center;
    }
    .tools{
        margin: 5vh 2vh 5vh;
    }
    .search-container{
        margin-left: 2rem;
    }
}
```

La clase **.dropdown-menu** es el botón desplegable del filtro de búsqueda y asigna sus propiedades.
``` css
.dropdown-menu{
    background-color:var(--filter);
}
```

La pseudo-clase **hover** de la clase *.dropdown-item* modifica las características del botón desplegable de filtro de categorías.
``` css
.dropdown-item:hover{
    background-color: var(--filter-hover);
}
```

La pseudo-clase **hover** de la clase *.dropdown-item* y *.category-checkbox-label* modifica el valor de los espacios de check en el botón de filtro de categorías.
``` css
.dropdown-item:hover .category-checkbox-label{
    color: var(--font-1);
}
```

La pseudo-clase **active** de la clase *.dropdown-item* verifica la actividad y modifica el color de fondo de los objetos que se encuentran en el botón de filtro de categorías.
``` css
.dropdown-item:active{
    background-color: transparent;
} 
```

La clase **.category-checkbox** se usa en los botones de check que se encuentran en el filtro de categorías.
``` css
.category-checkbox{
    color: var(--background-02);
}
```

La clase **.category-checkbox-label** modifica los valores de las variables de las etiquetas que se encuentran dentro del filtro de categorías.
``` css
.category-checkbox-label{
 color: var(--font-2);
}
```

La clase **.dropdown** incluye los filtro de categorías.
``` css
.dropdown{
    margin-left: 1vw;
}
```

La clase **.infinite-scroll** define la opción de scroll infinito y se le asigna una altura mínima.
``` css
.infinite-scroll{
    min-height: 90vh;
}
```

Se modifican los colores del botón de filtro de categoría identificado por su identificador.
``` css
#dropdownMenuButton{
    background-color:transparent; 
    color: var(--font-1); 
    border:none; 
    outline:none;
}
```
