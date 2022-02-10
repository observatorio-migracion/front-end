# Documentación fab.html

### Esta sección contiene la documentación del código fab.html del componente fab de la página web. Dentro de su estructura visual posee: 
*  Botón circular: Botón ubicado en la parte inferior derecha, en las páginas de *Directorio* y *Blog*. Este botón permite al usuario volver al inicio de la página, dicho botón posee forma circular con una flecha en dirección superior, además puede cambiar sus colores al alternar entre modo claro y modo oscuro para mejorar la legibilidad de este. 

### Código

Esta etiqueta **div** tiene la clase *fab* y encapsula todo el código base del botón.
``` html
<div class="fab">
  ...
</div>
```

Esta etiqueta **button** es el contenedor del diseño del botón, donde se declara en formato svg. Además, funciona como un componente accionador.
``` html
<button mat-fab [ngStyle]="{'background-color': backgroundColor}" aria-label="Example icon button with a home icon">
  <mat-icon><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" attr.fill="{{color}}">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
  </svg></mat-icon>
</button>
```
