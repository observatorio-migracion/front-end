# Documentación blog.ts

### Esta sección contiene la documentación del código .ts del elemento blog de la página web. Dentro de su estructura visual posee: 
*  Barra de búsqueda: posicionada en el margen derecho. Filtra las búsquedas del usuario de forma activa.
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas: el primero, lleva a la página principal; el segundo, redirige al mismo blog; el tercero, redirige a la página de nosotros y el cuarto, al área de directorio.
*  Botón superior de modo oscuro/claro: situado en el margen superior izquierdo, es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior de Inicio: ubicado en el margen superior izquierdo, debajo del botón de modo oscuro claro. Su función consiste en volver a la página inicio.
*  Botón logo UCR: anclado en el margen superior derecho. Su función es redirigir a la página de la Universidad de Costa Rica.
*  Botón filtrar: anclado en el margen izquierdo. Posee una barra desplegable y filtra los resultados mostrados en la página según las categorías seleccionadas.
*  Botón de regreso a la parte superior: ubicado en el margen inferior derecho. Se mueve con el scroll. Su función es volver a la parte superior de la página al hacer click.
*  Cuerpo de la página: comprende el centro de la página web. En esta sección se despliegan los distintos posts.Posee la propiedad de scroll infinito, lo cual hace que al bajar en la página se carguen los demás posts.

### Código
Importa los componentes Component y OnInit desde la API Core de Angular.
``` ts
import { Component, OnInit } from '@angular/core';
```

Importa ActivatedRoute y Router de la API Router de Angular.
``` ts
import { ActivatedRoute, Router } from '@angular/router';
```

Importa desde la carpeta de models el modelo de CheckBoxData.
``` ts
import { CheckBoxData } from 'src/app/models/CheckBoxData';
``` 
Importa desde la carpeta de models los modelos de Categories y Post.
``` ts
import { Categoria, Post } from 'src/app/models/Post';
```
Importa de la carpera services el servicio de Posts.
``` ts
import { PostService } from 'src/app/services/post.service';
```
Importa Filter de los módulos Operators de la librería RxJS de Angular.
``` ts
import { filter } from 'rxjs/operators';
```

Importa Subscription de la librería RxJS de Angular.
``` ts
import { Subscription } from 'rxjs';
```

Agrega un componente selector de CSS llamado app-blog que identifica esta directiva en una plantilla y activa la instanciación de la directiva.  
``` ts
@Component({
  selector: 'app-blog'
})
```
Agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular.
``` ts
@Component({
  templateUrl: './blog.component.html'
})
```
Agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente.
``` ts
@Component({
  styleUrls: ['./blog.component.css']
})
```

Exporta la clase para ser usada en otras instancias.
``` ts
export class BlogComponent implements OnInit {

}
```

Crea el atributo público postStart e indica cuál es el primer post que se debe obtener .
``` ts
public postStart: number;
```

Crea el atributo público postLimit e indica el límite de post que se puede obtener cada vez que se haga scroll.
``` ts
public readonly postLimit: number;
```

Crea el atributo público categoryFilter y filtra los posts que se obtienen del backend según las categorías.
``` ts
public categoryFilter: string = '';
```

Crea el atributo público postListSize e indica el tamaño de los posts actuales.
``` ts
public postListSize: number;
```

Crea el atributo publico postsList de tipo arreglo, contiene la información de los posts
``` ts
public postsList: Post[];
```

Crea el atributo público categoriesList y almacena los filtros de las categorías.
``` ts
public categoriesList: (CheckBoxData)[] = [];
```

Crea el atributo público searchQuery y el dato que ingresa el usuario para realizar una búsqueda
``` ts
public searchQuery: string = '';
```

Crea el atributo público searchParams y el dato que se envía al backend para ser devuelto como resultado.
``` ts
public searchParams: string = '';
```

Inicializa el constructor del componente.
``` ts
constructor(private _postService: PostService, private
_activatedRoute:ActivatedRoute, private _router:Router) {
    
  }
```

Inicializa los valores públicos.
``` ts
this.postsList = new Array<Post>();
this.postListSize = 0;
this.postLimit = 4;
this.postStart = 0;
this._router.routeReuseStrategy.shouldReuseRoute = () => false;
```

Método que carga las categorías, toma el tamaño de los posts y carga los posts o retorna error si no lo logró.
``` ts
ngOnInit(): void {
    this.loadCategories();
    
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(size => {
      this.postListSize = size;
    }, err => console.error(err));
    this.loadPostList();
  }
```

Método que devuelve a la parte superior de la página.
``` ts
goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
```

Método encargado de redirigir a través de la URL a una búsqueda por filtro.
``` ts
loadCategoryFilterFromURL(){
    const category = this._activatedRoute.snapshot.paramMap.get('category');
    this.categoriesList.forEach((categ: CheckBoxData) => categ.value = false);
    const result = this.categoriesList.find( (categ:CheckBoxData)=>categ.name === category);
    if(result){
      result.value = true;
      this.valueChanged(result);
    }
  }
```
Método que recibe la lista de categorías desde el backend, toma las categorías y se agregan al filtro de categorías. En caso de que no se cargue la información se cargan las categorías por defecto.
``` ts
loadCategories(): void {
    this._postService.getEnabledCategories().subscribe((res: Categoria[]) => {
        this.categoriesList = res.map((value) => new CheckBoxData(value.nombre || '', false));
        this.loadCategoryFilterFromURL();
      }, err => console.error(err));
  }
```

Método que toma los valores que fueron asignados como nuevos y la lista de categorías, luego toma su valor de categoría y carga el post.
``` ts
async valueChanged(category: CheckBoxData) {
    this.categoryFilter = '';
    for (let category of this.categoriesList) {
      if (category.value) {
        this.categoryFilter += `_where[categorias.nombre]=${category.name}&`;
      }
    }
    await this.loadPostList(true);
```

Método que elimina la lista de post.
``` ts
async deletePostsList(): Promise<void>{
    this.postsList = [];
  }
```

Método que carga los post. Si resultara un error en el proceso, se devuelve a la salida.
``` ts
async loadPostList(clear:boolean =  false): Promise<void> {
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(
      size => {
        this.postListSize = size;
      })
      if(clear) this.postStart = 0;
      this._postService.getPostList(this.categoryFilter,this.searchParams, this.postStart, this.postLimit).subscribe(
      (posts: Post[]) => {
        if(clear){
          this.deletePostsList().then( ()=> {
            this.postsList.push(...posts);
          })
        }
        else{
          this.postsList.push(...posts);
        }        
      },
      err => {
        console.error(err)
      }
    );
```

Método que recibe un carácter a través del searchQuery y solicita al backend sobre los resultados que emparejen con el contenido, el título, la descripción y hace la solicitud de cargar los posts. Si el carácter de entrada resulta vacío, se limpia el parámetro de búsqueda y solicita todos los posts de vuelta.
``` ts 
async loadPostListSearch(): Promise<void> {
    if (this.searchQuery) {
      this.searchParams = '';
      this.searchParams += `_where[_or][0][contenido_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][1][titulo_contains]=${this.searchQuery}&`;
      this.searchParams += `_where[_or][2][descripcion_contains]=${this.searchQuery}&`;
      await this.loadPostList(true);
    }else{
      this.searchParams = '';
      await this.loadPostList(true);
    }
  }
```

Método para el llamado al scroll infinito.
``` ts
onScroll() {
    if(this.postStart <= this.postListSize){
      this.postStart += this.postLimit;
      this.loadPostList();
    }
  }
```

