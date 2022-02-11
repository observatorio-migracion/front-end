# Documentación event.ts
### Esta sección contiene la documentación del código event.ts del servicio event de la página web. Estas secciones corresponden a peticiones *get* al backend por medio de las cuales se obtienen los datos que trabaja y muestra la página.

### Código

Importa el componente Injectable desde la API Core de Angular. Las dependencias son servicios u objetos que una clase necesita para realizar su función. La inyección de dependencia, o DI, es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas.
``` ts
import { Injectable } from '@angular/core';
```

Importa el componente Observable desde la API rxjs. Los Observables brindan soporte para pasar mensajes entre partes de su aplicación. Se utilizan con frecuencia en Angular y son una técnica para el manejo de eventos, la programación asincrónica y el manejo de múltiples valores.
``` ts
import { Observable, of } from 'rxjs';
```

Importa Activity de la carpeta fuente src local del programa ubicada en models
``` ts
import { Activity } from '../models/Activity';
```

Importa el componente HttpClient desde la API Core de Angular. La mayoría de las aplicaciones de front-end necesitan comunicarse con un servidor a través del protocolo HTTP, para descargar o cargar datos y acceder a otros servicios de back-end. Angular proporciona una API HTTP de cliente para aplicaciones Angular.
``` ts 
import { HttpClient } from '@angular/common/http';
```

Importa environment de la carpeta fuente src local del programa ubicada en environments
``` ts 
import { environment } from 'src/environments/environment';
``` 

El servicio en sí es una clase generada por la CLI y decorada con ella. Por defecto, este decorador tiene una propiedad que crea un proveedor para el servicio. En este caso, especifica que Angular debe proporcionar el servicio en el inyector raíz 
``` ts
@Injectable({
  providedIn: 'root'
})
```

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class EventService {
    //...
}
```

Se definen dos atributos en la clase *EventService*: *activitiesList* y *url*. 
 
``` ts
private activitiesList:Activity[];
private url: string;
```

El constructor de la clase *EventService* inicializa dos variables y recibe el cliente HTTP.
``` ts
constructor(private http: HttpClient) { 
  this.activitiesList = new Array<Activity>();
  this.url = environment.api.url;
}
```

Método de la clase *EventService* llamado **getActivitiesList**, retorna la lista de actividades con los parámetros recibidos.
``` ts 
getActivitiesList(limit: number = 4): Observable<Activity[]> {
  return this.http.get<Activity[]>(`${this.url}/eventos?_limit=${limit}`);
}
``` 
