import { Component, OnInit, SecurityContext } from '@angular/core';
import { ShowdownConverter } from 'ngx-showdown';
import { DomSanitizer } from '@angular/platform-browser';
import { Question } from 'src/app/models/Question';
import { FaqService } from 'src/app/services/faq.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  faqList: Question[];

  url: string;

  constructor(
    private faqService: FaqService,
    private showdownConverter: ShowdownConverter,
    private sanitizer: DomSanitizer
  ) {
    this.faqList = [];
    this.url = environment.main.url;
  }

  ngOnInit(): void {
    this.loadFAQs();
  }

  loadFAQs() {
    this.faqService.getQuestionList().subscribe((question: Question[]) => {
      for (const faq of question) {
        if (faq?.contenido) {
          const verifiedContent = this.verifyFaqContent(faq.contenido);

          if (verifiedContent !== '') {
            faq.contenido = verifiedContent;
            this.faqList.push(faq);
            this.faqList.sort((a, b) => a.order - b.order);
          }
        }
      }
    });
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
      html = html.replace('href="/post/', `href="${this.url}/post/`);
    }
    return html;
  }
}
