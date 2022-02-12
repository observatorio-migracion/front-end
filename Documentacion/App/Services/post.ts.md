# Documentación post.ts
### Esta sección contiene la documentación del código post.ts del servicio post de la página web. Estas secciones corresponden a peticiones *get* al backend por medio de las cuales se obtienen los datos que trabaja y muestra la página.

### Código

Importa el componente Injectable desde la API Core de Angular. Las dependencias son servicios u objetos que una clase necesita para realizar su función. La inyección de dependencia, o DI, es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas.
``` ts
import { Injectable } from '@angular/core';
```  

Importa el componente Observable desde la API rxjs. Los Observables brindan soporte para pasar mensajes entre partes de su aplicación. Se utilizan con frecuencia en Angular y son una técnica para el manejo de eventos, la programación asincrónica y el manejo de múltiples valores.
``` ts
import { Observable, of } from 'rxjs';
``` 

Importa los componentes filter y map desde la API rxjs. El opearador filter sive para filtrar los valores emitidos por la fuente. El operador map sirve paraque en los observables mappear valores en tipos de datos diferentes.
``` ts
import { filter, map } from 'rxjs/operators'
``` 

Importa Categoria y Post de la carpeta fuente src local del programa ubicada en models
```  ts
import { Categoria, Post } from '../models/Post';
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
```  ts
@Injectable({
  providedIn: 'root'
})
``` 

Exporta la clase para ser utilizada en otras instancias.
``` ts
export class PostService {
 //...
``` 

Se definen dos atributos en la clase *PostService*: *postsList* y *url*. 
``` ts
private postsList: Post[];
private url: string;
``` 

El constructor de la clase *PostService* inicializa dos variables y recibe el cliente HTTP.
``` ts
constructor(private _http: HttpClient) {
  this.postsList = new Array<Post>();
  this.url = environment.api.url;
}
``` 

Método de la clase *PostService* llamado **getPostsListSize**, retorna la cantidad de publicaciones con los parámetros recibidos.
``` ts
getPostsListSize(categoryFilter: string, searchParams: string = ''): Observable<any> {
  return this._http.get(`${this.url}/posts/count?${categoryFilter}${searchParams}`);
}
``` 

Método de la clase *PostService* llamado **getPostList**, retorna la lista de publicaciones con los parámetros recibidos.
``` ts
getPostList(categoryFilter: string = '', searchParams: string = '', start: number = 0, limit: number = 4): Observable<Post[]> {
  return this.http.get<Post[]>(`${this.url}/posts?${categoryFilter}${searchParams}_start=${start}&_limit=${limit}`);
}
``` 

Método de la clase *PostService* llamado **getPostList**, retorna la lista de publicaciones recientes con los parámetros recibidos.
``` ts
getRecentPostList(sort: string = '', limit: number = 4): Observable<Post[]> {
  return this.http.get<Post[]>(`${this.url}/posts?_sort=${sort}&_limit=${limit}`);
}
``` 

Método de la clase *PostService* llamado **getPostById**, retorna la publicación que corresponde al parámetro *id* recibido.
``` ts
getPostById(id: string): Observable<Post> {
  return this.http.get<Post>(`${this.url}/posts/${id}`);
}
``` 

Método de la clase *PostService* llamado **getEnabledCategories**, retorna las categorías en base al parámetro *limit* recibido.
``` ts
//if limit === 0 returns all the elements
getEnabledCategories(limit: number = 0): Observable<Categoria[]> {
  return this.http.get<Categoria[]>(`${this.url}/categories${(limit) ? "?_limit=" : ""}${(limit)?limit:""}`);
}
``` 

Método de la clase *PostService* llamado **searchByKeywords**, retorna las publicaciones que corresponden al parámetro *keywords* recibido.
``` ts
//retorna un observable de un arreglo de posts;
searchByKeywords(keywords: string): Observable<Post[]> {
  return this.http.get<Post[]>(`${this.url}/posts?${keywords}`);
}
``` 