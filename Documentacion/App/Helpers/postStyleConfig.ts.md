# Documentación postStyleConfig.ts
Esta sección contiene la documentación del código .ts del componente helper postStyleConfig de la página web. Estas secciones corresponden a funciones extra usadas a lo largo del programa, dichas funciones se les dio el nombre de helpers y fueron ubicadas en esta sección como tal.

### Código

Exporta las funciones establecidas en el helper postStyleConfig para ser usadas en otras secciones del programa.
``` ts
export const postStyleConfig = `<style> 
```

Configuración predefinida bajo la etiqueta post-container bajo una etiqueta de título h1 en la cual se le asigna un margen superior de 40px, tamaño fuente de 3rem (48px aproximadamente) y un ancho fuente de 400, dicha configuración puede ser llamada a través del helper.
``` ts
.post-container h1{
  margin-top: 40px;
  font-size: 3rem;
  font-weight: 400;
}
```

Configuración predefinida bajo la etiqueta post-container bajo una etiqueta de título h2 en la cual se le asigna un margen superior de 1rem (16px aproximadamente), tamaño fuente de 1.6rem (25,6px aproximadamente) y un ancho fuente de 1rem (16px aproximadamente), dicha configuración puede ser llamada a través del helper.
``` ts
.post-container h2{
  margin-top: 1rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
```

Configuración predefinida bajo la etiqueta post-container bajo una etiqueta de título h3 en la cual se le asigna un tamaño fuente de 1.4rem (22,4px aproximadamente) y un margen inferior de 1rem (16px aproximadamente), dicha configuración puede ser llamada a través del helper.
``` ts
.post-container h3{
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
```

Configuración predefinida bajo la etiqueta post-container bajo una etiqueta de título h4 en la cual se le asigna un tamaño fuente de 1.2rem (19,2px aproximadamente) y un margen inferior de 1rem (16px aproximadamente), dicha configuración puede ser llamada a través del helper.
``` ts
.post-container h4{
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
```

Configuración predefinida bajo la etiqueta post-container bajo una etiqueta de párrafo en la cual se le asigna un margen superior-inferior de 1rem (16px aproximadamente) y un margen izquierda-derecha de 0 por defecto, se determina el espacio en blanco para el elemento como secuencias de espacios preservados, el tamaño fuente definido en 1rem (16px aproximadamente), y un margen inferior de 1rem (16px aproximadamente).
``` ts
.post-container p {
  margin: 1rem 0;
  white-space: pre-wrap;
  font-size: 1rem;
  margin-bottom: 1rem;
}
```

Configuración predefinida bajo la etiqueta post-container bajo una etiqueta de imagen en la cual se le asigna una propiedad display de block donde establece la visualización interna-externa de los elementos, un margen de 2rem (32px aproximadamente) en ajuste automático, con un ancho máximo de 95%, altura automática y un borde de tipo radius que aplica a todo el fondo incluso si el elemento no tiene borde este será de 0.3rem (aproximadamente 4,8px).
``` ts
.post-container img{
  display: block;
  margin: 2rem auto;
  max-width: 95%;
  height: auto;
  border-radius: 0.3rem;
}
```

Configuración predefinida de media query para ancho de pantalla máximo de 800px, para dicha configuración se establece una etiqueta llamada post-container bajo una etiqueta HTML h1, donde establece un margen superior de 3vh (57.6px aproximadamente), un tamaño fuente de 2rem (32px aproximadamente) y un ancho de 400.
``` ts
@media (max-width: 800px) {
  .post-container h1{
    margin-top: 3vh;
    font-size: 2rem;
    font-weight: 400;
  }
}
```
