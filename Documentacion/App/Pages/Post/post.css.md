# Documentacion post.css

Esta seccion contiene la documentacion del codigo .css del elemento post de la pagina web. Dentro de su estructura visual posee: 
* Titulo : es el titulo asignado a la publicación 
* Fecha de publicación: fecha en que se creó la publicación en un formáto corto.
* Chip de las categorías: muestra la(s) categoría(s) de una publicación.
* Decripción breve: presenta una breve descripción  de la publicación. 

### Codigo

La clase **.post-container** contiene el post, el texto y las imagenes y links relacionados.
``` css
.post-container {
  margin: 0 10vw;
  padding-bottom: 10vh;
  text-align: justify;
}
``` 

La etiqueta **h1** contiene títulos.
``` css
h1 {
  margin: 0 10vw;
  margin-top: 5vh;
  font-size: 3rem;
  font-weight: 400;
}
``` 

La etiqueta **p** contiene texto.
``` css
p {
  margin: 2vw 10vw;
}
```

La clase **.categories** contiene las categorías a las que pertenece el post
``` css
.categories {
  margin: 2vw 10vw;
}
``` 

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 800px) {
  .post-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
```