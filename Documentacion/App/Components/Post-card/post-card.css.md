# Documentación post-card.css

 Esta sección contiene la documentación del código .css del componente post-card de la página web. Dentro de su estructura visual posee: 
*  Botón de forma rectangular con la información de la publicación: Este botón en particular posee varias secciones, la primera corresponde a la imagen situada en la parte más superior del botón, posteriormente seguido de la imagen podemos encontrar un identificador con la fecha de la publicación, seguido justamente debajo encontramos el título que identifica a la publicación, seguidamente encontramos los botones a las categorías ligadas a la publicación estos son clickeables y por último en la parte más inferior encontramos una descripción de la publicación. Este tipo de botones los podemos encontrar en la sección de posts del navbar y en el inicio de la página. 

### Codigo

Ajusta las proporciones básicas del botón post-card, asignando la altura y el ancho por defecto en 100%, asigna también la transición transform la cual hace visible el efecto al posicionar el apuntador encima del botón.

``` css
.custom-card{
    width: 100%;
    height: 100%;
    transition: transform .1s ease;
}
```

Le asigna a la propiedad hover del post-card una transformación que corresponde a un movimiento en vertical de 10 pixeles menos, generando un movimiento hacia abajo en el botón.
``` css
.custom-card:hover{
    transform: translateY(-10px);
}
```

Establece el espacio de relleno entre el contenido del elemento y su borde, este se establece por defecto en 1rem, que sería aproximadamente 16px para cualquier posición en el documento.
``` css
.card-body-container{
    padding-top: 1rem;
}
```

Establece el espacio de relleno entre el contenido del elemento y su borde para todos los demás contenedores ubicados en el elemento, este se establece por defecto en 0rem, aproximadamente 0px.
``` css
.card-body-container *{
    padding-top: 0rem;
}
```

Establece el características básicas para el título del post-card, la primera corresponde al color que se establece a través del valor de la variable font-3, el segundo es la propiedad de cursor al situarse encima del botón el cual será de tipo pointer usado para enlaces, establece el border el cual se define en none o ninguno por defecto y el ultimo atributo es el outline el cual se define en none o ninguno por defecto.
``` css
.card-title:hover{
    color: var(--font-3);
    cursor: pointer;
    border: none;
    outline: none;
}
```

Establece la media quieres basadas en un ancho máximo de pantalla de 800px para la etiqueta custom-card del elemento actual, al cual también se le modifican sus atributos básicos: se establece el margen superior en 1rem (16px aproximadamente), el tamaño fuente en 1rem (16px aproximadamente), ancho de 150rem (2400px aproximadamente), margen izquierdo en 0 y margen derecho en 0.
``` css
@media (max-width: 800px){
    custom-card{
        margin-top: 1rem;
        font-size: 1rem;
        width: 150rem;
        margin-left: 0;
        margin-right: 0;
    }
}
```
Establece propiedades básicas para los chips de angular material, este corresponde al botones de las categorías ubicadas en la parte inferior del card, dichas propiedades asignadas corresponden a un padding en none o ninguno por defecto y margen en none o ninguno por defecto.
``` css
mat-chip{
    padding: none;
    margin: none;
}
```

Establece para todos los elementos identificados por la etiqueta categorías el margen del botón con un tamaño de 1rem (16px aproximadamente)
``` css
.categories{
    margin-bottom: 1rem;
}
```

Establece el llamado al paquete de Angular CDK drag and drop para la animación que ocurre al situar el direccionador sobre el card
``` css
.example-box.cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
```

Establece el llamado al paquete de Angular CDK drag and drop para la animación que ocurre al situar el direccionador sobre la categoría ubicada en el card
``` css
.example-chip .cdk-drop-list-dragging {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
```
  
