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

``` ts
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
```

``` ts
import { ShowdownConverter } from 'ngx-showdown';
``` 

``` ts
import { postStyleConfig } from '../../helpers/postStyleConfig';
``` 

``` ts
import { Component, OnInit } from '@angular/core';
``` 

``` ts
import { Activity, Imagenes } from 'src/app/models/Activity';
``` 

``` ts
import { Categoria, Post } from 'src/app/models/Post';
``` 
```  ts
import { EventService } from 'src/app/services/event.service';
``` 

``` ts
import { PostService } from 'src/app/services/post.service';
``` 

``` ts
import { environment } from 'src/environments/environment';
``` 

``` ts
import { Thumbnail } from '../../models/Post';
``` 

``` ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ShowdownConverter]
})
``` 

``` ts
export class HomeComponent implements OnInit {
  // codigos siguientes
}
``` 

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

``` ts
  ngOnInit(): void {
    this.loadCategories();
    this.loadRecentPosts();
    this.loadActivities();
  }
``` 

``` ts
  loadActivities(){  
    this._eventService.getActivitiesList(this.activitiesLimit).subscribe( (activities:Activity[])=>{
      this.activities = activities;
    })
  };
``` 

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

``` ts
  renderActivity(activity:Activity){
    // const styles = postStyleConfig;
    if(activity.descripcion){
      const html = this.markDowntoHtml(activity.descripcion);
      this.contentHTML = this._sanitizer.bypassSecurityTrustHtml(html);
    }
  
  }
``` 

``` ts
loadMoreCategories() {
    this.categoriesLimit = 0;
    this.loadCategories();
  }
``` 

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

``` ts
    openActivity(activity:Activity){
      this.activitySelected = activity;
      this.renderActivity(activity)
    }
    filterPostsByCategory(category:Categoria){
      this._router.navigate([`blog`,category.nombre]);
    }
``` 