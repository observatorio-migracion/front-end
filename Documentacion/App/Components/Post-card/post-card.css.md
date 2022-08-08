# Documentación post-card.css

### Esta sección contiene la documentación del código post-card.css del componente post-card de la página web. Dentro de su estructura visual posee: 
*  Botón de forma rectangular con la información de la publicación.
*  Imagen de la categoria de la publicación
*  Resumen del contenido del post 
*  Dia de publicacion

### Codigo

La clase **.custom-card** encapsula todo el contenido del post card.
``` css
.custom-card {
  transition: transform 0.1s ease;
  max-width: inherit;
}
```

La propiedad **hover** de la clase *custom-card* determina que propiedades tiene al tener el mouse localizado encima del elemento.
``` css
.custom-card:hover {
  transform: translateY(-10px);
}
```

La clase **.card-body-container** contiene los componentes de texto del post card.
``` css
.card-body-container {
  padding-top: 1rem;
}
```

La clase **.card-body-container** contiene los componentes de texto del post card.
el selector universal **``*``** le da estilo a todos los componentes dentro de esta clase
``` css
.card-body-container * {
  padding-top: 0;
}
```

La propiedad **hover** de la clase *card-title* determina que propiedades tiene al tener el mouse localizado encima del elemento.
``` css
.card-title:hover {
  color: var(--font-3);
  cursor: pointer;
  border: none;
  outline: none;
}
```

La clase **mat-chip** es donde se almacenan las categorias de un post
``` css
mat-chip {
  padding: none;
  margin: none;
}
```

La clase **categories** guarda todas los mat-chips de todas las categorias
``` css
.categories {
  margin-bottom: 1rem;
}
```

La etiqueta **img** se usa para guardar una imagen
``` css
img {
  object-fit: cover;
  width: 100%;
  height: auto;
}
```

El delimitador **media** cambia el comportamiento de distintas clases con respecto a la resolución de la pantalla.
``` css
@media (max-width: 800px){
    custom-card{
        margin-top: 1rem;
        font-size: 1rem;
        width: 150rem;
        margin-left: 0;
        margin-right: 0;
    }
}
```
  
