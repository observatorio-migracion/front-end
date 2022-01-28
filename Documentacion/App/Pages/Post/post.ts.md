# Documentacion post.ts

Esta seccion contiene la documentacion del codigo .ts del elemento post de la pagina web. Dentro de su estructura visual posee: 
* item : item

### Codigo

``` ts
import { Component, OnInit } from '@angular/core';
``` 

``` ts
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
``` 

``` ts
import { ActivatedRoute } from '@angular/router';
``` 

``` ts
import { ShowdownConverter } from 'ngx-showdown';
``` 

``` ts
import { postStyleConfig } from '../../helpers/postStyleConfig';
``` 

``` ts
import { Categoria } from 'src/app/models/Post';
``` 

```  ts
import { PostService } from 'src/app/services/post.service';
``` 

``` ts
import { environment } from 'src/environments/environment';
``` 

``` ts
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ShowdownConverter]
})
``` 

``` ts
export class PostComponent implements OnInit {
    //codigos siguientes
}
``` 

``` ts
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  categories: Categoria[] | undefined;
  date: Date | undefined;
  api: string;
  public contentHTML: SafeHtml;
``` 

``` ts
  constructor(private _postService: PostService, private _router: ActivatedRoute, private _sanitizer: DomSanitizer, private showdownConverter: ShowdownConverter) {
    this.contentHTML = "";
    this.api = environment.api.url;
  }
``` 

``` ts
  ngOnInit(): void {
    this.loadPost();
  }
``` 

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

