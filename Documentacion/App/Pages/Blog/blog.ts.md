# Documentación blog.ts

Esta sección contiene la documentación del código .ts del elemento blog de la página web. Dentro de su estructura visual posee: 
*  Barra de búsqueda: se posiciona en el margen derecho, filtra las búsquedas del usuario de forma activa por lo que no requiere recargar la página y se encuentra anclada por lo cual no se moverá al deslizar la pagina
*  Barra de navegación: conformada por cuatro botones con sus respectivas etiquetas, el primero lleva a la página principal, el segundo es el corresponde al botón que redirige al mismo blog, el tercer botón redirige a la página de nosotros, y el cuarto al área de directorio.
*  Botón superior de modo oscuro/claro: el botón se sitúa en el margen superior izquierdo, dicho botón es deslizable y se encuentra anclado, su función es intercalar el modo oscuro claro y es capaz de recordar su última elección.
*  Botón superior Inicio: un botón ubicado en el margen superior izquierdo debajo del botón de modo oscuro claro, su función consiste en volver a la página inicio.
*  Botón logo UCR: un botón anclado en el margen superior derecho, su función es redirigir a la página de la Universidad de Costa Rica.
*  Botón filtrar: un botón anclado en el margen izquierdo posee una barra desplegable que revela algunos botones los cuales al hacer click filtran los resultados mostrados en el curso de la página por las categorías seleccionadas.
*  Botón de regreso a la parte superior: un botón ubicado en el margen inferior derecho se mueve junto con el scroll por lo cual no desaparece de la pantalla, su función es volver a la parte superior de la página al hacer click.
*  Cuerpo de la página: comprende el centro de la página web en esta sección se despliegan los distintos posts que se agregan a la página, posee la propiedad de scroll infinito lo cual hace que al bajar a la página se carguen los demás posts con forme se desciende en la lista.
### Código

Importa los componentes Component y OnInit desde la API Core de Angular

``` ts
import { Component, OnInit } from '@angular/core';
```

Importa ActivatedRoute y Router de la API Router de Angular

``` ts
import { ActivatedRoute, Router } from '@angular/router';
```

Importa CheckBoxData desde Models de la carpeta fuente src local del programa
``` ts
import { CheckBoxData } from 'src/app/models/CheckBoxData';
``` 
Importa Categories y Post de la carpeta fuente src local del programa
``` ts
import { Categoria, Post } from 'src/app/models/Post';
```
Importa Posts desde Services de la carpeta fuente src local del programa
``` ts
import { PostService } from 'src/app/services/post.service';
```
Importa Filter de los módulos Operators de la librería RxJS de Angular
``` ts
import { filter } from 'rxjs/operators';
```

Importa Subscription de la librería RxJS de Angular
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

Exporta la clase para ser usada en otras instancias
``` ts
export class BlogComponent implements OnInit {

}
```

Crea el atributo publico postStart de tipo número, indica cual es el primer post que se debe obtener 
``` ts
public postStart: number;
```

Crea el atributo publico postLimit de tipo número, indica el límite de post que se puede obtener cada vez que se haga scroll
``` ts
public readonly postLimit: number;
```

Crea el atributo publico categoryFilter de tipo string, filtra los posts que se obtienen del backend según las categorías
``` ts
public categoryFilter: string = '';
```

Crea el atributo publico postListSize de tipo número, indica el tamaño de los posts actuales, puede ser el total, el filtrado por categorías o puede ser el filtrado por la búsqueda del usuario.
``` ts
public postListSize: number;
```

Crea el atributo publico postsList de tipo arreglo, contiene la información de los posts
``` ts
public postsList: Post[];
```

Crea el atributo publico categoriesList de tipo arreglo (checkBox), almacena los filtros de las categorías
``` ts
public categoriesList: (CheckBoxData)[] = [];
```

Crea el atributo publico searchQuery de tipo string, dato que ingresa el usuario para realizar una búsqueda
``` ts
public searchQuery: string = '';
```

Crea el atributo publico searchParams de tipo string, dato que se envía al backend para ser devuelto como resultado
``` ts
public searchParams: string = '';
```

Inicializa el constructor del componente con los atributos privado _postService importado a través de src/app/services/post.service, _activatedRoute importado a través de @angular/router y _router importado a través de @angular/router
``` ts
constructor(private _postService: PostService, private
_activatedRoute:ActivatedRoute, private _router:Router) {
    
  }
```

Inicializa los valores públicos postsList como un arreglo de Post, postListSize con el valor defecto de 0, postLimit con el valor defecto de 4, postStart con el valor defecto 0 y _router con el valor false.
``` ts
this.postsList = new Array<Post>();
this.postListSize = 0;
this.postLimit = 4;
this.postStart = 0;
this._router.routeReuseStrategy.shouldReuseRoute = () => false;
```

Método que carga las categorías, toma el tamaño de los posts además dicho tamaño puede estar incluido con un filtro de categorías, con un filtro de búsqueda de usuario, o sin filtro y se obtiene la totalidad del tamaño de los posts, retorna error si no lo logro, de lo contrario carga los posts.
``` ts
ngOnInit(): void {
    this.loadCategories();
    
    this._postService.getPostsListSize(this.categoryFilter, this.searchParams).subscribe(size => {
      this.postListSize = size;
    }, err => console.error(err));
    this.loadPostList();
  }
```

Método que devuelve a la parte superior de la página mediante los valores numéricos del ScrollTop donde 0 es el inicio de la página.
``` ts
goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
```

Método encargado de redirigir a través de la URL a una búsqueda por filtro, la variable category recibe el valor del filtro de la selección desde el Home, luego toma la lista de categorías y las inicializa en falso para evitar que se muestren y realiza un búsqueda de la categoría recibida en primera instancia donde si coincide con la búsqueda y el resultado de la búsqueda no es null le asigna el valor de true y actualiza el valor que cambio.
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
Recibe a través del servicio de categorías la lista de categorías desde el backend, luego se toman las categorías y se agregan al filtro de categorías además se le asigna al valor checkbox de falso para que por defecto no tenga ningún filtro. En caso de que no se cargue la información adecuadamente se hace un llamado a loadCategoryFilterFromURL que cargara las categorías por defecto. Por último, si el proceso se realizó de forma correcta culmina si tuvo un error lo devuelve por consola.
``` ts
loadCategories(): void {
    this._postService.getEnabledCategories().subscribe((res: Categoria[]) => {
        this.categoriesList = res.map((value) => new CheckBoxData(value.nombre || '', false));
        this.loadCategoryFilterFromURL();
      }, err => console.error(err));
  }
```

Toma los valores que fueron asignados como nuevos y les asigna un CheckBoxdata con un valor de filtro vacío, luego se toma la lista de categorías y toma su valor de categoría. Mediante un iterador se recorre la lista del filtro de categorías y si el valor de la categoría es verdadero se asocia a través del filtro de categorías con su nombre para poderlo filtrar. Por último, carga el post mediante el llamado loadPostList(bool) donde si el valor es true se cargan se limpian los posts y se generan o si es false se adiciona a los que ya estaban.
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

Elimina la lista de post mediante un llamado a una promesa, esto hace que se espere hasta que el método culmine su llamado y los pueda borrar
``` ts
async deletePostsList(): Promise<void>{
    this.postsList = [];
  }
```

Recibe un valor bool el cual respectivamente si es true carga todos los posts o si es false adiciona al post existente. Mediante el servicio de _postService obtiene el tamaño de la lista el cual está condicionado por el filtro de categorías y la búsqueda del usuario, puede también no estar condicionado por ninguno o estar condicionado por ambos al mismo tiempo, este valor se almacena en postListSize. Si debe limpiar post existentes la variable postStart se le asigna 0 ya que esta variable indica el inicio para el scroll infinito. Posteriormente se hace un llamado a través del _postService a la lista de posts lo cuales están condicionados por el filtro de categorías, por la búsqueda del usuario, el post actual y el límite de post que debe alojar esto se almacena en un arreglo de post. Posteriormente se condiciona por un if, si hay que limpiar el post se llama al método de borrado de post y se le hace push a la lista de posts, caso contrario (else) solo se cargan los posts a la lista de post sin borrar. Por último, si resultara un error en el proceso se devuelve a la salida el error.
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

Para este método se recibe un carácter a través del searchQuery, si este carácter no viene vacío entonces se hace una solicitud al backend sobre los resultados que emparejen con el contenido del post, el título del post, a la descripción o a los tres anteriores en conjunto, seguidamente se hace la solicitud de cargar los posts por medio del loadPostList. Si el carácter de entrada resulta vacío, se limpia el parámetro de búsqueda searchParams y solicita los posts de vuelta en su totalidad.
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

Método para el llamado al scroll infinito, si la posición actual aun es inferior a la totalidad de los posts indica que aún hay post por cargar, entonces se le adiciona el límite de post establecido por defecto postLimit y se procede a cargar más post.
``` ts
onScroll() {
    if(this.postStart <= this.postListSize){
      this.postStart += this.postLimit;
      this.loadPostList();
    }
  }
```

