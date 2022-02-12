# Documentación contact.ts

### Esta sección contiene la documentación del código contact.ts del servicio contact de la página web. Estas secciones corresponden a peticiones *get* al backend por medio de las cuales se obtienen los datos que trabaja y muestra la página.

### Código

Importa el componente Injectable desde la API Core de Angular. Las dependencias son servicios u objetos que una clase necesita para realizar su función. La inyección de dependencia, o DI, es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas.
``` ts
import { Injectable } from '@angular/core';
```

Importa Contact de la carpeta fuente src local del programa ubicada en models.
``` ts
import { Contact } from '../models/Contact';
```

Importa el componente HttpClient desde la API Core de Angular. La mayoría de las aplicaciones de front-end necesitan comunicarse con un servidor a través del protocolo HTTP, para descargar o cargar datos y acceder a otros servicios de back-end. Angular proporciona una API HTTP de cliente para aplicaciones Angular.
``` ts
import { HttpClient } from '@angular/common/http';
```

Importa environment de la carpeta fuente src local del programa ubicada en environments.
``` ts
import { environment } from 'src/environments/environment';
```

Importa el componente Injectable desde la API rxjs. Los Observables brindan soporte para pasar mensajes entre partes de su aplicación. Se utilizan con frecuencia en Angular y son una técnica para el manejo de eventos, la programación asincrónica y el manejo de múltiples valores.
``` ts
import { Observable } from 'rxjs';
```

El servicio en sí es una clase generada por la CLI y decorada con ella. Por defecto, este decorador tiene una propiedad que crea un proveedor para el servicio. En este caso, especifica que Angular debe proporcionar el servicio en el inyector raíz 
``` ts
@Injectable({
  providedIn: 'root'
})
```

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class ContactService {
  //...
}
```

Se definen dos atributos en la clase *ContactService*: *contactsList* y *url*. 
``` ts
private contactsList:Contact[];
private url:string;
```

El constructor de la clase *ContactService* inicializa dos variables y recibe el cliente HTTP.
``` ts
constructor(private http: HttpClient) {
  this.contactsList = new Array<Contact>();
  this.url = environment.api.url;
}
```

Método de la clase *ContactService* llamado **getContactsListSize**, retorna la cantidad de contactos con el *keyword* recibido.
``` ts
getContactsListSize(keywords: string): Observable<number>{
  return this.http.get<number>(`${this.url}/contactos/count?${keywords}`);
}
```

Método de la clase *ContactService* llamado **getContactsList**, retorna la lista de contactos con los parámetros recibidos.
``` ts
getContactsList(keywords: string, order: string = '', start: number = 0, limit: number = 4): Observable<Contact[]> {
  return this.http.get<Contact[]>(`${this.url}/contactos?${keywords}&_sort=${order}&_limit=${limit}&_start=${start}`);
}
```
