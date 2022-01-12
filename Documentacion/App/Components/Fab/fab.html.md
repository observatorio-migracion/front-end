# Documentación fab.html

 Esta sección contiene la documentación del código .html del componente fab de la página web. Dentro de su estructura visual posee: 
*  Botón de forma circular con una flecha: Visualmente es un botón ubicado en la parte inferior derecha de las paginas este botón permite al usuario volver al inicio de la página, dicho botón posee forma circular con una flecha en dirección superior, se puede encontrar en las páginas de Directorio y Blog, además puede cambiar sus colores al alternar entre modo claro y modo oscuro para mejorar la legibilidad de este. 

### Código

Divisor de la clase fab el cual lo identifica con su respectiva clase declarada como fab 
``` html
<div class="fab">
      
</div>
```

Declaración de llamada al estilo de angular material ngStyle, el ngStyle permite añadir clases con condicionales esto permite que la variable sea aplicada solamente si se encuentra en el valor bool de True, seguido de una declaración inline de color para el fondo del botón, esto color de fondo es retomado en TypeScript donde se le asigna un valor dinámico para alternar colores.
``` html
<button mat-fab [ngStyle]="{'background-color': backgroundColor}" aria-label="Example icon button with a home icon">
```

Declaración del svg el cual corresponde a la flecha que se encuentra dentro de la figura, posee también atributos inline los cuales corresponden respectivamente a la altura que tendría el valor por defecto de 24px, el viewBox que define la posición y la dimensión, en el espacio del usuario, de una ventana gráfica SVG, width que corresponde al ancho definido por defecto que sería de 24px, posteriormente el attr este tipo representa un atributo de un elemento DOM como un objeto particularmente al fill el cual es un atributo de presentación que define el color ( o cualquier servidor de pintura SVG como degradados o patrones ) utilizado para pintar el elemento, asignado mediante un color que puede ser modificado de forma dinámica.
``` html
<mat-icon><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" attr.fill="{{color}}">
```

Declaración del path dentro del SVG corresponde al elemento genérico para definir una forma. Todas las formas básicas se pueden crear con un elemento de ruta path. Debido a que el atributo fill no posee valor este en particular no posee cambios de color esto debido a que corresponde a su forma.
``` html
<path d="M0 0h24v24H0V0z" fill="none" />
```

Declaración del segundo path dentro del SVG este en particular al igual que el path declarado anteriormente corresponde a su forma, esta vez se le reasignan los valores para que se ajuste a los márgenes de forma adecuada.
``` html
<path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
```

Final de la declaración del svg mat-icon, el cual corresponde al icono dentro de la figura, a la flecha.
``` html
</svg></mat-icon>
```

Final de la declaración del botón, el cual corresponde al botón para volver a la parte superior.
``` html
</button>
```
