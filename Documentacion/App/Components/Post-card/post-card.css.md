# Documentación post-card.css

 ### Esta sección contiene la documentación del código .css del componente post-card de la página web. Dentro de su estructura visual posee: 
*  Botón de forma rectangular con la información de la publicación: Este botón posee 5 secciones: la primera, corresponde a la imagen situada en la parte más superior del botón; la segunda, es un identificador con la fecha de la publicación; la tercera, corresponde al título que identifica a la publicación; la cuarta, son los botones a las categorías ligadas a la publicación, los cuales son clickeables y la quinta, es una descripción de la publicación. Este tipo de botones los podemos encontrar en la sección de posts del navbar y en el inicio de la página. 

### Codigo
La clase **.custom-card** es el contenedor base de todas las clases pertenecientes al card. 
``` css
.custom-card{
    width: 100%;
    height: 100%;
    transition: transform .1s ease;
}
```

La pseudo-clase **.custom-card:hover** genera un movimiento hacia abajo en el botón que se activa con la interación de la persona usuaria con un objeto de la clase *.custom-card*.
``` css
.custom-card:hover{
    transform: translateY(-10px);
}
```

La clase **.card-body-container** es un contenedor del cuerpo definido del card.
``` css
.card-body-container{
    padding-top: 1rem;
}
```

El selector * (*all*) aplica un espacio de relleno entre el contenido del elemento y su borde para todos los demás contenedores.
``` css
.card-body-container *{
    padding-top: 0rem;
}
```

La pseudo-clase **hover** de la clase *.card-title* cambia las características básicas para el título del post-card: color, propiedad de cursor, borde y contorno.
``` css
.card-title:hover{
    color: var(--font-3);
    cursor: pointer;
    border: none;
    outline: none;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
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
El diseñador de materiales de Angular **mat-chip** contiene los botones de las categorías ubicadas en la parte inferior del card.
``` css
mat-chip{
    padding: none;
    margin: none;
}
```

La clase **.categories** contiene las categorías que identifican los elementos.
``` css
.categories{
    margin-bottom: 1rem;
}
```

La clase **.example-box.cdk-drag-animating** se usa en el llamado al paquete de Angular CDK drag and drop para la animación que ocurre al situar el direccionador sobre el card.
``` css
.example-box.cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
```

La clase **.example-chip .cdk-drop-list-dragging** se usa en el llamado al paquete de Angular CDK drag and drop para la animación que ocurre al situar el direccionador sobre la categoría ubicada en el card.
``` css
.example-chip .cdk-drop-list-dragging {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
```
  
