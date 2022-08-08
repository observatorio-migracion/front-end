# Documentación Post.ts
### Esta sección contiene la documentación del código Post.ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utilizan para formar la base de datos de la página.

### Código

Esta intefaz define Thumbnail, que corresponde al formato de las imagenes miniaturas de una publicación del blog de la página.
Declara las variables: *name*, *hash*, *ext*, *mime*, *width*, *height*, *size*, *path* y *url*.
``` ts
export interface Thumbnail {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}
``` 

Esta intefaz define Large, que corresponde al tipo largo de tamaños de formatos de las imagenes miniaturas de las publicaciones.
Declara las variables: *name*, *hash*, *ext*, *mime*, *width*, *height*, *size*, *path* y *url*.
``` ts
export interface Large {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}
``` 

Esta intefaz define Medium, que corresponde al tipo mediano de tamaños de formatos de las imagenes miniaturas de las publicaciones.
Declara las variables: *name*, *hash*, *ext*, *mime*, *width*, *height*, *size*, *path* y *url*.
``` ts
export interface Medium {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}
``` 

Esta intefaz define Small, que corresponde al tipo pequeño de tamaños de formatos de las imagenes miniaturas de las publicaciones.
Declara las variables: *name*, *hash*, *ext*, *mime*, *width*, *height*, *size*, *path* y *url*.
``` ts
export interface Small {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}
```  

Esta intefaz define Formats, que corresponde a los formatos de las imagenes miniaturas de las publicaciones. 
Declara las variables: *thumbnail*, *large*, *medium* y *small*.
```  ts
export interface Formats {
  thumbnail: Thumbnail | undefined;

  large: Large | undefined;

  medium: Medium | undefined;

  small: Small | undefined;
}
``` 

Esta intefaz define Miniatura, que corresponde a las imagenes miniatutas de las publicaciones. 
Declara las variables: *id*, *name*, *alternativeText*, *caption*, *width*, *height*, *formats*, *hash*, *ext*, *mime*, *size*, *url*, *previewUrl*, *provider*, *providerMetadata*, *createdAt* y *updatedAt*.
```  ts
export interface Miniatura {
  id: string | undefined;

  name: string | undefined;

  alternativeText: string | undefined;

  caption: string | undefined;

  width: number | undefined;

  height: number | undefined;

  formats: Formats | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  size: number | undefined;

  url: string | undefined;

  previewUrl?: string | undefined;

  provider: string | undefined;

  providerMetadata?: string | undefined;

  createdAt: Date | undefined;

  updatedAt: Date | undefined;
}
``` 

Esta intefaz define Categoria, que corresponde a las imagenes miniatutas de las categorías. 
Declara las variables: *id*, *nombre*, *published_at*, *createdAt*, *updatedAt* y *imagen*.
```  ts
export interface Categoria {
  id: string | undefined;

  nombre: string | undefined;

  published_at: Date | undefined;

  createdAt: Date | undefined;

  updatedAt: Date | undefined;

  imagen: any | undefined;
}
``` 

Esta intefaz define Post, que corresponde a las publicaciones. 
Declara las variables: *id*, *titulo*, *contenido*, *descripcion*, *published_at*, *createdAt*, *updatedAt*, *miniatura* y *categorias*.
``` ts
export interface Post {
  id: string | undefined;

  titulo: string | undefined;

  contenido: string | undefined;

  descripcion: string | undefined;

  published_at: Date | undefined;

  createdAt: Date | undefined;

  updatedAt: Date | undefined;

  miniatura: Miniatura | undefined;

  categorias: Categoria[] | undefined;
}
``` 