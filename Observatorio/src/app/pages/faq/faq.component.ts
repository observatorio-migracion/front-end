import { Component, OnInit } from '@angular/core';
import { ShowdownConverter } from 'ngx-showdown';
import { postStyleConfig } from 'src/app/helpers/postStyleConfig';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Question } from 'src/app/models/Question';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  faqList: Question[];

  constructor(private faqService: FaqService, private showdownConverter: ShowdownConverter, private sanitizer: DomSanitizer) { 
    this.faqList = [];
  }

  ngOnInit(): void {
    this.loadFAQs();
  }

  loadFAQs(){
    this.faqService.getQuestionList().subscribe(
      (question: Question[]) =>{
        for (const faq of question) {
          if (faq?.contenido) {
            const html = this.markDowntoHtml(faq.contenido);
            const contentHTML: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
            faq.safeHtml = contentHTML;
          }
          this.faqList.push(faq);
        }
    });
  }

  markDowntoHtml(text: string): string {
    return postStyleConfig + this.showdownConverter.makeHtml(text);
  }
}
