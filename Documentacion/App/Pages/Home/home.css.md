
 ### Esta seccion contiene la documentacion del home.css del elemento Home de la pagina web. Dentro de su estructura visual posee: 
* Información de la pagina: Proyecto del Observatorio de Migración.
*  Titulo "Categorias": siguiente parte de categorias
*  Listado de las categorías existentes: contiene los nombres y las imágenes de las primeras 4 categorias 
*  Botón "ver más": opción para ser seleccionada y ver las demás categorias exixtentes   
* Titulo "Publicaciones recientes": siguiente parte de publicaciones recientes
* Listado de Post Cards: listado de los post cards de los post
* Botón "Ir al blog": Botón que lleva al usuario al página del blog = /blog
* Titulo "Eventos Proximos": siguiente parte de eventos próximos
* Lista de actividades: para cada una de las activiades se puede observar el nombre, la fecha y "ver más información" que lleva a un modal
* Modal de más informacion: muestra la informacion completa de la actividad, incluye el tituno que es el nombre, la fecha en formato extentido, el enlace a la actividad, su descripción, entre otros
* Footer: muestra los detalles descritos en del componente footer

### Codigo

La clase **.main-text-container** es un contenedor con texto sobre el proyecto, que se usa para determinar como se verá este bloque de texto.
``` css
.main-text-container {
  width: 50%;
  height: 36%;
  margin: 10% auto;
  font-size: 1.3rem;
  text-align: center;
}
```
La clase **.categories-container** Es un contenedor donde estan las distintas categorias en las que pueden estar los posts.
``` css
.categories-container {
  margin: -5rem 1rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 0.8rem;
  justify-content: center;
  padding-bottom: 9vh;
}
```
La clase **.horizontal-bar** contiene los separadores entre secciones de la pagina principal, asi como el título de la sección que ira debajo.
``` css
.horizontal-bar {
  font-size: 2.2rem;
  width: 100%;
  text-align: center;
  padding-top: 4rem;
  position: relative;
  z-index: -1;
}
```
La clase **.horizontal-bar-01** funciona como un *Identificador* para identificar la primera barra horizontal.
``` css
.horizontal-bar-01 {
  background-color: var(--background-02);
  color: var(--font-4);
  height: 250px;
}
```

La clase **.horizontal-bar-02** funciona como un *Identificador* para identificar la segunda barra horizontal.
``` css
.horizontal-bar-02 {
  background-color: var(--background-01);
  color: var(--font-1);
  height: 200px;
}
```

La clase **.custom-container** es un contenedor que almacena los cards para la sección de las publicaciones recientes.
``` css
.custom-container {
  margin-left: 1vw;
  margin-right: 1vw;
  display: grid;
  grid-gap: 2vw;
  padding: 0;
  grid-template-columns: 30vw 30vw 30vw;
  justify-content: center;
}
```

La clase **.action-container** es un contenedor donde hay acciones adicionales, como el botón de "Ir a Blog".
``` css
.action-container {
  display: block;
  margin-top: 40px;
  width: 100%;
}
```

La clase **.action-container-btn-warning** funciona como *Identificador* para un botón contenido en la clase *.action-container*
``` css
.action-container-btn-warning {
  background-color: var(--warning-02);
  color: var(--font-4);
  display: block;
  margin: 0 auto;
}
```

La clase **.category** es un contenedor para las categorías en las que se separan los post en la sección de Categorías.
``` css
.category {
  cursor: pointer;
  transition: transform 0.1s ease;
}
```

La acción **hover** de la clase *.category* hace que cuando el mouse esta encima de un post este se mueva ligeramente hacía arriba.
``` css
.category:hover {
  transform: translateY(-10px); /* IE 9 */
  transform: translateY(-10px); /* Safari 3-8 */
  transform: translateY(-10px);
}
```

La clase **.events-container** es un contenedor para la tabla en la que se colocan los eventos en la sección de Eventos próximos
``` css
.events-container {
  margin: 2rem 0;
  padding-top: 3rem;
  background-color: var(--background-02);
  color: var(--font-4);
}
```

La etiqueta **h1** de la clase *.events-container* tiene el título de la sección.
``` css
.events-container h1 {
  text-align: center;
  font-size: 2.2rem;
  background-color: var(--background-02);
  color: var(--font-4);
  margin-bottom: 3rem;
}
```

La clase **.custom-table** es un contenedor en el que estan las filas con los eventos próximos.
``` css
.custom-table {
  width: 60% !important;
  margin: 0 auto;
}
```

La clase **.row** es un contenedor para cada evento dentro de la sección de eventos próximos.
``` css
.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 0;
}
```

La etiqueta **p** es para almacenar texto.
``` css
p {
  margin: 0 !important;
}
```

La etiqueta **p** dentro de la clase *.custom-table* es para almacenar texto dentro de esta clase.
``` css
.custom-table p {
  color: var(--font-4);
  font-size: 1rem;
}
```


La clase **.index** de la clase *.custom-table* funciona como *identificador* para el index en esta sección.
``` css
.custom-table .index {
  font-size: 1.5rem;
}
```

Las etiquetas **a** y **p** en la clase *.custom-table* contienen los links a más información.
``` css
.custom-table p a {
  text-align: right !important;
  color: var(--font-5);
}
```

La clase **.activity-see-more** indica que la división es un link a más informacion sobre el articulo
``` css
.activity-see-more {
  cursor: pointer;
}
```


La acción **active** de la clase *.activity-see-more* hace que cuando el mouse esta encima de un link este se subraye
``` css
.activity-see-more:active {
  text-decoration: underline;
}
```

La clase **.modal-title** contiene el título de la sección de modal (que parece que no esta en la pagina)
``` css
.modal-title {
  font-size: 1.6rem;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 1400px) {
    .categories-container {
        grid-template-columns: auto auto;
        padding-bottom: 9vh;
    }
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 900px) {
    .custom-container {
        grid-template-columns: 45vw 45vw;
    }
    .main-text-container{
        width: 90%;
        font-size: 1rem;
    }

    .custom-table {
        width: 80% !important; 
    }
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 700px) {
    .categories-container {
        grid-template-columns: auto;
        padding-bottom: 9vh;
    }
    .horizontal-bar{
        font-size: 1.9rem;
    }
    .events-container h1{
        font-size: 1.9rem;
    }
    .main-text-container{
        height:auto;
    }
    .custom-container {
        grid-template-columns: 90vw;
        grid-row-gap: 4rem;
    }
    .custom-table {
        width: 90% !important; 
    }
    .custom-table .index{
        font-size: 1.2rem;
    }

}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 500px) {
    .categories-container {
        margin-top: -3rem;
        grid-template-columns: auto;
        padding-bottom: 9vh;
    }
    .main-text-container{
        height:auto;
    }
    .horizontal-bar{
        font-size: 1.8rem;
    }
    .events-container h1{
        font-size: 1.8rem;
    }
    .horizontal-bar-01{
        height: 200px;
    }
    .horizontal-bar-02{
        height: 150px;
    }
}
```
