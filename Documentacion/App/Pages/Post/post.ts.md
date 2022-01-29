# Documentacion post.ts

Esta seccion contiene la documentacion del codigo .ts del elemento post de la pagina web. Dentro de su estructura visual posee: 
* Titulo : es el titulo asignado a la publicación 
* Fecha de publicación: fecha en que se creó la publicación en un formáto corto.
* Chip de las categorías: muestra la(s) categoría(s) de una publicación.
* Decripción breve: presenta una breve descripción  de la publicación. 

### Codigo

Importa los componentes Component y OnInit desde la API Core de Angular
``` ts
import { Component, OnInit } from '@angular/core';
``` 

Importa DomSanitizer que es una ayuda para evitar ataques de XXS y SafeHtml para también sanitizar enlaces y evitar ataques.
``` ts
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
``` 

Importa ActivatedRoute de la API Router de Angular
``` ts
import { ActivatedRoute } from '@angular/router';
``` 

Importa ShowdownConverter de ngx para poder utilizar javascript markdown con html
``` ts
import { ShowdownConverter } from 'ngx-showdown';
``` 

Importa postStyleConfig de la carpeta de helpers
``` ts
import { postStyleConfig } from '../../helpers/postStyleConfig';
``` 

Importa Categories y Post de la carpeta de los modelos de las categorías de la página
``` ts
import { Categoria } from 'src/app/models/Post';
``` 

Importa PostsServices de los servicios de la pagina para los post 
```  ts
import { PostService } from 'src/app/services/post.service';
``` 

Importa el ambiente de la página de la carpeta src de la página
``` ts
import { environment } from 'src/environments/environment';
``` 

Agrega un componente selector de CSS llamado app-post que identifica esta directiva en una plantilla y activa la instanciación de la directiva. 
Luego agrega un componente templeteUrl que brinda la ruta relativa de un archivo de plantilla para un componente angular. Agrega un componente styleUrls que brinda la ruta relativa a un archivo que contienen hojas de estilo CSS para usar en este componente. Por último, agrega un componente como provider de ShowdownConverter. 
``` ts
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ShowdownConverter]
})
``` 

Exporta la clase PostComponent para ser usada en otras instancias
``` ts
export class PostComponent implements OnInit {
    //codigos siguientes
}
``` 

Para la clase PostComponent se definem los atributos de la clase, un numero identificador, un titulo, descripción, un arreglo de categorías, una fecha, un atributo llamado api  de tipo string y un atributo de tipo  SafeHtml llamado contenthtml.
``` ts
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  categories: Categoria[] | undefined;
  date: Date | undefined;
  api: string;
  public contentHTML: SafeHtml;
``` 

La clase PostComponent recibe cómo parámetro el servicio de post, el ActivatedRoute, un DomSanitizer y el  ShowdownConverter. Se asigna a al atributo contentHTML un string vacío y al atributo api el valor de la url del api del ambiente.
``` ts
  constructor(private _postService: PostService, private _router: ActivatedRoute, private _sanitizer: DomSanitizer, private showdownConverter: ShowdownConverter) {
    this.contentHTML = "";
    this.api = environment.api.url;
  }
``` 
Este método de la clase PostComponent, hace un llamado al componente y lo inicia, además hace un llamado al método asincrótico loadPost para cargar los post.
``` ts
  ngOnInit(): void {
    this.loadPost();
  }
``` 

Este método asincrono de la clase PostComponent, primero se obtiene la ruta camturada como un snapshot de  la cual se extrae el id. Luego se guarda el estilo del helper postStyleConfig en la variable style. Muestra en consola el id obtenido anteriormente. Si este id no en nulo, obtiene el id del post y mediante un subscribe se asignan a los atriburos los valores de ese post. Si tiene contenido, se toma el texto del post que viene un markdown y se convierte a html llamando al metodo de la clase markDowntoHtml, luego es sanitizado y verificado para poder ser asignado al atributo contentHTML. Si no hay contenido o es nulo pasa al else vacío.Si a la hora de obtener el post anterior tiene algun error, este  se mostraría en consola.
``` ts
  async loadPost() {
    const id: string | null = this._router.snapshot.paramMap.get('id');
    const styles = postStyleConfig;
    console.log({id});
    if (id) {
      this._postService.getPostById(id).subscribe(
        post => {

          this.title = post.titulo;
          this.categories = post.categorias;
          this.date = post.published_at;

          if (post?.contenido) {
            const html = this.markDowntoHtml(post.contenido);
            this.contentHTML = this._sanitizer.bypassSecurityTrustHtml(html);
          }else{
          }

        },
        err => console.error(err));

    }
  }
``` 

Este metodo de la clase PostComponent, tiene como objetivo recibir un string, luego mediante el helper y showdownConverter convertir el texto a html. Luego se defina una variable auxiliar vacía. Mientras la variable auxiliar sea estrictamente diferente al html, se guarda el html en la auxiliar y se hace un cambio en el html. Por ultimo retorna ek resultado del html.
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

