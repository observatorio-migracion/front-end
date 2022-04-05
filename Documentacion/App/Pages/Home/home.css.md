
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
  margin: 10% auto;
  font-size: 1.3rem;
  text-align: justify;
  text-justify: inter-word;
}
```
La clase **.horizontal-bar** contiene los separadores entre secciones de la pagina principal, asi como el título de la sección que ira debajo.
``` css
.horizontal-bar {
  background-color: var(--background-02);
  color: var(--font-4);
  font-size: 2.2rem;
  width: 100%;
  text-align: center;
  padding: 3rem 0;
}
```La clase **.categories-container** Es un contenedor donde estan las distintas categorias en las que pueden estar los posts.
``` css
.categories-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 0.8rem;
  justify-content: center;
  justify-items: center;
  padding-bottom: 9vh;
}
```
La clase **.category** es un contenedor para las categorías en las que se separan los post en la sección de Categorías.
``` css
.category {
  cursor: pointer;
  transition: transform 0.1s ease;
  width: 85%;
  height: auto;
}
```

La acción **hover** de la clase *.category* hace que cuando el mouse esta encima de un post este se mueva ligeramente hacía arriba.
``` css
.category:hover {
  transform: translateY(-10px);
}
```
La clase **.post** se utiliza para los posts que se muestran en publicaciones recientes.
``` css
.post {
  width: 85%;
  height: auto;
}
```
La clase **.button-container** se utiliza para almacenar el boton para mostrar mas posts en la sección de publicaciones recientes.
``` css
.button-container {
  display: block;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}
```
La clase **.button-container-btn-warning** se utiliza para el boton para mostrar mas posts en la sección de publicaciones recientes.
``` css
.button-container-btn-warning {
  background-color: var(--warning-02);
  color: var(--font-4);
  display: block;
  margin: 0 auto;
  font-size: 1rem;
}
```
El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 1400px) {
  .categories-container {
    grid-template-columns: auto auto;
  }
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 900px) {
  .posts-container {
    grid-template-columns: auto auto;
  }

  .main-text-container {
    width: 70%;
  }
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 700px) {
  .main-text-container {
    height: auto;
  }

  .horizontal-bar {
    font-size: 1.9rem;
  }

  .categories-container {
    grid-template-columns: auto;
  }

  .posts-container {
    grid-template-columns: auto;
    grid-row-gap: 4rem;
  }
}
```

LA El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 500px) {
  .main-text-container {
    height: auto;
    font-size: 1rem;
  }

  .horizontal-bar {
    font-size: 1.8rem;
  }
}

```
