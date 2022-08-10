# Documentación faq.css

### Esta sección contiene la documentación del faq.css de la pagina faq de la página web. Dentro de su estructura visual posee: 
* Preguntas frecuentes que se pueden tener de la aplicacion

### Código

La clase **.faq-container** almacena todo el contenido de las preguntas
``` css
.faq-container {
  border-bottom: 1px solid var(--font-1);
  text-align: justify;
  text-justify: inter-word;
}
```

La etiqueta **h3** de la clase *faq-container* se utiliza para los titulos de la pagina
``` css
.faq-container h3 {
  font-weight: bold;
}
```

La clase **container** almacena todo el contenido de las paginas
``` css
.container {
  min-width: 40%;
  min-height: 60vh;
  margin: 10vh auto;
  font-size: 1rem;
  padding: 0 5vw;
}
```