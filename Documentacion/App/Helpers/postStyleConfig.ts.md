# Documentación postStyleConfig.ts
### Esta sección contiene la documentación del código postStyleConfig.ts del componente helper postStyleConfig.ts de la página web. Estas secciones corresponden a funciones extra usadas a lo largo del programa.

### Código

Exporta las funciones establecidas en el helper postStyleConfig para ser usadas en otras secciones del programa.
``` ts
export const postStyleConfig = `<style> 
  ...
`;
```

La etiqueta **h1** de la clase *.post-container* aplica un estilo a dicha etiqueta.
``` css
.post-container h1 {
  margin-top: 40px;
  font-size: 3rem;
  font-weight: 400;
}
```

La etiqueta **h2** de la clase *.post-container* aplica un estilo a dicha etiqueta.
``` css
.post-container h2 {
  margin-top: 1rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
```

La etiqueta **h3** de la clase *.post-container* aplica un estilo a dicha etiqueta.
``` css
.post-container h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
```

La etiqueta **h4** de la clase *.post-container* aplica un estilo a dicha etiqueta.
``` css
.post-container h4 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
```

La etiqueta **p** de la clase *.post-container* aplica un estilo a dicha etiqueta.
``` css
.post-container p {
  margin: 1rem 0;
  white-space: pre-wrap;
  font-size: 1rem;
  margin-bottom: 1rem;
}
```

La etiqueta **img** de la clase *.post-container* aplica un estilo a dicha etiqueta.
``` css
.post-container img {
  display: block;
  margin: 2rem auto;
  max-width: 95%;
  height: auto;
  border-radius: 0.3rem;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 800px) {
  .post-container h1{
    margin-top: 3vh;
    font-size: 2rem;
    font-weight: 400;
  }
}
```
