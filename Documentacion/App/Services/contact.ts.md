# Documentación contact.ts
Esta sección contiene la documentación del código .ts del servicio contact de la página web. Estas secciones corresponden a peticiones get al backend de los cuales se obtiene los datos que trabaja y muestra la página.

### Código
Importa el componente Injectable desde la API Core de Angular. Las dependencias son servicios u objetos que una clase necesita para realizar su función. La inyección de dependencia, o DI, es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas.
``` ts
import { Injectable } from '@angular/core';
```

Importa Contact de la carpeta fuente src local del programa ubicada en models
``` ts
import { Contact } from '../models/Contact';
```

Importa el componente HttpClient desde la API Core de Angular. La mayoría de las aplicaciones de front-end necesitan comunicarse con un servidor a través del protocolo HTTP, para descargar o cargar datos y acceder a otros servicios de back-end. Angular proporciona una API HTTP de cliente para aplicaciones Angular.
``` ts
import { HttpClient } from '@angular/common/http';
```

Importa environment de la carpeta fuente src local del programa ubicada en environments
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

Exporta la clase para ser usada en otras instancias
``` ts
export class ContactService {

}
```


Asigna el atributo privado llamado contactsList el cual corresponde a un arreglo de contactos.
``` ts
private contactsList:Contact[];
```


Asigna el atributo privado llamado url el cual corresponde a un string.
``` ts
private url:string;
```

Constructor de la clase ContactService, este recibe un parametro de tipo HttpClient del cual obtiene el arreglo de contactos que iguala al atributo de la clase y url que de igual manera iguala al atributo de la clase.
``` ts
constructor(private _http: HttpClient) {
    this.contactsList = new Array<Contact>();
    this.url = environment.api.url;
}
```

Método de la clase ContactService llamado getContactsListSize, dicho método recibe un parámetro de tipo string con las keywords y un observable de tipo número, posteriormente devuelve la petición get obtenida a través HttpClient retornando la cantidad de contactos.
``` ts
getContactsListSize(keywords: string): Observable<number>{
    return this._http.get<number>(`${this.url}/contactos/count?${keywords}`);
  }
```

Método de la clase ContactService llamado getContactsList, dicho método recibe un parámetro de tipo string con las keywords, un parámetro llamado order de tipo string, un parámetro de tipo entero con la posición inicial y un parámetro de tipo entero con la posición final posteriormente devuelve la petición get obtenida a través HttpClient retornando el arreglo de contactos definido por los valores de inicio y final.
``` ts
getContactsList(keywords: string, order: string = '', start: number = 0, limit: number = 4): Observable<Contact[]> {
    return this._http.get<Contact[]>(`${this.url}/contactos?${keywords}&_sort=${order}&_limit=${limit}&_start=${start}`);
  }
```
