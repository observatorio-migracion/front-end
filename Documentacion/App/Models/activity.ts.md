# Documentación activity.ts
Esta sección contiene la documentación del código .ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utiliza para formar la base de datos de la página. 

### Código
Esta clase define Activity, que corresponde un evento de la página. Tiene los atributos de id que es el identificador del evento, nombre, fecha, descripción, fecha de publicación en la página, fecha de creación, fecha de actualización, una arreglo de imágenes y un atributo que peude tener texto asociado a la reunion. 
``` ts
export class Activity {
    constructor(
        public id: string,
        public nombre: string,
        public fecha: Date,
        public descripcion: string,
        public published_at: string,
        public created_at: string,
        public updated_at: string,
        public imagenes: Imagenes[],
        public reunion: string
    ) { }
}
```

Esta clase define Imagenes, que corresponde a una imagenes, utilizadas en eventos, miniaturas de publicaciones y categorías.
 Tiene los atributos de id que es el identificador de la imagen, el nombre, el texto alternativo, caption, ancho, alto, el formato de la imagen que es otra clase, un hash, ext, tamaño, url, url de preview, provider, metadata provider, fecha de creación y fecha de actualización.
``` ts
export class Imagenes {
    constructor(
        public id: string,
        public name: string,
        public alternativeText: string,
        public caption: string,
        public width: number,
        public height: number,
        public formats: Formats,
        public hash: string,
        public ext: string,
        public mime: string,
        public size: number,
        public url: string,
        public previewUrl: null,
        public provider: string,
        public provider_metadata: null,
        public created_at: string,
        public updated_at: string,
    ) { }
}
```

Esta clase define Formats, que corresponde a los formatos  utilizados en las imagenes. Tiene los atributos de la clase thumbnail, los diferentes atributos de la clase Large: largo, medio, pequeño.
``` ts
export class Formats {
    constructor(
        public thumbnail: Large,
        public large: Large,
        public medium: Large,
        public small: Large
    ) { }
}
```

Esta clase define Large, que corresponde a una el largo de los formatos utilizados en las imagenes. Tiene los atributos de nombre, hash, ext, ancho, alto, tamaño, path y url. 
``` ts
export class Large {
    constructor(
        public name: string,
        public hash: string,
        public ext: string,
        public mime: string,
        public width: number,
        public height: number,
        public size: number,
        public path: null,
        public url: string
    ) { }
}
``` 
