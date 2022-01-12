
# Documentacion phonebook.css

Esta seccion contiene la documentacion del codigo .css del elemento phonebook de la pagina web. Dentro de su estructura visual posee: 
* Barra de bsusqueda: Cuadro donde se escribe el texto para realizar la busca de un contacto que lo contenga o así como un botón con el icono de busqueda
* Lista de contactos: se muestra una lista de contactos ya sea los axistentes aí como los ingresados en la barra de busqueda, en el queb cada uno muestra su titulo así como una  lista de sus números de telefono. Al dar click a un contacto muestra un Modal con la información completa del contacto
* Modal de información: muestra el título, la descripción, el horario, un enlace al lugar, un enlace al sitio web y una lista de los numeros de telegono del contacto. Al final sale un botón para cerrar
* Botón para ir arriba: este se puede clikear y presenta la parte superior de la página, es descrito en el componente fab
* Footer:  muestra los detalles descritos en el componente footer


### Codigo

En cualquier atributo del phonebook que tenga la clase  container tendrá un ancho de 40%, magenes de un 10vh y atomatico, tamaño de letra de 1 rem y un padding de 0 y 5vm.
``` css
.container{
    width: 40%;
    margin: 10vh auto;
    font-size: 1rem;
    padding: 0 5vw;
}
```

En cualquier atributo del phonebook que tenga la clase contact tendrá una linea de borde de grosor de 1px y un color solido que está en la variable --font-1, además un ancho del 100% y un padding de 2hv y 0
``` css
.contact{
    border-bottom: 1px solid var(--font-1);
    width: 100%;
    padding: 2vh 0;
}
```

En cualquier atributo del phonebook que tenga la clase phone-list tendrá un display flex, una dirección por row y el último para designar un formato de wrap a las lineas del flex
``` css
.phone-list{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
```

En cualquier atributo del phonebook que tenga la clase contact con la acción de hover, un color que está en la variable  --font-3 y un tipo de cursor pointer
``` css
.contact:hover{
    color: var(--font-3);
    cursor: pointer;
}
```

En cualquier atributo del phonebook que tenga la clase contact-title con un tamaño de letra de 1.3 rem
``` css
.contact-title{
    font-size: 1.3rem;
}
```

En cualquier atributo del phonebook que tenga la clase search-container con un alto de 30px
``` css
.search-container{
    height: 30px;
}
```

En cualquier atributo del phonebook que tenga la clase search-form tendrá una posición relativa y en la izquierda de 17vm
``` css
.search-form{
    position:relative; left: 17vw;
}
```

En cualquier atributo del phonebook que tenga la clase search-input tendrá las siguientes características con un borde de 1px de grosor  con un color solido específico de rgb, el tamaño del texto de 16px, un ancho de 200px y la altura de 30px, el color del findo transparente, el margen de arriba de 0.2 rem y el de la derecha también de 0.2 rem, el radio del borde de 20px, definida como ninguna la outline con la caracteritica  de !important que significa que se mayor prioridad a la instrucción y esto hace que las instrucciones posteriores no puedan sobre escribirla, en el tamaño del borde con la especificacion de border- box le dice al navegador tomar en cuenta para cualquier valor que se especifique de borde o de relleno para el ancho o alto de un elemento, además un padding de 0 y 1rem, el color será el de la variable --font1 y el alineamiento vertical en el medio. 
``` css
.search-input{
    border: 1px solid rgb(175, 175, 175);  
    font-size: 16px;
    width: 200px;
    height: 30px;
    background-color:transparent;
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

En cualquier atributo del phonebook que tenga la clase search-button  se definirá con el display inline, un valor de 99 en el z-index quien indica el orden de un elemento posicionado y sus descendientes, el top será de 1.5px y el de la derecha de 2.2rem, en fondo será transparente, el borde se define como ninguno al igual que la outline y por ultimo el color será en de la variable --font1
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

En cualquier atributo del phonebook que tenga la clase initial-letter el tamaño de la letra será de 3rem
``` css
.initial-letter{
    font-size: 3rem;
}
```

Cambia a que los articulos sean con el color de la variable --warning-01, el texto con una decoración de underline y un margen del 0.1%
``` css
a {
    color: var(--warning-01);
    text-decoration: underline;
    margin:0 1%;
}
```

Al unico elemento que tenga el ID instructions padding derecho de 40% y un margen de 5vh y 0
``` css
#instructions{
   padding-right: 40%; margin: 5vh 0;
}
```

En cualquier atributo del phonebook que tenga la clase modal-title se le definirá un tamaño del texto de 1.6 rem
``` css
.modal-title{
    font-size: 1.6rem;
}
```

``` css
@media (max-width: 1024px) {
    .container{
        width: 60%;
    }
    .search-form{
        position:relative; left: 30vw;
    }
}
```

``` css
@media (max-width: 800px) {
    .container{
        width: 70%;
    }
    .search-form{
        position:relative; left: 35vw;
    }
}
```

``` css
@media (max-width: 420px) {
    .container{
        width: 95%;
    }
    .search-form{
        /* position:relative; left: 0vw; */
        position: static;
        margin: 0 auto;
    }
    #instructions{
        padding: 0; margin: 5vh 0;
     }
     .contact-title{
         font-size: 1.2rem;
     }
     .initial-letter{
         text-align: center;
     }
}
```
