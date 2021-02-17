import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ShowdownConverter } from 'ngx-showdown';
import { Categoria } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ShowdownConverter]
})
export class PostComponent implements OnInit {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  categories: Categoria[] | undefined;
  date: Date | undefined;
  api: string;
  public contentHTML: SafeHtml;
  constructor(private _postService: PostService, private _router: ActivatedRoute, private _sanitizer: DomSanitizer, private showdownConverter: ShowdownConverter) {
    this.contentHTML = "";
    this.api = environment.api.url;
  }

  ngOnInit(): void {
    this.loadPost();
  }
  async loadPost() {
    const id: number | null = Number(this._router.snapshot.paramMap.get('id'));
    const styles = `<style> 
    .post-container h1{
      margin-top: 5vh;
      font-size: 3rem;
      font-weight: 400;
    }
    .post-container h2{
      margin-top: 1rem;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    .post-container h3{
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    .post-container h4{
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .post-container p {
      margin: 1rem 0;
      white-space: pre-wrap;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    .post-container img{
      display: block;
      margin: 2rem auto;
      max-width: 95%;
      height: auto;
      border-radius: 0.3rem;
    }

    @media (max-width: 800px) {
      .post-container h1{
        margin-top: 3vh;
        font-size: 2rem;
        font-weight: 400;
      }
    }
    </style>`;

    if (id) {
      this._postService.getPostById(id).subscribe(
        res => {

          this.title = res.titulo;
          this.categories = res.categorias;
          this.date = res.published_at;
          let html = this.markDowntoHtml(`${styles}` + res.contenido);
          let aux = '';
          while (aux !== html) {
            aux = html;
            html = html.replace('src="/uploads/', 'src="' + this.api + "/uploads/")
          }
          this.contentHTML = this._sanitizer.bypassSecurityTrustHtml(html)
        },
        err => console.log(err));

    }
  }
  markDowntoHtml(text: string | undefined): string {
    let result = '';
    if (text) {
      result = this.showdownConverter.makeHtml(text);
    }
    return result;
  }
}
