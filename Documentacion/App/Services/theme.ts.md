# Documentación theme.ts
Esta sección contiene la documentación del código .ts del servicio theme de la página web. Estas secciones corresponden a peticiones get al backend de los cuales se obtiene los datos que trabaja y muestra la página.

### Código
Importa el componente Injectable desde la API Core de Angular. Las dependencias son servicios u objetos que una clase necesita para realizar su función. La inyección de dependencia, o DI, es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas.
``` ts
import { Injectable } from '@angular/core';
```

Importa el componente Observable y BehaviorSubject desde la API rxjs. Los Observables brindan soporte para pasar mensajes entre partes de su aplicación. Y  un BehaviorSubject es similar a un observable, con cualidades específicas para envio de valores. Los observable utilizan con frecuencia en Angular y son una técnica para el manejo de eventos, la programación asincrónica y el manejo de múltiples valores.
``` ts
import { BehaviorSubject, Observable } from 'rxjs';
```

El servicio en sí es una clase generada por la CLI y decorada con ella. Por defecto, este decorador tiene una propiedad que crea un proveedor para el servicio. En este caso, especifica que Angular debe proporcionar el servicio en el inyector raíz 
``` ts
@Injectable({
  providedIn: 'root'
})
```

Exporta la clase para ser usada en otras instancias
``` ts
export class ThemeService {
    // codigos siguientes
}
```

Para la claseThemesService se crean dos varibles una privadallamada themeSource que corresponde a un BehaviorSubject de tipo string y a un Observable de tipo string llamado currentTheme.
``` ts
  private themeSource:BehaviorSubject<string>;
  public currentTheme:Observable<string>;
```

Constructor de la clase ThemeService, sin parametros pero que si asigna al atributothemeSourceun nuevo BehaviorSubject dependiendo si ya tiene en e almacenamento local un thema elegido o sino le presenta el claro. Además asigna al atributo currentTheme del themeSource como Observable. 
``` ts
  constructor() { 
    this.themeSource = new BehaviorSubject(window.localStorage.getItem('theme') || 'light');
    this.currentTheme = this.themeSource.asObservable();
  }
```

Método de la clase THemeService llamado setTheme, dicho método recibe un parámetro string llamado thema y al atributo del themeSource con el metodo de BheaviorSubject next() envía como parametro el tema recibido.

``` ts
  setTheme(theme: string){
    this.themeSource.next(theme);
  }
}
```