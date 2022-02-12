# Documentación about.html

 Esta sección contiene la documentación del código .html del elemento about de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la página principal, el segundo es el corresponde al botón que redirige al mismo blog, el tercer botón redirige a la página de nosotros, y el cuarto al área de directorio.
*  Botón superior de modo oscuro/claro: el botón se sitúa en el margen superior izquierdo, dicho botón es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior Inicio: un botón ubicado en el margen superior izquierdo debajo del botón de modo oscuro claro, su función consiste en volver a la página inicio.
*  Botón logo UCR: un botón anclado en el margen superior derecho, su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web en esta sección contiene notas sobre la agrupación que llevo a cabo el proyecto y alguna información extra.

### Código

Divisor de clase que contiene todas las subelementos de la página, el formato que se aplique a este divisor afecta a toda la página.
``` html
<div class="container-fluid px-md-5 custom-container" >   
</div>
```

Divisor de clase para las notas que están contenidas dentro del cuerpo de la pagina
``` html
<div class="row custom-row justify-content-center" >   
</div>
```
Divisores de clase para la imagen de la nota posteada en la página, dentro del divisor se brinda la ruta source a la imagen .jpg y mediante una declaración inline se asigna ancho y altura.
``` html
<div class="image-container mx-auto" >
    <img alt="" class="offset negative-offset-y negative-offset-x" src="../../../assets/images/ab1.jpg" width="500" height="335">
</div>
```
Divisor de clase que contiene el texto que se sitúa en el centro de la página y que se despliega junto a las imágenes
``` html
<div class="col-xl custom-col">
    <p>Esse anim sunt ad labore commodo laborum qui. Adipisicing Lorem dolor non culpa nisi quis deserunt qui nisi aliquip adipisicing. In duis aliqua laboris aliquip nostrud.</p>
    <p>Esse anim sunt ad labore commodo laborum qui. Adipisicing Lorem dolor non culpa nisi quis deserunt qui nisi aliquip adipisicing. In duis aliqua laboris aliquip nostrud.</p>
</div>
```

El objetivo del componente About es mostrar información valiosa del proyecto y de las personas que lo desarrollaron, por este motivo estos posts son estáticos y se sitúan en el código fuente dado que su objetivo es que perdure en la página y no está pensado para ser modificados de forma activa. Por este motivo en la página se incluyeron con código de forma homóloga para los distintos posts, por lo que si se desease agregar otro se deberá agregar el código un nuevo bloque de código debajo del ultimo agregado.
