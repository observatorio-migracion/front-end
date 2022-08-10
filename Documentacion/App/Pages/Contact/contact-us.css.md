# Documentación contact-us.css

### Esta sección contiene la documentación del contact-us.css de la pagina contact-us de la página web. Dentro de su estructura visual posee: 
* Informacion sobre la organizacion a la que pertenecemos y formas de contactarnos

### Código

La clase **.container** almacena todo el contenido de la pagina
``` css
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 40%;
  min-height: 49vh;
  margin: 10vh auto;
  font-size: 1rem;
  padding: 0 15vw;
}
```

La etiqueta **a** se utiliza para los links de la pagina
``` css
a {
  color: var(--font-3);
}
```

La propiedad **hover** de la etiqueta *a* se utiliza cuando el mouse esta colocado encima del elemento
``` css
a:hover {
  text-decoration: underline;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 728px) {
  .container {
    padding: 0 5vw;
  }
}
```