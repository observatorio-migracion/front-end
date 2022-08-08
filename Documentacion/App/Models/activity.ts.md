# Documentación activity.ts
### Esta sección contiene la documentación del código activity.ts de los módulos para la base de datos de la página web. Estas secciones corresponden los modelos que se utilizan para formar la base de datos de la página. 

### Código

Esta interfaz define Large, que corresponde al largo de los formatos utilizados en las imagenes.  
Declara las variables: *name*, *hash*, *ext*, *mime*, *width*, *height*, *size*, *path* y *url*.
``` ts
export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}
``` 

Esta interfaz define Formats, que corresponde a los formatos utilizados en las imagenes.
Declara las variables: *thumbnail*, *large*, *medium* y *small*.
``` ts
export interface Formats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}
```

Esta intefaz define Imagenes, que corresponde a una imagenes, utilizadas en eventos, miniaturas de publicaciones y categorías.
Declara las variables: *id*, *name*, *alternativeText*, *caption*, *width*, *height*, *formats*, *hash*, *ext*, *mime*, *size*, *url*, *previewUrl*, *provider*, *providerMetadata*, *createdAt* y *updatedAt*.
``` ts
export interface Imagenes {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  providerMetadata: null;
  createdAt: string;
  updatedAt: string;
}
```

Esta intefaz define Activity, que corresponde a un evento de la página. 
Declara las variables: *id*, *nombre*, *fecha*, *descripcion*, *published_at*, *createdAt*, *updatedAt*, *imagenes* y *reunion*.
``` ts
export interface Activity {
  id: string;
  nombre: string;
  fecha: Date;
  descripcion: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  imagenes: Imagenes[];
  reunion: string;
}
```



