# Documentación fab.css

### Esta sección contiene la documentación del código fab.css del componente fab de la página web. Dentro de su estructura visual posee: 
*  Botón circular: Botón ubicado en la parte inferior derecha, en las páginas de *Directorio* y *Blog*. Este botón permite al usuario volver al inicio de la página, dicho botón posee forma circular con una flecha en dirección superior, además puede cambiar sus colores al alternar entre modo claro y modo oscuro para mejorar la legibilidad de este. 

### Código

La clase **.fab** define el estilo base del botón, manteniéndolo en la parte inferior derecha de la página.
``` css
.fab {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 7%;
  left: 93%;
  z-index: 2;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 800px) {
  .fab {
    left: 90%;
  }
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 600px) {
  .fab {
    left: 85%;
  }
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 420px) {
  .fab {
    left: 80%;
  }
}
```
