# Documentación about.css

 Esta sección contiene la documentación del código .html del elemento about de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la página principal, el segundo es el corresponde al botón que redirige al mismo blog, el tercer botón redirige a la página de nosotros, y el cuarto al área de directorio.
*  Botón superior de modo oscuro/claro: el botón se sitúa en el margen superior izquierdo, dicho botón es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  botón superior Inicio: un botón ubicado en el margen superior izquierdo debajo del botón de modo oscuro claro, su función consiste en volver a la página inicio.
*  botón logo UCR: un botón anclado en el margen superior derecho, su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web en esta sección contiene notas sobre la agrupación que llevo a cabo el proyecto y alguna información extra.

### Código

Asigna atributos a los márgenes superior e inferior del divisor por defecto del HTML y asigna la altura máxima por defecto.
``` css
.custom-container{    
    margin-top: 150px;
    margin-bottom: 150px;
    min-height: 90vh;
}
```

Asigna atributos al margen inferior de las filas por defecto en la pagina
``` css
.custom-row{
    margin-bottom: 15vh;
}
```
Asigna atributos de anchura y altura máxima a las columnas, además agrega tamaños por defecto de altura, ancho y márgenes. 
``` css
.custom-col{
    max-width: 500px;
    max-height: 335px;
    width: 500px;
    height: 335px;
    margin: 45px 45px;
}
```
Agrega tamaño a la fuente de todos los 'p' párrafos que se encuentra en la página actual.
``` css
p{
    font-size: 1.3rem;
}
```
Asigna valores a los atributos de los divisores de imágenes que están contenidos en la clase declarada, les asigna un color de fondo y un valor de color mediante un llamado a una propiedad personalizada, asigna un valor de anchura y altura y define un valor máximo para altura y anchura.
``` css
.image-container{
    background-color: var(--background-02);
    color: var(--font-4);
    width: 500px;
    height: 335px;
    max-width: 500px;
    max-height: 335px;    
}
```

Reasigna un valor predefinido para cuando el ancho de la pantalla es de solo 600px, dentro de este método esta contenido los ajustes para que el tamaño de dicha pantalla sea acorde.
``` css
@media (max-width: 600px){

}
```

Reasigna un valor de margen al contenedor por defecto de 70px para cuando el tamaño corresponde a 600px
``` css
.custom-container{
        margin-top: 70px
    }
```

Reasigna valores de altura, tamaño y margen al divisor que contiene las imágenes, para tamaños de pantalla de 600px
``` css
.image-container{
        width: 350px;
        height: 235px;
        margin: 0 auto;
    }
```
Reasigna valores de altura y ancho al elemento imagen contenido en el divisor que contiene las imágenes (reescribe la instrucción anterior), para tamaños de pantalla de 600px
``` css
.image-container img{
        width: 350px;
        height: 235px;
    }
```
Reasigna valores de altura y ancho al divisor que contiene el divisor de columna para tamaños de pantalla de 600px
``` css
 .custom-col{
        width: 350px;
        height: 235px;
    }
```

Reasigna valores de tamaño de fuente a todos los divisores marcados como párrafo para tamaños de pantalla de 600px
``` css
 p{
        font-size: 1rem;
    }
```
Reasigna el valor de margen de columnas para tamaños de pantalla de 600px
``` css
.custom-col{
        margin: 0px 20px;
    }
```
Reasigna el valor de margen de filas para tamaños de pantalla de 600px
``` css
.custom-row{
        margin: 0 auto;
    }
```
Reasigna el valor de margen de columnas para tamaños de pantalla de 600px
``` css
.custom-col{
        margin: 30px 20px;
    }
```
Reasigna el valor de margen de filas para tamaños de pantalla de 600px
``` css
.custom-row{
        margin: 20 auto;
    }
```
Reasigna un valor predefinido para cuando el ancho de la pantalla es de solo 420px, dentro de este método está contenido los ajustes para que el tamaño de dicha pantalla sea acorde.
``` css
@media(max-width: 420px){

}
```

Reasigna valores de altura, tamaño y margen al divisor que contiene las imágenes, para tamaños de pantalla de 420px
``` css
.image-container{
        width: 270px;
        height: 180px;
        margin: 0 auto;
    }
```
Reasigna valores de altura y ancho al elemento imagen contenido en el divisor que contiene las imágenes (reescribe la instrucción anterior), para tamaños de pantalla de 420px
``` css
.image-container img{
        width: 270px;
        height: 180px;
    }
```

Reasigna el valor de margen de columnas para tamaños de pantalla de 420px
``` css
.custom-col{
        width: 300px;
        height: 200px;
    }
```

Reasigna el valor de margen de columnas para tamaños de pantalla de 420px
``` css
.custom-col{
        margin: 20px 10px;
    }
```

Reasigna el valor de margen de filas para tamaños de pantalla de 420px
``` css
.custom-row{
        margin: 0 auto;
        margin-bottom: 20vh;
    }
```

Reasigna un valor predefinido para cuando el ancho de la pantalla es de solo 320px, dentro de este método está contenido los ajustes para que el tamaño de dicha pantalla sea acorde.
``` css
@media(max-width: 320px){

}
```
Reasigna valores de altura, ancho y margen al divisor que contiene las imágenes, para tamaños de pantalla de 320px
``` css
.image-container{
        width: 240px;
        height: 160px;
        margin: 0 auto;
    }
```
Reasigna valores de altura y ancho al elemento imagen contenido en el divisor que contiene las imágenes (reescribe la instrucción anterior), para tamaños de pantalla de 320px
``` css
.image-container img{
        width: 240px;
        height: 160px;
    }
```
Reasigna el valor de margen de columnas para tamaños de pantalla de 320px
``` css
.custom-col{
        margin: 20px 10px;
    }
```

Reasigna valores de tamaño de fuente a todos los divisores marcados como párrafo para tamaños de pantalla de 320px
``` css
p{
        font-size: 0.8rem;
    }
```
