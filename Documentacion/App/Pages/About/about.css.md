# Documentación about.css

 Esta sección contiene la documentación del código .html del elemento about de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la página principal, el segundo es el corresponde al botón que redirige al mismo blog, el tercer botón redirige a la página de nosotros, y el cuarto al área de directorio.
*  Botón superior de modo oscuro/claro: el botón se sitúa en el margen superior izquierdo, dicho botón es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  botón superior Inicio: un botón ubicado en el margen superior izquierdo debajo del botón de modo oscuro claro, su función consiste en volver a la página inicio.
*  botón logo UCR: un botón anclado en el margen superior derecho, su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web en esta sección contiene notas sobre la agrupación que llevo a cabo el proyecto y alguna información extra.

### Código

Esta clase **.custom-container** almacena todos los componentes de la pagina
``` css
.custom-container {
  margin-top: 150px;
  margin-bottom: 150px;
  min-height: 90vh;
  text-align: justify;
  text-justify: inter-word;
}
```

Esta clase **.custom-row** almacena las filas de la pagina
``` css
.custom-row {
  margin-bottom: 15vh;
}
```

Esta clase **custom-col** es para os campos de las columnas de la pagina
``` css
.custom-col {
  max-width: 500px;
  width: 500px;
  height: unset;
  margin: 45px;
}
```

La etiqueta **p** es para los parrafos
``` css
p {
  font-size: 1.3rem;
}
```

La clase **.image-container** es para guardar las imagenes
``` css
.image-container {
  background-color: var(--background-02);
  color: var(--font-4);
  width: 500px;
  height: 335px;
  max-width: 500px;
  max-height: 335px;
}
```

Los offsets definen cuanto se mueven en un eje los componentes de la pagina
``` css
.offset {
  position: relative;

  --offset: 24px;
  --negative-offset: 24px;
}

.positive-offset-y {
  top: var(--offset);
}

.positive-offset-x {
  left: var(--offset);
}

.negative-offset-y {
  bottom: var(--offset);
}

.negative-offset-x {
  right: var(--offset);
}
```


El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 600px) {
  .custom-container {
    margin-top: 70px;
  }

  .image-container {
    width: 350px;
    height: 235px;
    margin: 0 auto;
  }

  .image-container img {
    width: 350px;
    height: 235px;
  }

  .custom-col {
    width: 350px;
    height: unset;
    max-height: unset;
    margin: 0 20px;
  }

  p {
    font-size: 1rem;
  }

  .custom-row {
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .custom-col {
    margin: 30px 20px;
  }

  .custom-row {
    margin: 20 auto;
  }
}

@media (max-width: 420px) {
  .image-container {
    width: 270px;
    height: 180px;
    margin: 0 auto;
  }

  .image-container img {
    width: 270px;
    height: 180px;
  }

  .custom-col {
    width: 300px;
    height: unset;
    margin: 20px 10px;
  }

  .custom-row {
    margin: 0 auto;
    margin-bottom: 20vh;
  }
}

@media (max-width: 320px) {
  .image-container {
    width: 240px;
    height: 160px;
    margin: 0 auto;
  }

  .image-container img {
    width: 240px;
    height: 160px;
  }

  p {
    font-size: 0.8rem;
  }
}
```
