import { Component, OnInit, SecurityContext, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  htmlContent: string;

  public scrolled: boolean;

  constructor(
    private postService: PostService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private showdownConverter: ShowdownConverter
  ) {
    this.htmlContent = '';
    this.api = environment.api.url;
    this.scrolled = false;
  }

  ngOnInit(): void {
    this.loadPost();
  }

  @HostListener('window:scroll', ['$event'])
  checkIfScroll(): void {
    this.scrolled = window.scrollY > 150;
  }

  async loadPost() {
    const id: string | null = this.router.snapshot.paramMap.get('id');

    if (id) {
      this.postService.getPostById(id).subscribe((post) => {
        this.title = post.titulo;
        this.categories = post.categorias;
        this.date = post.published_at;

        if (post?.contenido) {
          const verifiedContent = this.verifyFaqContent(post.contenido);

          if (verifiedContent !== '') {
            this.htmlContent = verifiedContent;
          }
        }
      });
    }
  }

  verifyFaqContent(value: string): string {
    const htmlConverted = this.markDowntoHtml(value);
    return this.sanitizer.sanitize(SecurityContext.HTML, htmlConverted) || '';
  }

  markDowntoHtml(text: string): string {
    let html = this.showdownConverter.makeHtml(text);
    let aux = '';
    while (aux !== html) {
      aux = html;
      html = html.replace('src="/uploads/', `src="${this.api}/uploads/`);
    }
    return html;
  }
}
