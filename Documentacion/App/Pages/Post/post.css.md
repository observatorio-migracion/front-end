# Documentacion post.css

Esta seccion contiene la documentacion del codigo .css del elemento post de la pagina web. Dentro de su estructura visual posee: 
* Titulo : es el titulo asignado a la publicación 
* Fecha de publicación: fecha en que se creó la publicación en un formáto corto.
* Chip de las categorías: muestra la(s) categoría(s) de una publicación.
* Decripción breve: presenta una breve descripción  de la publicación. 

### Codigo

En cualquier atributo del post que tenga la clase  post-container tiene margenes de 0 y 10vw, el padding inferior de 10vh y una alineación del texto de manera justificada.
``` css
.post-container{
    margin: 0 10vw;
    padding-bottom: 10vh;
    text-align: justify;
}


``` css
@media (max-width: 800px){
    .post-container{
        margin-left: 1rem;
        margin-right: 1rem;
    }  
}
``` 

Cambia a que los titulos 1 del post tengan margenes de 0 y 10vw, el margen superior de 5vh, tamaño de letra de 3rem y el grueso de la letra de 400.
``` css
h1{
    margin: 0 10vw;
    margin-top: 5vh;
    font-size: 3rem;
    font-weight: 400;
}
``` 

Cambia a que los parrafos del post tengan margenes 2vw y 10vw.
``` css
p {
    margin: 2vw 10vw;
}
```

En cualquier atributo del post que tenga la clase categories tenga margenes de 2vw y 10vw.
``` css
.categories{
    margin: 2vw 10vw;
}
``` 