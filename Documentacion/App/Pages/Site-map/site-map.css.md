# Documentación site-map.css

### Esta sección contiene la documentación del site-map.css de la pagina site-map de la página web. Dentro de su estructura visual posee: 
* Links hacia todas las distintas paginas del sitio

### Código

La clase **.container** almacena todo el contenido de la pagina
``` css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40%;
  min-height: 60vh;
  margin: 10vh auto;
  font-size: 1rem;
  padding: 0 5vw;
}
```

La etiqueta **a** se utiliza para los links de la pagina
``` css
a {
  color: var(--font-1);
  font-size: 1.3rem;
}
```

La propiedad **hover** de la etiqueta *a* se utiliza cuando el mouse esta colocado encima del elemento
``` css
a:hover {
  color: var(--font-3);
  text-decoration: underline;
}
```

La etiqueta **h1** se utiliza para los titulos
``` css
h1 {
  font-size: 3rem;
}
```