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

Modifica las propiedades del contenedor de los posts de la página, particularmente su posición y márgenes.
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

Ajusta las propiedades de divisor row, corresponde al contenedor del filtro de búsqueda y al botón de búsqueda
``` css
.row{
    display: flex;
    justify-content: space-between;
}
```

Ajusta las propiedades altura del divisor que contiene las propiedades del botón de búsqueda.
``` css
.search-container{
    height: 30px;
}
```

Ajusta las propiedades especificas del boton de busqueda
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

Ajusta el divisor que contiene los posts para tamaño de pantalla de 900 pixeles.
``` css
@media (max-width: 900px) {
    .custom-container {
        grid-template-columns: auto auto auto;
        padding-bottom: 9vh;
    }
}
```
Ajusta el divisor que contiene los posts para tamaño de pantalla de 750 pixeles.
``` css
@media (max-width: 750px) {
    .custom-container {
        grid-template-columns: auto auto;
        padding-bottom: 9vh;
    }
}
```
Ajusta el divisor que contiene los posts para tamaño de pantalla de 500 pixeles.
``` css
@media (max-width: 500px) {
    .custom-container {
        grid-template-columns: auto;
        padding-bottom: 9vh;
    }
}
```
Ajusta las propiedades de las listas de forma global en la página actual.
``` css
ul {
    list-style-type: none;
    margin-top: 4px;
}
```

Ajusta las propiedades del divisor tools que contiene el filtro de búsqueda y el botón de búsqueda.
``` css
.tools{
      margin: 7vh 2vh 5vh;
}
```

Ajusta el tamaño de la página para tamaño de pantalla de 1024 pixeles.
``` css
@media (max-width: 1024px) {
}
```

Ajusta el tamaño de la página para tamaño de pantalla de 400 pixeles.
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

Ajusta las propiedades color de fondo del botón desplegable de filtro de búsqueda.
``` css
.dropdown-menu{
    background-color:var(--filter);
}
```

Modifica el color de fondo del botón desplegable de filtro de categorías, específicamente el fondo que se despliega al presionar el botón
``` css
.dropdown-item:hover{
    background-color: var(--filter-hover);
}
```

Modifica el valor de los espacios de check en el botón de filtro de categorías
``` css
.dropdown-item:hover .category-checkbox-label{
    color: var(--font-1);
}
```

Modifica el color de fondo de los objetos que se encuentran en el botón de filtro de categorías
``` css
.dropdown-item:active{
    background-color: transparent;
} 
```

Modifica el color de botones de check que se encuentran en el filtro de categorías.
``` css
.category-checkbox{
    color: var(--background-02);
}
```

Modifica los valores de las variables de las etiquetas que se encuentran dentro del filtro de categorías
``` css
.category-checkbox-label{
 color: var(--font-2);
}
```

Modifica los márgenes del divisor que contiene el filtro de categorías.
``` css
.dropdown{
    margin-left: 1vw;
}
```

Define una altura mínima para la propiedad infinite scroll de la pagina
``` css
.infinite-scroll{
    min-height: 90vh;
}
```

Modifica los colores del botón de filtro de categoría identificado por su ID (al botón sin desplegarse aun)
``` css
#dropdownMenuButton{
    background-color:transparent; 
    color: var(--font-1); 
    border:none; 
    outline:none;
}
```
