# Documentacion home.component.spect.ts

Esta sección contiene la documentación del codigo .ts del elemento home de la página web. Dentro de su estructura visual posee: 

* Información de la pagina: Proyecto del Observatorio de Migración.
*  Titulo "Categorias": siguiente parte de categorias
*  Listado de las categorías existentes: contiene los nombres y las imágenes de las primeras 4 categorias 
*  Botón "ver más": opción para ser seleccionada y ver las demás categorias exixtentes   
* Titulo "Publicaciones recientes": siguiente parte de publicaciones recientes
* Listado de Post Cards: listado de los post cards de los post
* Botón "Ir al blog": Botón que lleva al usuario al página del blog = /blog
* Titulo "Eventos Proximos": siguiente parte de eventos próximos
* Lista de actividades: para cada una de las activiades se puede observar el nombre, la fecha y "ver más información" que lleva a un modal
* Modal de más informacion: muestra la informacion completa de la actividad, incluye el tituno que es el nombre, la fecha en formato extentido, el enlace a la actividad, su descripción, entre otros
* Footer: muestra los detalles descritos en del componente footer

### Codigo
Importa los componentes ComponentFixture y TestBed desde la API Core de Angular y específicamente de testo
``` ts
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
```

Importa DomSanitizer que es una ayuda para evitar ataques de XXS y SafeHtml para también sanitizar enlaces y evitar ataques.
``` ts
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
```

Importa ShowdownConverter de ngx para poder utilizar javascript markdown con html
``` ts
import { ShowdownConverter } from 'ngx-showdown';
``` 

Importa de la carpeta Helper postStyleConfig para las publicaciones de la página
``` ts
import { postStyleConfig } from '../../helpers/postStyleConfig';
``` 

Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
``` 

Importa de la carpeta models los modelos de Activity e Imagenes
``` ts
import { Activity, Imagenes } from 'src/app/models/Activity';
``` 

Importa de la carpeta models los modelos de Categoría y Posts
``` ts
import { Categoria, Post } from 'src/app/models/Post';
``` 

Importa de la carpeta servicios los servicios de EventService para los eventos
```  ts
import { EventService } from 'src/app/services/event.service';
``` 

Importa de la carpeta servicios los servicios de PostService para las publicaciones
``` ts
import { PostService } from 'src/app/services/post.service';
``` 
Importa el ambiente de la página de la carpeta src de la página
``` ts
import { environment } from 'src/environments/environment';
``` 

Importa de la carpeta models los modelos a Thumbnail 
``` ts
import { Thumbnail } from '../../models/Post';
``` 

Agrega un componente *selector* de CSS llamado *app-home*, que identifica esta directiva en una plantilla y activa la instanciación de la directiva, luego agrega un componente *templeteUrl* que brinda la ruta relativa de un archivo de plantilla para un componente angular. Por último, se agrega un componente *styleUrls* que brinda la ruta relativa a un archivo que contiene hojas de estilo CSS para utilizar en este componente.
``` ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ShowdownConverter]
})
``` 

Exporta la clase HomeComponent para ser usada en otras instancias
``` ts
export class HomeComponent implements OnInit {
  // codigos siguientes
}
``` 

Para la clase *HomeComponent* se crean los atributos: *api*, *seeMoreCategories*, *categoriesLimit*, *recentPostLimit*, *activitiesLimit*, *categories*, *postsList*, *sortQuery*, *activities*, *activitySelected*, *contentHTML* y *defaultImage*
``` ts
  public api: string;
  public seeMoreCategories:boolean;
  public categoriesLimit: number;
  public readonly recentPostLimit:number;
  public readonly activitiesLimit: number;
  public categories: Categoria[];
  public postsList:Post[];
  public readonly sortQuery: string;
  public activities: Activity[];
  public activitySelected:Activity;
  public contentHTML: SafeHtml;
  defaultImage: string;
``` 

La clase HomeComponent recibe como parametros los servicios necesarios para sus funciones y inicializa sus variables
``` ts
  constructor(private _postService:PostService, 
              private _eventService: EventService,
              private _router:Router,
              private _sanitizer: DomSanitizer, 
              private showdownConverter: ShowdownConverter) {
    this.contentHTML = "";
    this.categoriesLimit = 4;
    this.recentPostLimit = 3;
    this.activitiesLimit = 4;
    this.sortQuery = "published_at:desc";
    this.categories = new Array<Categoria>();
    this.api = environment.api.url;
    this.postsList = new Array<Post>();
    this.seeMoreCategories = true;
    this.activities = new Array<Activity>();
    this.activitySelected = new Activity('', '', new Date(), '', '', '','', new Array<Imagenes>(),'');
    this.defaultImage = 'assets/images/default.png';
  }
``` 

Este método de la clase HomeComponent, hace un llamado al componente y lo inicia, además hace un llamado al método asincrónico loadRecentPosts para cargar los post más recientes, al método loadCategories para cargar las categorías y el método loadActivities para cargar los eventos. 
``` ts
  ngOnInit(): void {
    this.loadCategories();
    this.loadRecentPosts();
    this.loadActivities();
  }
``` 

Este método de la clase HomeComponent tiene como objetivo de obtener la lista de actividades por medio del servicio de eventos hasta el limite indicado por el atrbibuto activitiesLimit y se guarda en el atributo activities la lista obtenida. 
``` ts
  loadActivities(){  
    this._eventService.getActivitiesList(this.activitiesLimit).subscribe( (activities:Activity[])=>{
      this.activities = activities;
    })
  };
``` 

Este metodo de la clase HomeComponent, tiene como objetivo recibir un string, luego mediante el helper postStyleConfig y showdownConverter, convertir el texto a html. Luego se defina una variable auxiliar vacía. Mientras la variable auxiliar sea estrictamente diferente al html, se guarda el html en la auxiliar y se hace un cambio en el html remplazando lo igualado a src por el valor de la ruta de api concatenado con /updoads/. Por ultimo retorna el resultado del html.
``` ts
  markDowntoHtml(text: string): string {
    let html = postStyleConfig + this.showdownConverter.makeHtml(text);
    let aux = '';
    while (aux !== html) {
      aux = html;
      html = html.replace('src="/uploads/', 'src="' + this.api + "/uploads/")
    }
    return html;
  }
``` 

Este método de la clase HomeComponent recibe como parámetro una actividad y si esta contiene descripción, entonces mediante se llama al  método markDowntoHtml y se le pasa como parametro dicha descripción. Posteriormente mediante uno de las funciones de seguridad para sanitizar html, se pasa la variable html para que el resultado quede guardado en contentHTML. 
``` ts
  renderActivity(activity:Activity){
    // const styles = postStyleConfig;
    if(activity.descripcion){
      const html = this.markDowntoHtml(activity.descripcion);
      this.contentHTML = this._sanitizer.bypassSecurityTrustHtml(html);
    }
  
  }
``` 

Este método de la clase HomeComponent asigna el valor de cero al atributo categoriesLimit y hace un llamado al método  loadCategories para que carge todas las categorías existentes. 
``` ts
loadMoreCategories() {
    this.categoriesLimit = 0;
    this.loadCategories();
  }
``` 

Este método de la clase HomeComponent primero mediante el servicio de post de carguen las categorías hasta el límite indicado en el atributo categoriesLimit que además verifica si tiene imagen y en tal caso guarda el la variable el valor de la ruta del atributo api unido al valor de la url de la imágen y luego de esto ya se guarda la en el atributo categories la lista. Si no tiene limite o tiene un valor de 0 entonces se le asigna al atributo seeMoreCategories en valor de falso. Si se encuentra algun erroe entonces muestra en error en consola.  
``` ts
  loadCategories() {
    this._postService.getEnabledCategories(this.categoriesLimit).subscribe((categories: Categoria[]) => {
      categories.map((value: Categoria) => {
        if(value.imagen){
          value.imagen.formats.small.url = this.api + value.imagen.formats.small.url;//TODO: Recordar cambiarlo para el deploy
        }
      })
      this.categories = categories;
      if (!this.categoriesLimit) this.seeMoreCategories = false;
    }
      , err => {
        console.error("categories error: ", err);
      })
    }

``` 

Este método de la clase HomeComponent se encarga obtener con el servidio de post una lista de las publicaciones ordenadas por fecha descendentemente como lo indica el atributo sortQuery hasta el límite indicando en el atributo recentPostLimit y se guardar en el atributo  postsList la lista resultante. 
``` ts
    loadRecentPosts(){
      this._postService.getRecentPostList(this.sortQuery, this.recentPostLimit).subscribe((posts: Post[]) => {
        this.postsList = posts;
      }
        , err => {
          console.error("recent posts error: ", err);
        })
    }
``` 

Este método de la clase HomeComponent openActivity  recibe como parametro una actividad y esta se guarda en el atributo activitySelected. Porteriormente se llama al metodo renderActivity para convertir de markdown y asegurar el contenido del html.
``` ts
    openActivity(activity:Activity){
      this.activitySelected = activity;
      this.renderActivity(activity)
    }
``` 

Este método de la clase HomeComponent recibe como parametro una categoría y por la cual mediante el route navigate se utiliza para que se dirija la página hacía el blog y ese nombre de categotía. 
```  ts
    filterPostsByCategory(category:Categoria){
      this._router.navigate([`blog`,category.nombre]);
    }
``` 