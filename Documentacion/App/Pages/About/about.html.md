# Documentación about.html

### Esta sección contiene la documentación del código .html del elemento about de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas: el primero, lleva a la página principal; el segundo, redirige al mismo blog; el tercero, redirige a la página de nosotros y el cuarto, al área de directorio.
*  Botón superior de modo oscuro/claro: situado en el margen superior izquierdo, es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior de Inicio: ubicado en el margen superior izquierdo, debajo del botón de modo oscuro claro. Su función consiste en volver a la página inicio.
*  Botón logo UCR: anclado en el margen superior derecho. Su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web. Contiene notas sobre el por qué se lleva a cabo el proyecto y de qué trata.

### Código
Esta etiquet **div** tiene la clase *container-fluid px-md-5 custom-container* que contiene todos los elementos de la página.
``` html
<div class="container-fluid px-md-5 custom-container" >   
</div>
```

Esta etiqeuta **div** tiene la clase *row custom-row justify-content-center* que divide las notas que están contenidas dentro del cuerpo de la página.
``` html
<div class="row custom-row justify-content-center" >   
</div>
```
Esta etiqueta **div** tiene la clase *image-container mx-auto* funciona como un contenedor de la imagen de cada nota.
``` html
<div class="image-container mx-auto" >
    <img alt="" class="offset negative-offset-y negative-offset-x" src="../../../assets/images/ab1.jpg" width="500" height="335">
</div>
```
Esta etiqueta **div** de la clase *col-xl custom-col* contiene el texto que se sitúa en el centro de la página y se despliega junto a las imágenes.
``` html
<div class="col-xl custom-col">
    <p>Esse anim sunt ad labore commodo laborum qui. Adipisicing Lorem dolor non culpa nisi quis deserunt qui nisi aliquip adipisicing. In duis aliqua laboris aliquip nostrud.</p>
    <p>Esse anim sunt ad labore commodo laborum qui. Adipisicing Lorem dolor non culpa nisi quis deserunt qui nisi aliquip adipisicing. In duis aliqua laboris aliquip nostrud.</p>
</div>
```
