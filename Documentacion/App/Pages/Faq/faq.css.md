# Documentación faq.css

### Esta sección contiene la documentación del código .css del elemento faq de la página web. Dentro de su estructura visual posee: 
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas: el primero, lleva a la página principal; el segundo, redirige al mismo blog; el tercero, redirige a la página de nosotros y el cuarto, al área de directorio.
*  Botón superior de modo oscuro/claro: situado en el margen superior izquierdo, es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior de Inicio: ubicado en el margen superior izquierdo, debajo del botón de modo oscuro claro. Su función consiste en volver a la página inicio.
*  Botón logo UCR: anclado en el margen superior derecho. Su función es redirigir a la página de la Universidad de Costa Rica.
*  Cuerpo de la página: comprende el centro de la página web. Contiene notas sobre el por qué se lleva a cabo el proyecto y de qué trata.

### Código

La clase **.container** contiene todos los elementos de las faq.
``` css
.container{    
  min-width: 40%;
  min-height: 60vh;
  margin: 10vh auto;
  font-size: 1rem;
  padding: 0 5vw;
}
```

La clase **.faq-container** contiene los elementos de una faq de forma individual.
``` css
.faq-container{
  border-bottom: 1px solid var(--font-1);
  text-align: justify;
  text-justify: inter-word;
}
```

La etiqueta **h3** modifica los (sub)títulos de las preguntas.
``` css
.faq-container h3 {
  font-weight: bold;
}
```

