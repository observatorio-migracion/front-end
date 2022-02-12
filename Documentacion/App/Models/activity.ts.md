# Documentación activity.ts
### Esta sección contiene la documentación del código activity.ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utilizan para formar la base de datos de la página. 

### Código

Esta clase define Activity, que corresponde a un evento de la página. 
Declara las variables: *id*, *nombre*, *fecha*, *descripcion*, *publishedAt*, *createdAt*, *updatedAt*, *imagenes* y *reunion*.
``` ts
export class Activity {
    constructor(
        public id: string,
        public nombre: string,
        public fecha: Date,
        public descripcion: string,
        public publishedAt: string,
        public createdAt: string,
        public updatedAt: string,
        public imagenes: Imagenes[],
        public reunion: string
    ) { }
}
```

Esta clase define Imagenes, que corresponde a una imagenes, utilizadas en eventos, miniaturas de publicaciones y categorías.
Declara las variables: *id*, *name*, *alternativeText*, *caption*, *width*, *height*, *formats*, *hash*, *ext*, *mime*, *size*, *url*, *previewUrl*, *provider*, *providerMetadata*, *createdAt* y *updatedAt*.
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
        public providerMetadata: null,
        public createdAt: string,
        public updatedAt: string,
    ) { }
}
```

Esta clase define Formats, que corresponde a los formatos utilizados en las imagenes.
Declara las variables: *thumbnail*, *large*, *medium* y *small*.
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

Esta clase define Large, que corresponde al largo de los formatos utilizados en las imagenes.  
Declara las variables: *name*, *hash*, *ext*, *mime*, *width*, *height*, *size*, *path* y *url*.
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
