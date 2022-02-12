# Documentación about.css

### Esta sección contiene la documentación del código .html del elemento about de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas: el primero, lleva a la página principal; el segundo, redirige al mismo blog; el tercero, redirige a la página de nosotros y el cuarto, al área de directorio.
*  Botón superior de modo oscuro/claro: situado en el margen superior izquierdo, es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior de Inicio: ubicado en el margen superior izquierdo, debajo del botón de modo oscuro claro. Su función consiste en volver a la página inicio.
*  Botón logo UCR: anclado en el margen superior derecho. Su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web. Contiene notas sobre el por qué se lleva a cabo el proyecto y de qué trata.

### Código

La clase **.custom-container** es un contenedor con texto e imágenes sobre el proyecto.
``` css
.custom-container{    
    margin-top: 150px;
    margin-bottom: 150px;
    min-height: 90vh;
}
```

La clase **.custom-row** funciona como un contenedor en forma de fila que incluye imagen y texto.
``` css
.custom-row{
    margin-bottom: 15vh;
}
```
La clase **.custom-col** funciona como una caja que define anchura y altura máxima a las columnas. 
``` css
.custom-col{
    max-width: 500px;
    max-height: 335px;
    width: 500px;
    height: 335px;
    margin: 45px 45px;
}
```
La etiqueta **p** define el texto de la sección.
``` css
p{
    font-size: 1.3rem;
}
```
La clase **.image-container** asigna valores a los atributos de los divisores de imágenes: color de fondo, color, anchura, altura, altura máxima y anchura máxima.
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

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 600px){

}
```
