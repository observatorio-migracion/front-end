# Documentación theme.ts
### Esta sección contiene la documentación del código theme.ts del servicio theme de la página web. Estas secciones corresponden a peticiones *get* al backend por medio de las cuales se obtienen los datos que trabaja y muestra la página.

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

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class ThemeService {
    //...
}
```

Se definen dos atributos en la clase *ThemeService*: *themeSource* y *currentTheme*. 
``` ts
private themeSource:BehaviorSubject<string>;
public currentTheme:Observable<string>;
```

El constructor de la clase *ThemeService* inicializa dos variables.
``` ts
constructor() { 
  this.themeSource = new BehaviorSubject(window.localStorage.getItem('theme') || 'light');
  this.currentTheme = this.themeSource.asObservable();
}
```

Método de la clase *ThemeService* llamado **setTheme**, define el tema de la página web en base al parámetro recibido.
``` ts
setTheme(theme: string){
  this.themeSource.next(theme);
}
```