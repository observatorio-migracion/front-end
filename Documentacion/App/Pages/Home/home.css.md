
 Esta seccion contiene la documentacion del home.css del elemento Home de la pagina web. Dentro de su estructura visual posee: 
* Información de la pagina: Proyecto del Observatorio de Migración.
*  Titulo "Categorias": siguiente parte de categorias
*  Listado de las categorías existentes: contiene los nombres y las imágenes de las primeras 4 categorias 
*  Botón "ver más": opción para ser seleccionada y ver las demás categorias exixtentes   
* Titulo "Publicaciones recientes": siguiente parte de publicaciones recientes
* Listado de Post Cards: listado de los post cards de los post
* Botón "Ir al blog": Botón que lleva al usuario al página del blog = /blog
* Titulo "Eventos Proximos": siguiente parte de eventos próximos
* Lista de actividades: para cada una de las activiades se puede observar el nombre, la fecha y "ver más información" que lleva a un modal
* Modal de más informacion: muestra la informacion completa de la actividad, incluye el tituno que es el nombre, la fecha en formato extentido, el enlace a la actividad, su descripción y ________
* Footer: muestra los detalles descritos en del componente footer

### Codigo

En cualquier atributo del home que tenga la clase main-text-container con las caracterítcas de un ancho del 50%, una altura de 36%, margenes de 10% y otro autmático y un tamaño del texto de 1.3 rem
``` css
.main-text-container{
    width: 50%;
    height:36%;
    margin: 10% auto;
    font-size: 1.3rem;
}
```
En cualquier atributo del home que tenga la clase categories-container se caracterizza por tener un margen de -5rem y 1rem, un display de tipo grid,  también  en  grid-template-columns se definen los valores para el contenido un area con todos de manera automática,  un valor de 0.8rem en grid-gap el cual define tamaño dentro los canales de entre las filas y columnas, una justificación del contenido centralizado y un padding inferior de 9 vh
``` css
.categories-container{
    margin: -5rem 1rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 0.8rem;
    justify-content: center;
    padding-bottom: 9vh;
}
```
En cualquier atributo del home que tenga la clase horizontal-bar se le definirá un tamaño de letra de 2.2rem, un ancho del 100%, el texto con una alineación centrada, tendrá una posición relativa, un padding superior de 4rem y un z-index de -1 para comodar un elemento y sus desendientes
``` css
.horizontal-bar{
    font-size: 2.2rem;
    width:100%;
    text-align: center;
    padding-top: 4rem;
    position: relative;
    z-index: -1;
}
```
En cualquier atributo del home que tenga la clase horizontal-bar-01 se definirá un fondo del color de la variable --background-02, el color den texto --font-4 y un alto de 250px
``` css
.horizontal-bar-01{
    background-color: var(--background-02);
    color: var(--font-4);
    height: 250px;
}
```
En cualquier atributo del home que tenga la clase horizontal-bar-02 se definirá un fondo del color de la variable --background-01, el color den texto --font-1 y un alto de 200px
``` css
.horizontal-bar-02{
    background-color: var(--background-01);
    color: var(--font-1);
    height: 200px;
}
```
En cualquier atributo del home que tenga la clase custom-container se caracterisa con tener un margen izquierdo de 1vw y otro derecho de 1vw, un dsplay del tipo grid, y un valor de 2vw en grid-gap el cual define tamaño dentro los canales de entre las filas y columnas, un padding de valor 0, también  en  grid-template-columns se definen los valores para el contenido un area con los valores de 30vw 30vw 30vw y la justificación del contenido será centrada
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
En cualquier atributo del home que tenga la clase action-container se especifíca que sea un diplay en bloque, un margen superior de 40px y un ancho del 100%
``` css
.action-container{
    display:block;
    margin-top: 40px;; 
    width:100%;
}

```
En cualquier atributo del home que tenga la clase action-container-btn-warning tendrá las caracteríticas de un fonco con el color de la variable --warning-02, el color de la letra con el de  la variable --font-4, un display del tipo en bloque y un margen de 0 y autmático
``` css
.action-container-btn-warning{
    background-color: var(--warning-02); 
    color:var(--font-4);
    display:block; 
    margin:0 auto;
}
```
En cualquier atributo del home que tenga la clase category tendrá el sursos en pointer y una transiciión  de la transformación de  .1 segundos con una velocidad de tipo ease que hace que comience lentamente, se acelere rápidamente y sea ralentizado al final.
``` css
.category{
    cursor: pointer;
    transition: transform .1s ease;
}
```
En cualquier atributo del home que tenga la clase category cuando se realice la acción hover sobre él tendrá las caracteríticas de -ms-transform: transladando el eje Y con  -10px,  también  -webkit-transform: transladando el eje Y con -10px, transform: translaradar el eje Y con -10px 
``` css
.category:hover{
    -ms-transform: translateY(-10px); /* IE 9 */
     -webkit-transform: translateY(-10px); /* Safari 3-8 */
    transform: translateY(-10px); 
}
```
En cualquier atributo del home que tenga la clase events-container tendrá una especificaciones de un margen de 2 rem y de 0
``` css
.events-container{
    margin: 2rem 0;
}
```

En cualquier atributo del home que tenga la clase events-container tendrán las especificaciones de un padding superior de 3rem, el color del fondo de la variale --font-4
``` css
.events-container{
    padding-top: 3rem;
    background-color: var(--background-02);
    color:var(--font-4);
}
```

Los h1 dentro de la clase events-container tendrán las sigunetesa especificaciones donde la alineación del texto es centralizada, el tamaño de la letra es de 2.2 rem, el color del fondo del contenedor será el de la variable --background-02, el color del texto será el de la variavle --font-4 y por ultltimo un margen inferir de 3rem
``` css
.events-container h1{
    text-align: center;
    font-size: 2.2rem;
    background-color: var(--background-02);
    color: var(--font-4);
    margin-bottom: 3rem;
}
```

Especifica que en la clase custum table tendrá un ancho de un 60% donde el detalle de !important significa que se mayor prioridad a la instrucción, esto hace que las instrucciones posteriores no puedan sobre escribirla y además de un tamaño de margen  de 0  y automátio
``` css
.custom-table{
    width: 60% !important; 
    margin: 0 auto;
}
```


En cualquier atributo del home que tenga la clase .row se le van a definir estas caracteríticas donde el display va a ser flex y la dirección del flex por columna, la alineación de los items que contenga será centrada, la justificación del contenido será space-between y tendrá un padding de 1.7rem y 0
``` css
.row{
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-between;
    padding: 1.7rem 0;
}
```


En la clase custum table a sus parrafos se les cambia el color por el que se encuentra en la variable --font-4 además de eso se  cambia el tamaño de la letra a 1rem
``` css
.custom-table p{
    color: var(--font-4);
    font-size: 1rem;
}
```


Especifica que en la clase custum table que sea de la clase .index tenga un tamaño de letra de 1.5 rem
``` css
.custom-table .index{
    font-size: 1.5rem; 
}
```
Especifica que en la clase custum table los articulos dentro de los parrafos tengan una alineación del texto hacia la derecha y el detalle de !important significa que se mayor prioridad a la instrucción y esto hace que las instrucciones posteriores no puedan sobre escribirla.
Además a dichos articulos se les cambia el color por el que se encuentra en la variable --font-5
``` css
.custom-table p a{
    text-align: right !important;
    color: var(--font-5);
}
```
Cambia el margen del parrafo a que sea de valor cero
El detalle de !important significa que se mayor prioridad a la instrucción y esto hace que las instrucciones posteriores no puedan sobre escribirla 
``` css
p{
    margin: 0 !important;
}
```
En cualquier atributo del home que tenga la clase activity-see-more se le va a definir el cursos de tipo pointer
``` css
.activity-see-more{
    cursor: pointer;
}
```
En cualquier atributo del home que tenga la clase activity-see-more cuando se de la actividad de active, se le va definir al texto una decoración  de una linea debajo
``` css
.activity-see-more:active{
    text-decoration: underline;
}
```
En cualquier atributo del home que tenga la clase modal-title cambia el tamaño de la letra del titulo del modal por 1.6 rem
``` css
.modal-title{
    font-size: 1.6rem;
}
```

``` css
@media (max-width: 1400px) {
    .categories-container {
        grid-template-columns: auto auto;
        padding-bottom: 9vh;
    }
}
```

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
