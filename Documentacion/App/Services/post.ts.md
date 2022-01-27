# Documentación post.ts
Esta sección contiene la documentación del código .ts del servicio post de la página web. Estas secciones corresponden a peticiones get al backend de los cuales se obtiene los datos que trabaja y muestra la página.

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

Exporta la clase para ser usada en otras instancias
``` ts
export class PostService {
 // códigos siguientes
``` 

Crea dos atributos de la clase PostServise. El primero es llamdo postList el cual corresponde a un arregla de post. El segundo es llamado url que es de tipo string.  
``` ts
  private postsList: Post[];
  private url: string;
``` 

Constructor de la clase PostService,  recibe un parametro de tipo HttpClient, crea un arreglo de post que iguala al atributo de la clase y  una obtiene una url del ambiente que de igual manera iguala al atributo de la clase.
``` ts
  constructor(private _http: HttpClient) {
    this.postsList = new Array<Post>();
    this.url = environment.api.url;
  }
``` 

El método de la clase PostService llamado getPostListSize, dicho método recibe un parámetro de tipo string con el filtro de categoría, un parametro de tipo string de parametros a buscar y un observable de tipo any, posteriormente devuelve la petición get obtenida a través HttpClient retornando post dependiendo de el filtro y los parametros consultados.
``` ts
  getPostsListSize(categoryFilter: string, searchParams: string = ''): Observable<any> {
    return this._http.get(`${this.url}/posts/count?${categoryFilter}${searchParams}`);
  }
``` 

Método de la clase PostService llamado getPostList, dicho método recibe un parámetro de tipo string con el filtro de la categoría, un parámetro llamado searchParam tipo string que son paametroa a buscar, un parámetro de tipo entero con la posición inicial, un parámetro de tipo entero con la posición final posteriormente y un observable de arreglo de Post. Devuelve la petición get obtenida a través HttpClient retornando el arreglo de post definido por los valores de filtro de categoría, parametros a bucar, inicio y final.
``` ts
  getPostList(categoryFilter: string = '', searchParams: string = '', start: number = 0, limit: number = 4): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?${categoryFilter}${searchParams}_start=${start}&_limit=${limit}`);
  }
``` 

El método de la clase PostService llamado getRecentPostList, dicho método recibe un parámetro de tipo string para ordenar, un parametro de numero con el limite final y un observable de tipo arreglo de post, posteriormente devuelve la petición get obtenida a través HttpClient retornando post ordenados y hasta el limite final definido en los paramtros.
``` ts
  getRecentPostList(sort: string = '', limit: number = 4): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?_sort=${sort}&_limit=${limit}`);
  }
``` 

El método de la clase PostService llamado getPostById, dicho método recibe un parámetro de tipo string con el identificador y un observable de tipo post, posteriormente devuelve la petición get obtenida a través HttpClient retornando el post respectivo al Id.
``` ts
  getPostById(id: string): Observable<Post> {
    return this._http.get<Post>(`${this.url}/posts/${id}`);
  }
``` 

El método de la clase PostService llamado getEnabledCategorie, dicho método recibe un parámetro de tipo numero como el limitefinal, si este es 0 significa que son todos los elementos, y un observable de tipo arreglo de Categorias, posteriormente devuelve la petición get obtenida a través HttpClient retornando las categorías dependiendo del límite final.
``` ts
  //if limit === 0 returns all the elements
  getEnabledCategories(limit: number = 0): Observable<Categoria[]> {
    return this._http.get<Categoria[]>(`${this.url}/categories${(limit) ? "?_limit=" : ""}${(limit)?limit:""}`);
  }
``` 

El método de la clase PostService llamado searchByKeywords, dicho método recibe un parámetro de tipo string con el keyword y un observable de tipo arreglo de Post, posteriormente devuelve un arreglo de post de la petición get obtenida a través HttpClient retornando dependiendo del keyword obtenido en los parametros.
``` ts
  //retorna un observable de un arreglo de posts;
  searchByKeywords(keywords: string): Observable<Post[]> {
    return this._http.get<Post[]>(`${this.url}/posts?${keywords}`);
  }
}
``` 