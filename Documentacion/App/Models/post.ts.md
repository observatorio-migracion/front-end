# Documentación Post.ts
Esta sección contiene la documentación del código .ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utiliza para formar la base de datos de la página.

### Código
Esta clase define Thumbnail, que corresponde para el formato de  las imagenes miniaturas de una publicación del blog de la página.
Tiene los atributos de nombre, hash, ext, mime, ancho, alto, tamaño, path y url.

``` ts
export class Thumbnail {
    name: string | undefined;
    hash: string | undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number | undefined;
    height: number | undefined;
    size: number | undefined;
    path?: any | undefined;
    url: string | undefined;
}
``` 

Esta clase define Large, que corresponde al tipo largo de tamaños de formatos de las imagenes miniaturas de las publicaciones
Tiene los atributos de nombre, hash, ext, mime, ancho, alto, tamaño, path y url.
``` ts
export class Large {
    name: string | undefined;
    hash: string | undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number | undefined;
    height: number | undefined;
    size: number | undefined;
    path?: any | undefined;
    url: string | undefined;
}
``` 

Esta clase define Medium, que corresponde al lo tipo mediano de tamaños de formatos de las imagenes miniaturas de las publicaciones
Tiene los atributos de nombre, hash, ext, mime, ancho, alto, tamaño, path y url.
``` ts
export class Medium {
    name: string | undefined;
    hash: string| undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number | undefined;
    height: number | undefined;
    size: number | undefined;
    path?: any | undefined;
    url: string | undefined;
}
``` 

Esta clase define Small, que corresponde al lo tipo  pequeño de tamaños de formatos de las imagenes miniaturas de las publicaciones
Tiene los atributos de nombre, hash, ext, mime, ancho, alto, tamaño, path y url.
``` ts
export class Small {
    name: string | undefined;
    hash: string | undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number| undefined;
    height: number| undefined;
    size: number|undefined;
    path?: any|undefined;
    url: string|undefined;
}
```  

Esta clase define Formats, que corresponde a los formatos de las imagenes miniaturas de las publicaciones. 
Tiene los atributos de la clase thumbnail, los diferentes atributos de la clase Large: largo, medio, pequeño.
```  ts
export class Formats {
    thumbnail: Thumbnail  |undefined;
    large: Large |undefined;
    medium: Medium |undefined;
    small: Small |undefined;
}
``` 

Esta clase define Miniatura, que corresponde a las imagenes miniatutas de las publicaciones. 
 Tiene los atributos de id que es el identificador de la imagen, el nombre, el texto alternativo, caption, ancho, alto, el formato de la imagen que es otra clase, un hash, ext, tamaño, url, url de preview, provider, metadata provider, fecha de creación y fecha de actualización.
```  ts
export class Miniatura {
    id: string|undefined;
    name: string|undefined;
    alternativeText: string|undefined;
    caption: string|undefined;
    width: number|undefined;
    height: number|undefined;
    formats: Formats|undefined;
    hash: string|undefined;
    ext: string|undefined;
    mime: string|undefined;
    size: number|undefined;
    url: string|undefined;
    previewUrl?: any|undefined;
    provider: string|undefined;
    provider_metadata?: any|undefined;
    created_at: Date|undefined;
    updated_at: Date|undefined;
}
``` 

Esta clase define Categoria, que corresponde a las imagenes miniatutas de las publicaciones. 
 Tiene los atributos de id que es el identificador de la categoría, nombre, fecha de publicación en la página, fecha de creación, fecha de actualización y la imagen.
```  ts
export class Categoria {
    id: string|undefined;
    nombre: string|undefined;
    published_at: Date|undefined;
    created_at: Date|undefined;
    updated_at: Date|undefined;
    imagen:any |undefined;
}
``` 

sta clase define Post, que corresponde a las publicaciones. 
 Tiene los atributos de id que es el identificador de la publicación, titulo, contenido del post, descripción del post,fecha de publicación en la página, fecha de creación, fecha de actualización. Además tiene la imagen de miniatura asociada a la categoría de post y un array(lista) de categorías que puede tener una publicación.
``` ts
export class Post {
    id: string|undefined;
    titulo: string|undefined;
    contenido: string|undefined;
    descripcion: string|undefined;
    published_at: Date|undefined;
    created_at: Date|undefined;
    updated_at: Date|undefined;
    miniatura: Miniatura|undefined;
    categorias: Categoria[]|undefined;
}
``` 