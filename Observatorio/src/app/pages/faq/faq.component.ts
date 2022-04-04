import { Component, OnInit, SecurityContext } from '@angular/core';
import { ShowdownConverter } from 'ngx-showdown';
import { DomSanitizer } from '@angular/platform-browser';
import { Question } from 'src/app/models/Question';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {
  faqList: Question[];

  constructor(
    private faqService: FaqService,
    private showdownConverter: ShowdownConverter,
    private sanitizer: DomSanitizer
  ) {
    this.faqList = [];
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
    return this.showdownConverter.makeHtml(text);
  }
}
