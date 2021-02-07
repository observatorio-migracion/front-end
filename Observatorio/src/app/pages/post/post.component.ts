import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // public title:string;
  // public description:string;
  // public image:string;
  // public content:string;
  public contentHTML: SafeHtml;
  constructor(private _postService: PostService, private _router: ActivatedRoute, private _sanitizer: DomSanitizer) {
    //   this.title = "Some quick example text to build on the card title and make up the bulk?";
    //   this.description = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    //   this.image = "https://source.unsplash.com/random/1920x1080";
    //   this.content = "Proident veniam elit sint eu. Excepteur sint excepteur est duis ipsum pariatur enim cupidatat laboris incididunt deserunt commodo esse enim. Proident Lorem non esse duis aliqua duis dolor consectetur reprehenderit occaecat. Incididunt ipsum i est.\n\nUt eu occaecat sit enim elit eu quis sint nostrud et et. Ullamco culpa deserunt Lorem in aliqua nostrud ex proident cillum nulla. Est incididunt proident eiusmod veniam ullamco ea consequat magna commodo magna sit nisi qui proident. Aliqua ullamco pariatur anim amet proident aute consequat occaecat. Exercitation dolore adipisicing adipisicing commodo tempor duis aliqua anim eiusmod. Culpa minim incididunt sit non duis et do proident ad fugiat. Quis enim voluptate dolore ipsum do commodo.\n\nVelit fugiat nostrud tempor culpa. Non mollit sint veniam adipisicing quis excepteur. Mollit adipisicing dolor et duis. Ullamco eu esse adipisicing eiusmod culpa. Esse nostrud labore laborum dolor. In minim do est et quis quis dolore. Anim eiusmod officia ut cupidatat.\n\nUllamco ullamco culpa sint commodo do cupidatat qui exercitation esse. Sunt minim et et veniam do eiusmod laboris veniam esse consectetur. Aliqua elit nulla ullamco enim et proident proident esse Lorem nulla ipsum dolore nostrud. Dolore quis reprehenderit nostrud ullamco qui dolor consectetur voluptate. Reprehenderit deserunt ut sunt ullamco nostrud irure reprehenderit officia Lorem exercitation sunt laborum."
    this.contentHTML = "";
                        
  }

  ngOnInit(): void {
    this.loadPost();
  }
  async loadPost() {
    const id: string | null = this._router.snapshot.paramMap.get('id');
    const styles = `<style> 
    h1{
      font-size: 3rem;
      font-weight: 400;
    }
    p {
      white-space: pre-wrap;
      font-size: 1.3rem;
    }
    img{
      display: block;
      margin: 0 auto;
      max-width: 50%;
      height: auto;
      border-radius: 0.3rem;
    }</style>`;
    if (id) {
      await this._postService.getPostById(id).then(content => {
        this.contentHTML = this._sanitizer.bypassSecurityTrustHtml(`${styles}${content}`);
      })
    }
  }

}
